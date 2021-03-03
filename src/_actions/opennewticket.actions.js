import { userService } from "../_services/user.serviceh";
import { history } from "../_helpers";
//import { useForm } from 'react-hook-form';
import swal from "sweetalert";
export const vendorAction = {
  getVendor,
  getVendorById,
  onChangeProps,
  editVendorInfo,
  createVendor,
  deleteVendorById,
};
//const { reset } = useForm();
function getVendor() {
  return (dispatch) => {
    let apiEndpoint = "vendors";
    userService
      .get(apiEndpoint)
      .then((response) => {
        console.log(response.data);
        dispatch(changeVendorsList(response.data.data));
      })
      .catch((err) => {
        console.log("Error");
        console.log(err);
      });
  };
}

function createVendor(payload,reqBody) {
  return (dispatch) => {
    let apiEndpoint = "clscreateticket/";
    //const config = { headers: { "Content-Type": "multipart/form-data" } };
    var formData = new FormData();
    formData.append("email", reqBody.email);
        formData.append("name",reqBody.name);
    formData.append("business", reqBody.business);
    formData.append("phoneno", reqBody.phoneno);
    formData.append("extension", reqBody.extension);
    formData.append("helptopics", reqBody.helptopics);
    formData.append("issuesummary", reqBody.issuesummary);
    formData.append("details", reqBody.details);
    formData.append("initialstatus", reqBody.initialstatus);
    userService
      .post(apiEndpoint, payload,formData)

      .then((response) => {
        console.log(response.data);
        dispatch(createUserInfo());
        if (response.data) {
          swal("Record Saved Successful", "You clicked the button!", "success");

          // reset();
        }
      })
      .catch((err) => swal(err, "You clicked the button!", "error"));
  };
}

function getVendorById(id) {
  return (dispatch) => {
    let apiEndpoint = "vendors/" + id;
    userService.get(apiEndpoint).then((response) => {
      dispatch(editVendorsDetails(response.data.data));
    });
  };
}

function onChangeProps(props, event) {
  return (dispatch) => {
    dispatch(handleOnChangeProps(props, event.target.value));
  };
}

function editVendorInfo(id, payload) {
  return (dispatch) => {
    let apiEndpoint = "vendors/" + id;
    userService.put(apiEndpoint, payload).then((response) => {
      dispatch(updatedUserInfo());
      history.push("/vendor");
    });
  };
}

function deleteVendorById(id) {
  return (dispatch) => {
    let apiEndpoint = "vendors/" + id;
    userService.deleteDetail(apiEndpoint).then((response) => {
      dispatch(deleteVendorsDetails());
      dispatch(vendorAction.getVendor());
    });
  };
}

export function changeVendorsList(vendor) {
  return {
    type: "FETECHED_ALL_VENDOR",
    vendor: vendor,
  };
}

export function handleOnChangeProps(props, value) {
  return {
    type: "HANDLE_ON_CHANGE",
    props: props,
    value: value,
  };
}

export function editVendorsDetails(vendor) {
  return {
    type: "VENDOR_DETAIL",
    id: vendor._id,
    name: vendor.name,
    mobile: vendor.mobile,
    phone_number: vendor.phone_number,
    address: vendor.address,
  };
}

export function updatedUserInfo() {
  return {
    type: "USER_UPDATED",
  };
}

export function createUserInfo(createid) {
  return {
    type: "USER_CREATED_SUCCESSFULLY",
    payload: createid,
  };
}

export function deleteVendorsDetails() {
  return {
    type: "DELETED_VENDOR_DETAILS",
  };
}
