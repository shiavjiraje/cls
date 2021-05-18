import React, { useState, useEffect } from "react";
//import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
//import { createVendor } from "../../../_actions/section7.actions";
import config from '../../../config/config';
import swal from "sweetalert";
const SevenSection = (props) => {
  
var urlpattern =config.baseUrl;
  
 

  const { handleSubmit } = useForm();
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

  //const dispatch = useDispatch();
  const onSubmit = (e) => {
    var axios = require('axios');
    let data =[otherdirectorship1, otherdirectorship2, otherdirectorship3,otherdirectorship4, otherdirectorship5, otherdirectorship6,otherdirectorship7];
  data.map(directorship => directorship.cfid=getcfid);
  
  var config = {
    method: 'post',
    url: `${urlpattern}clssubscriber/`,
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    swal("Record Saved Successful", );
    props.onEightSectionClick();
  })
  .catch(function (error) {
    swal(error.response.data, "error")
  });
  };
  
  const [otherdirectorship1, setotherdirectorship1] = useState({
    cfid: getcfid,
  });
  const [otherdirectorship2, setotherdirectorship2] = useState({
    cfid: getcfid,
  });
  const [otherdirectorship3, setotherdirectorship3] = useState({
    cfid: getcfid,
  });
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
  const [showFormFour, setshowFormFour]=useState(false);
