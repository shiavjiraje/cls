import React, { useState,useEffect } from "react";
//import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
//import { createVendor } from "../../../_actions/section10.actions";
import config from '../../../config/config';
import swal from "sweetalert";
const TenSection = (props) => {
  var urlpattern =config.baseUrl;
  const [getcfid, setcfid] = useState();  
 
  useEffect(() => {
    getCfidApi();
    // eslint-disable-next-line 
}, []);
  const getCfidApi=()=>{
  var axios = require('axios');
  var data = '';
  
  var config = {
    method: 'get',
    url: `${urlpattern}clscfid`,
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    var setApicfid= response.data.cfid;
    setcfid(setApicfid);
  })
  .catch(function (error) {
    console.log(error);
  });
  
  }
  

  const { register, errors, handleSubmit } = useForm();

  //const dispatch = useDispatch();
  const onSubmit = (e) => {
    var axios = require('axios');
    let data =[otherdirectorship1, otherdirectorship2, otherdirectorship3,otherdirectorship4];
    data.map(directorship => directorship.cfid=getcfid);
  
  var config = {
    method: 'post',
    url: `${urlpattern}clscorporatesubscriber/`,
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    swal("Record Saved Successful",);
    props.onElevenSectionClick();
  })
  .catch(function (error) {
    swal(error.response.data, "error")
  });
  };
  const [otherdirectorship1, setotherdirectorship1] = useState({
    cfid: getcfid
  });
  const [otherdirectorship2, setotherdirectorship2] = useState({
    cfid: getcfid
  });
  const [otherdirectorship3, setotherdirectorship3] = useState({
    cfid: getcfid
  });
  const [otherdirectorship4, setotherdirectorship4] = useState({
    cfid: getcfid
  });
  const onChange = (set, field, value) => {
    set((state) => ({
      ...state,
      [field]: value,
    }));
  };

  return (
    <section className="dark-section pb-4">
      <div className="content pt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mt-3">
            <Col lg={12}>
              <h6 className="text-span">
                <b>Additional Corporate Subscriber Details </b>{" "}
              </h6>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={3}>
              <label className="text-span">
                <b>Corporate Subscriber 4</b>
              </label>
            </Col>
            <Col lg={3}>
              <label className="text-span">
                <b>Corporate Subscriber 5</b>
              </label>
            </Col>
            <Col lg={3}>
              <label className="text-span">
                <b>Corporate Subscriber 6</b>
              </label>
            </Col>
            <Col lg={3}>
              <label className="text-span">
                <b>Corporate Subscriber 7</b>
              </label>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={3}>
              <label className="mt-4">Company Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "companyname",
                    event.target.value
                  )
                }
                name="companyname"
                id="companyname1"
              />
              <label className="mt-4">Company Number</label>
              <input
                type="number"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "companyphonenumber",
                    event.target.value
                  )
                }
                name="companyphonenumber"
                id="companyphonenumber1"
              />
              <label className="mt-4">Company Director (Signing)</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "companydirector",
                    event.target.value
                  )
                }
                name="companydirector"
                id="companydirector1"
              />
               <label className="mt-4">Registered Office Address</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "registeroffice",
                    event.target.value
                  )
                }
                name="registeroffice"
                id="registeroffice1"
              />
              <label className="mt-4">Address Line 2</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "addressline2",
                    event.target.value
                  )
                }
                name="addressline2"
                id="addressline2_1"
              />
              <label className="mt-4">Address Line 3</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "addressline3",
                    event.target.value
                  )
                }
                name="addressline3"
                id="addressline3_1"
              />
              <label className="mt-4">Eircode/Postcode</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "postalcode",
                    event.target.value
                  )
                }
                name="postalcode"
                id="postalcode1"
              />
              <label className="mt-4">Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship1, "country", event.target.value)
                }
                name="country"
                id="country1"
              />
              <label className="mt-4">Number Of Shares</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "numberofshare",
                    event.target.value
                  )
                }
                name="numberofshare"
                id="numberofshare1"
              />
            </Col>
            <Col lg={3}>
              <label className="mt-4">Company Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "companyname",
                    event.target.value
                  )
                }
                name="companyname"
                id="companyname2"
              />
              <label className="mt-4">Company Number</label>
              <input
                type="number"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "companyphonenumber",
                    event.target.value
                  )
                }
                name="companyphonenumber"
                id="companyphonenumber2"
              />
              <label className="mt-4">Company Director (Signing)</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "companydirector",
                    event.target.value
                  )
                }
                name="companydirector"
                id="companydirector2"
              />
              <label className="mt-4">Registered Office Address</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "registeroffice",
                    event.target.value
                  )
                }
                name="registeroffice"
                id="registeroffice2"
              />
              <label className="mt-4">Address Line 2</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "addressline2",
                    event.target.value
                  )
                }
                name="addressline2"
                id="addressline2_2"
              />
              <label className="mt-4">Address Line 3</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "addressline3",
                    event.target.value
                  )
                }
                name="addressline3"
                id="addressline3_2"
              />
              <label className="mt-4">Eircode/Postcode</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "postalcode",
                    event.target.value
                  )
                }
                name="postalcode"
                id="postalcode2"
              />
              <label className="mt-4">Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship2, "country", event.target.value)
                }
                name="country"
                id="country2"
              />
              <label className="mt-4">Number Of Shares</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "numberofshare",
                    event.target.value
                  )
                }
                name="numberofshare"
                id="numberofshare2"
              />
            </Col>
            <Col lg={3}>
              <label className="mt-4">Company Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "companyname",
                    event.target.value
                  )
                }
                name="companyname"
                id="companyname3"
              />
              <label className="mt-4">Company Number</label>
              <input
                type="number"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "companyphonenumber",
                    event.target.value
                  )
                }
                name="companyphonenumber"
                id="companyphonenumber3"
              />
              <label className="mt-4">Company Director (Signing)</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "companydirector",
                    event.target.value
                  )
                }
                name="companydirector"
                id="companydirector3"
              />
              <label className="mt-4">Registered Office Address</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "registeroffice",
                    event.target.value
                  )
                }
                name="registeroffice"
                id="registeroffice3"
              />
              <label className="mt-4">Address Line 2</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "addressline2",
                    event.target.value
                  )
                }
                name="addressline2"
                id="addressline2_3"
              />
              <label className="mt-4">Address Line 3</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "addressline3",
                    event.target.value
                  )
                }
                name="addressline3"
                id="addressline3_3"
              />
              <label className="mt-4">Eircode/Postcode</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "postalcode",
                    event.target.value
                  )
                }
                name="postalcode"
                id="postalcode3"
              />
               <label className="mt-4">Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship3, "country", event.target.value)
                }
                name="country"
                id="country3"
              />
               <label className="mt-4">Number Of Shares</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "numberofshare",
                    event.target.value
                  )
                }
                name="numberofshare"
                id="numberofshare3"
              />
            </Col>
            <Col lg={3}>
              <label className="mt-4">Company Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "companyname",
                    event.target.value
                  )
                }
                name="companyname"
                id="companyname4"
              />
              <label className="mt-4">Company Number</label>
              <input
                type="number"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "companyphonenumber",
                    event.target.value
                  )
                }
                name="companyphonenumber"
                id="companyphonenumber4"
              />
              <label className="mt-4">Company Director (Signing)</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "companydirector",
                    event.target.value
                  )
                }
                name="companydirector"
                id="companydirector4"
              />
              <label className="mt-4">Registered Office Address</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "registeroffice",
                    event.target.value
                  )
                }
                name="registeroffice"
                id="registeroffice4"
              />
              <label className="mt-4">Address Line 2</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "addressline2",
                    event.target.value
                  )
                }
                name="addressline2"
                id="addressline2_4"
              />
              <label className="mt-4">Address Line 3</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "addressline3",
                    event.target.value
                  )
                }
                name="addressline3"
                id="addressline3_4"
              />
              <label className="mt-4">Eircode/Postcode</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "postalcode",
                    event.target.value
                  )
                }
                name="postalcode"
                id="postalcode4"
              />
              <label className="mt-4">Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship4, "country", event.target.value)
                }
                name="country"
                id="country4"
              />
              <label className="mt-4">Number Of Shares</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "numberofshare",
                    event.target.value
                  )
                }
                name="numberofshare"
                id="numberofshare4"
              />
            </Col>
          </Row>
          <Row className="pb-3 mt-4">
          {/* <Col lg={4} className="text-right">
            </Col>
            <Col lg={4} className="text-center">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </Col> */}
            <Col lg={12} className="text-right">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Next
              </button>
            </Col>
          </Row>
        </form>
      </div>
    </section>
  );
};

export default TenSection;
