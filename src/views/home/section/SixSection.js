import React, { useState, useEffect } from "react";
//import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
import swal from "sweetalert";
//import { createVendor } from "../../../_actions/section6.actions";
import config from '../../../config/config';
const SixSection = (props) => {

var urlpattern =config.baseUrl;
  // var getcfid = JSON.parse(localStorage.getItem("apiData"));
  // console.log(getcfid, "section-6");
  // var cfidPost =getcfid.cfid
  
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
  
  const { handleSubmit } = useForm();
  //const dispatch = useDispatch();
  const onSubmit = (e) => {
    var axios = require('axios');
    let data =[otherdirectorship4, otherdirectorship5, otherdirectorship6,otherdirectorship7];
    data.map(directorship => directorship.cfid=getcfid);
  
  var config = {
    method: 'post',
    url: `${urlpattern}clsdirector/`,
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    swal("Record Saved Successful", );
    props.onSevenSectionClick();
  })
  .catch(function (error) {
    swal(error.response.data, "error")
  });
  };

  const [otherdirectorship4, setotherdirectorship4] = useState({
    cfid: getcfid,
  });
  const [otherdirectorship5, setotherdirectorship5] = useState({
    cfid: getcfid,
  });
  const [otherdirectorship6, setotherdirectorship6] = useState({
    cfid: getcfid,
  });
  const [otherdirectorship7, setotherdirectorship7] = useState({
    cfid: getcfid,
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
            <Col lg={3}>
            <label className="text-span">
                <b>Director 4</b>
              </label><br/>
              <label className="mt-4">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship4, "name", event.target.value)
                }
                name="name"
                id="name4"
              />
               <label className="mt-4">Date Of Birth</label>
              <input
                type="date" min="1900-01-01"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship4, "dob", event.target.value)
                }
                name="dob"
                id="dob4"
              />
              <label className="mt-4">Occupation</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "occupation",
                    event.target.value
                  )
                }
                name="occupation"
                id="occupation4"
              />
               <label className="mt-4">Address Line 1</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "addressline1",
                    event.target.value
                  )
                }
                name="addressline1"
                id="addressline4_1"
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
                  onChange(setotherdirectorship4, "postal", event.target.value)
                }
                name="postal"
                id="postal4"
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
              <label className="mt-4">Nationality</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "nationality",
                    event.target.value
                  )
                }
                name="nationality"
                id="nationality4"
              />
              <label className="mt-4">Other Directorship 1 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "otherdirectorship4",
                    event.target.value
                  )
                }
                name="otherdirectorship4"
                id="otherdirectorship4_1"
              />
              <label className="mt-4">Other Directorship 2 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "otherdirectorship4",
                    event.target.value
                  )
                }
                name="otherdirectorship4"
                id="otherdirectorship4_2"
              />
              <label className="mt-4">Other Directorship 3 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "otherdirectorship4",
                    event.target.value
                  )
                }
                name="otherdirectorship4"
                id="otherdirectorship4_3"
              />
              <label className="mt-4">Disqualified or Restricted</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "restricted",
                    event.target.value
                  )
                }
                name="restricted"
                id="restricted4"
              />
              <label className="mt-4">
                If this director is also a subscriber, enter their number of
                shares
              </label>
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
              <label className="mt-4">
                Is the director the beneficial owner of the above shares?
              </label>
              <select
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "beneficialowner",
                    event.target.value
                  )
                }
                name="beneficialowner"
                id="beneficialowner4"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </Col>
            <Col lg={3}>
            <label className="text-span">
                <b>Director 5</b>
              </label><br/>
              <label className="mt-4">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship5, "name", event.target.value)
                }
                name="name"
                id="name5"
              />
              <label className="mt-4">Date Of Birth</label>
              <input
                type="date" min="1900-01-01"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship5, "dob", event.target.value)
                }
                name="dob"
                id="dob5"
              />
              <label className="mt-4">Occupation</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "occupation",
                    event.target.value
                  )
                }
                name="occupation"
                id="occupation5"
              />
               <label className="mt-4">Address Line 1</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "addressline1",
                    event.target.value
                  )
                }
                name="addressline1"
                id="addressline1_5"
              />
              <label className="mt-4">Address Line 2</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "addressline2",
                    event.target.value
                  )
                }
                name="addressline2"
                id="addressline2_5"
              />
              <label className="mt-4">Address Line 3</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "addressline3",
                    event.target.value
                  )
                }
                name="addressline3"
                id="addressline3_5"
              />
              <label className="mt-4">Eircode/Postcode</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship5, "postal", event.target.value)
                }
                name="postal"
                id="postal5"
              />
              <label className="mt-4">Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship5, "country", event.target.value)
                }
                name="country"
                id="country5"
              />
              <label className="mt-4">Nationality</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "nationality",
                    event.target.value
                  )
                }
                name="nationality"
                id="nationality5"
              />
              <label className="mt-4">Other Directorship 1 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "otherdirectorship5",
                    event.target.value
                  )
                }
                name="otherdirectorship5"
                id="otherdirectorship5_1"
              />
              <label className="mt-4">Other Directorship 2 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "otherdirectorship5",
                    event.target.value
                  )
                }
                name="otherdirectorship5"
                id="otherdirectorship5_2"
              />
              <label className="mt-4">Other Directorship 3 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "otherdirectorship5",
                    event.target.value
                  )
                }
                name="otherdirectorship5"
                id="otherdirectorship5_3"
              />
              <label className="mt-4">Disqualified or Restricted</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "restricted",
                    event.target.value
                  )
                }
                name="restricted"
                id="restricted5"
              />
              <label className="mt-4">
                If this director is also a subscriber, enter their number of
                shares
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "numberofshare",
                    event.target.value
                  )
                }
                name="numberofshare"
                id="numberofshare5"
              />
              <label className="mt-4">
                Is the director the beneficial owner of the above shares?
              </label>
              <select
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "beneficialowner",
                    event.target.value
                  )
                }
                name="beneficialowner"
                id="beneficialowner5"
              >
                 <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </Col>
            <Col lg={3}>
            <label className="text-span">
                <b>Director 6</b>
              </label><br/>
              <label className="mt-4">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship6, "name", event.target.value)
                }
                name="name"
                id="name6"
              />
              <label className="mt-4">Date Of Birth</label>
              <input
                type="date" min="1900-01-01"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship6, "dob", event.target.value)
                }
                name="dob"
                id="dob6"
              />
              <label className="mt-4">Occupation</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "occupation",
                    event.target.value
                  )
                }
                name="occupation"
                id="occupation6"
              />
              <label className="mt-4">Address Line 1</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "addressline5",
                    event.target.value
                  )
                }
                name="addressline1"
                id="addressline1_6"
              />
              <label className="mt-4">Address Line 2</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "addressline2",
                    event.target.value
                  )
                }
                name="addressline2"
                id="addressline2_6"
              />
              <label className="mt-4">Address Line 3</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "addressline3",
                    event.target.value
                  )
                }
                name="addressline3"
                id="addressline3_6"
              />
              <label className="mt-4">Eircode/Postcode</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship6, "postal", event.target.value)
                }
                name="postal"
                id="postal6"
              />
              <label className="mt-4">Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship6, "country", event.target.value)
                }
                name="country"
                id="country6"
              />
              <label className="mt-4">Nationality</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "nationality",
                    event.target.value
                  )
                }
                name="nationality"
                id="nationality6"
              />
              <label className="mt-4">Other Directorship 1 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "otherdirectorship6",
                    event.target.value
                  )
                }
                name="otherdirectorship6"
                id="otherdirectorship6_1"
              />
              <label className="mt-4">Other Directorship 2 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "otherdirectorship6",
                    event.target.value
                  )
                }
                name="otherdirectorship6"
                id="otherdirectorship6_2"
              />
              <label className="mt-4">Other Directorship 3 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "otherdirectorship6",
                    event.target.value
                  )
                }
                name="otherdirectorship6"
                id="otherdirectorship6_3"
              />
              <label className="mt-4">Disqualified or Restricted</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "restricted",
                    event.target.value
                  )
                }
                name="restricted"
                id="restricted6"
              />
              <label className="mt-4">
                If this director is also a subscriber, enter their number of
                shares
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "numberofshare",
                    event.target.value
                  )
                }
                name="numberofshare"
                id="numberofshare6"
              />
              <label className="mt-4">
                Is the director the beneficial owner of the above shares?
              </label>
              <select
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "beneficialowner",
                    event.target.value
                  )
                }
                name="beneficialowner"
                id="beneficialowner6"
              > <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
            </Col>
            <Col lg={3}>
            <label className="text-span">
                <b>Director 7</b>
              </label><br/>
              <label className="mt-4">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship7, "name", event.target.value)
                }
                name="name"
                id="name7"
              />
              <label className="mt-4">Date Of Birth</label>
              <input
                type="date" min="1900-01-01"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship7, "dob", event.target.value)
                }
                name="dob"
                id="dob7"
              />
              <label className="mt-4">Occupation</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "occupation",
                    event.target.value
                  )
                }
                name="occupation"
                id="occupation7"
              />
              <label className="mt-4">Address Line 1</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "addressline1",
                    event.target.value
                  )
                }
                name="addressline1"
                id="addressline1_7"
              />
              <label className="mt-4">Address Line 2</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "addressline2",
                    event.target.value
                  )
                }
                name="addressline2"
                id="addressline2_7"
              />
              <label className="mt-4">Address Line 3</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "addressline3",
                    event.target.value
                  )
                }
                name="addressline3"
                id="addressline3_7"
              />
              <label className="mt-4">Eircode/Postcode</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship7, "postal", event.target.value)
                }
                name="postal"
                id="postal7"
              />
              <label className="mt-4">Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship7, "country", event.target.value)
                }
                name="country"
                id="country7"
              />
              <label className="mt-4">Nationality</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "nationality",
                    event.target.value
                  )
                }
                name="nationality"
                id="nationality7"
              />
              <label className="mt-4">Other Directorship 1 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "otherdirectorship7",
                    event.target.value
                  )
                }
                name="otherdirectorship7"
                id="otherdirectorship7_1"
              />
              <label className="mt-4">Other Directorship 2 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "otherdirectorship7",
                    event.target.value
                  )
                }
                name="otherdirectorship7"
                id="otherdirectorship7_2"
              />
              <label className="mt-4">Other Directorship 3 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "otherdirectorship7",
                    event.target.value
                  )
                }
                name="otherdirectorship7"
                id="otherdirectorship7_3"
              />
              <label className="mt-4">Disqualified or Restricted</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "restricted",
                    event.target.value
                  )
                }
                name="restricted"
                id="restricted7"
              />
              <label className="mt-4">
                If this director is also a subscriber, enter their number of
                shares
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "numberofshare",
                    event.target.value
                  )
                }
                name="numberofshare"
                id="numberofshare7"
              />
              <label className="mt-4">
                Is the director the beneficial owner of the above shares?
              </label>
              <select
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "beneficialowner",
                    event.target.value
                  )
                }
                name="beneficialowner"
                id="beneficialowner7"
              > <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
            </Col>
          </Row>
          {/* <Row className="pb-3 mt-5">
          {/* <Col lg={4} className="text-right">
            </Col>
            <Col lg={4} className="text-center">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </Col> 
            <Col lg={12} className="text-right">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Next
              </button>
            </Col>
          </Row> */}
        </form>
      </div>
    </section>
  );
};

export default SixSection;