const [showButtonFour, setshowButtonFour]=useState(true);
const [showFormFive, setshowFormFive]=useState(false);
const [showButtonFive, setshowButtonFive]=useState(false);
const [showFormSix, setshowFormSix]=useState(false);
const [showButtonSix, setshowButtonSix]=useState(false);
const [showFormSeven, setshowFormSeven]=useState(false);
const [showButtonSeven, setshowButtonSeven]=useState(false);
const addDirectorFour=()=>{
  setshowFormFour(true);
  setshowButtonFive(true);
  setshowButtonFour(false);
}
const addDirectorFive=()=>{
  setshowFormFive(true);
  setshowButtonFive(false);
  setshowButtonSix(true);
}
const addDirectorSix=()=>{
  setshowFormSix(true);
  setshowButtonSix(false);
  setshowButtonSeven(true);
}
const addDirectorSeven=()=>{
  setshowFormSeven(true);
  setshowButtonSeven(false);
}

  return (
    <section className="dark-section pb-4">
      <div className="content pt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mt-3">
            <Col lg={12}>
              <h6 className="text-span">
                <b>Subscriber Details (Individual) </b>{" "}
              </h6>
              <label>
                The subscribers are the first shareholders / members of the
                company and at least one is required <a className="text-span" target="_blank" href="/handyguide">(Note 13)</a>
                <p>
                  <b>NOTE:</b> If a Subscriber is a Corporate Body only please
                  enter N/A for Subscriber details (individual) and complete
                  Subscriber Details (Corporate)
                </p>
              </label>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={4}>
              <label className="text-span">
                <b>Subscriber 1</b>
              </label>
            </Col>
            <Col lg={4}>
              <label className="text-span">
                <b>Subscriber 2</b>
              </label>
            </Col>
            <Col lg={4}>
              <label className="text-span">
                <b>Subscriber 3</b>
              </label>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={4}>
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship1, "name", event.target.value)
                }
                name="name"
                id="name1"
              />
            </Col>
            <Col lg={4}>
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship2, "name", event.target.value)
                }
                name="name"
                id="name2"
              />
            </Col>
            <Col lg={4}>
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship3, "name", event.target.value)
                }
                name="name"
                id="name3"
              />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg={4}>
              <label>Address Line 1</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "addressline1",
                    event.target.value
                  )
                }
                name="addressline1"
                id="addressline1_1"
              />
            </Col>
            <Col lg={4}>
              <label>Address Line 1</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "addressline1",
                    event.target.value
                  )
                }
                name="addressline1"
                id="addressline1_2"
              />
            </Col>
            <Col lg={4}>
              <label>Address Line 1</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "addressline1",
                    event.target.value
                  )
                }
                name="addressline1"
                id="addressline1_3"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
              <label>Address Line 2</label>
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
            </Col>
            <Col lg={4}>
              <label>Address Line 2</label>
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
            </Col>
            <Col lg={4}>
              <label>Address Line 2</label>
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
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
              <label>Address Line 3</label>
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
            </Col>
            <Col lg={4}>
              <label>Address Line 3</label>
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
            </Col>
            <Col lg={4}>
              <label>Address Line 3</label>
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
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
              <label>Eircode/Postcode</label>
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
            </Col>
            <Col lg={4}>
              <label>Eircode/Postcode</label>
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
            </Col>
            <Col lg={4}>
              <label>Eircode/Postcode</label>
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
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship1, "country", event.target.value)
                }
                name="country"
                id="country1"
              />
            </Col>
            <Col lg={4}>
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship2, "country", event.target.value)
                }
                name="country"
                id="country2"
              />
            </Col>
            <Col lg={4}>
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship3, "country", event.target.value)
                }
                name="country"
                id="country3"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
              <label>Nationality</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "nationality",
                    event.target.value
                  )
                }
                name="nationality"
                id="nationality1"
              />
            </Col>
            <Col lg={4}>
              <label>Nationality</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "nationality",
                    event.target.value
                  )
                }
                name="nationality"
                id="nationality2"
              />
            </Col>
            <Col lg={4}>
              <label>Nationality</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "nationality",
                    event.target.value
                  )
                }
                name="nationality"
                id="nationality3"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
              <label>Occupation</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "occupation",
                    event.target.value
                  )
                }
                name="occupation"
                id="occupation1"
              />
            </Col>
            <Col lg={4}>
              <label>Occupation</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "occupation",
                    event.target.value
                  )
                }
                name="occupation"
                id="occupation2"
              />
            </Col>
            <Col lg={4}>
              <label>Occupation</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "occupation",
                    event.target.value
                  )
                }
                name="occupation"
                id="occupation3"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
              <label>Number Of Shares</label>
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
            <Col lg={4}>
              <label>Number Of Shares</label>
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
            <Col lg={4}>
              <label>Number Of Shares</label>
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
          </Row>
          <Row className="mt-4 pb-0">
            <Col lg={4}>
              <label>
                Is the Subscriber the beneficial owner of the above shares?
              </label>
              <select
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "beneficialowner",
                    event.target.value
                  )
                }
                name="beneficialowner"
                id="beneficialowner1"
              ><option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
            </Col>
            <Col lg={4}>
              <label>
                Is the Subscriber the beneficial owner of the above shares?
              </label>
              <select
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "beneficialowner",
                    event.target.value
                  )
                }
                name="beneficialowner"
                id="beneficialowner2"
              ><option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
            </Col>
            <Col lg={4}>
              <label>
                Is the Subscriber the beneficial owner of the above shares?
              </label>
              <select
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "beneficialowner",
                    event.target.value
                  )
                }
                name="beneficialowner"
                id="beneficialowner3"
              ><option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
            </Col>
          </Row>
          <Row className="mt-3">  
          {showFormFour &&
            <Col lg={3}>
            <label className="text-span">
                <b>Subscriber 4</b>
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
                id="addressline1_4"
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
              <label className="mt-4">
                Is the Subscriber the beneficial owner of the above shares?
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
              ><option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
            </Col>}
            {showFormFive&&
            <Col lg={3}>
            <label className="text-span">
                <b>Subscriber 5</b>
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
                  onChange(
                    setotherdirectorship5,
                    "postalcode",
                    event.target.value
                  )
                }
                name="postalcode"
                id="postalcode5"
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
              <label className="mt-4">Number Of Shares</label>
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
                Is the Subscriber the beneficial owner of the above shares?
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
              ><option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
            </Col>}
            {showFormSix&&
            <Col lg={3}>
            <label className="text-span">
                <b>Subscriber 6</b>
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
              <label className="mt-4">Address Line 1</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "addressline1",
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
                  onChange(
                    setotherdirectorship6,
                    "postalcode",
                    event.target.value
                  )
                }
                name="postalcode"
                id="postalcode6"
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
               <label className="mt-4">Number Of Shares</label>
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
                Is the Subscriber the beneficial owner of the above shares?
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
              ><option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
            </Col>}
            {showFormSeven&&
            <Col lg={3}>
            <label className="text-span">
                <b>Subscriber 7</b>
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
                    setotherdirectorship4,
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
                  onChange(
                    setotherdirectorship7,
                    "postalcode",
                    event.target.value
                  )
                }
                name="postalcode"
                id="postalcode7"
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
              <label className="mt-4">Number Of Shares</label>
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
                Is the Subscriber the beneficial owner of the above shares?
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
              ><option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
            </Col>}
          </Row>
          <Row className="pb-3">
          {/* <Col lg={4} className="text-right">
            </Col>
            <Col lg={4} className="text-center">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </Col> */}
            <Col lg={12} className="text-right mt-5">
            {showButtonFour &&  <button
                type="button" onClick={addDirectorFour}
                className="btn btn-primary mr-2"
              >
                Add More Subscriber 
              </button>}
              {showButtonFive &&  <button
                type="button" onClick={addDirectorFive}
                className="btn btn-primary mr-2"
              >
                Add More Subscriber 
              </button>}
              {showButtonSix &&  <button
                type="button" onClick={addDirectorSix}
                className="btn btn-primary mr-2"
              >
                Add More Subscriber 
              </button>}
              {showButtonSeven &&  <button
                type="button" onClick={addDirectorSeven}
                className="btn btn-primary mr-2"
              >
                Add More Subscriber 
              </button>}
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

export default SevenSection;
