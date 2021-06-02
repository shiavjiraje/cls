import React, { useState, useEffect } from "react";
//import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
//import { createVendor } from "../../../_actions/section11.actions";

import config from '../../../config/config';
import swal from "sweetalert";
const ElevenSection = (props) => {
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
  
  const { handleSubmit } = useForm();

  //const dispatch = useDispatch();
  const onSubmit = (e) => {
    var axios = require('axios');
    let data =[otherdirectorship1, otherdirectorship2, otherdirectorship3, otherdirectorship4, otherdirectorship5, otherdirectorship6, otherdirectorship7 ];
    data.map(directorship => directorship.cfid=getcfid);
  
  var config = {
    method: 'post',
    url: `${urlpattern}clsbenefeficialowner/`,
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    swal("Record Saved Successful", );
    props.onThirteenSectionClick();
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
                <b>Beneficial Owners </b>{" "}
              </h6>
              <label>
                This section must be completed if the subscribers are not the
                beneficial owners of the shares in this company or the shares
                are being held by a corporate subscriber
                <span className="text-span">
                  <b><a className="text-span" target="_blank" href="/handyguide">(Note 14)</a></b>
                </span>
              </label>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={4}>
              <label className="text-span">
                <b>Beneficial Owners 1</b>
              </label><br/><br/>
              <Row>
              <label className="col-sm-12">
                Name 
              </label>
             
              <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship1, "firstname", event.target.value)
                }
                name="firstname"
                id="firstname1"
                placeholder="Firstname"
                className="form-control"
              />
            </Col>
            <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship1, "lastname", event.target.value)
                }
                name="lastname"
                id="lastname1"
                placeholder="Lastname"
                className="form-control"
              />
            </Col>
              </Row>
              <label className="mt-4">Address Line 1</label>
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
                id="addressline1_2"
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
                id="addressline1_3"
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
              <label className="mt-4">Nationality</label>
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
               <label className="mt-4">Occupation</label>
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
              <label className="mt-4">Nature of Beneficial Ownership</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "natureofownership",
                    event.target.value
                  )
                }
                name="natureofownership"
                id="natureofownership1"
              />
            </Col>
            <Col lg={4}>
              <label className="text-span">
                <b>Beneficial Owners 2</b>
              </label><br/><br/>
              <Row>
              <label className="col-sm-12">
                Name 
              </label>
             
              <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship2, "firstname", event.target.value)
                }
                name="firstname"
                id="firstname2"
                placeholder="Firstname"
                className="form-control"
              />
            </Col>
            <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship2, "lastname", event.target.value)
                }
                name="lastname"
                id="lastname2"
                placeholder="Lastname"
                className="form-control"
              />
            </Col>
              </Row>
              <label className="mt-4">Address Line 1</label>
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
                id="addressline2_1"
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
                id="addressline2_3"
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
              <label className="mt-4">Nationality</label>
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
               <label className="mt-4">Occupation</label>
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
              <label className="mt-4">Nature of Beneficial Ownership</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "natureofownership",
                    event.target.value
                  )
                }
                name="natureofownership"
                id="natureofownership2"
              />
            </Col>
            <Col lg={4}>
              <label className="text-span">
                <b>Beneficial Owners 3</b>
              </label><br/><br/>
              <Row>
              <label className="col-sm-12">
                Name 
              </label>
             
              <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship3, "firstname", event.target.value)
                }
                name="firstname"
                id="firstname3"
                placeholder="Firstname"
                className="form-control"
              />
            </Col>
            <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship3, "lastname", event.target.value)
                }
                name="lastname"
                id="lastname3"
                placeholder="Lastname"
                className="form-control"
              />
            </Col>
              </Row>
              <label className="mt-4">Address Line 1</label>
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
                id="addressline3_1"
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
                id="addressline3_2"
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
              <label className="mt-4">Nationality</label>
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
               <label className="mt-4">Occupation</label>
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
              <label className="mt-4">Nature of Beneficial Ownership</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "natureofownership",
                    event.target.value
                  )
                }
                name="natureofownership"
                id="natureofownership3"
              />
            </Col>
          </Row>
          
          <Row className="mt-3">
          {showFormFour &&<Col lg={3}>
            <label className="text-span">
                <b>Beneficial Owner 4</b>
              </label><br/>
              <Row>
              <label className="col-sm-12">
                Name 
              </label>
             
              <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship4, "firstname", event.target.value)
                }
                name="firstname"
                id="firstname4"
                placeholder="Firstname"
                className="form-control"
              />
            </Col>
            <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship4, "lastname", event.target.value)
                }
                name="lastname"
                id="lastname4"
                placeholder="Lastname"
                className="form-control"
              />
            </Col>
              </Row>
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
                id="addressline4_2"
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
                id="addressline4_3"
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
              <label className="mt-4">Nature of Beneficial Ownership</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "natureofownership",
                    event.target.value
                  )
                }
                name="natureofownership"
                id="natureofownership4"
              />
            </Col>}
            {showFormFive && <Col lg={3}>
            <label className="text-span">
                <b>Beneficial Owner 5</b>
              </label><br/>
              <Row>
              <label className="col-sm-12">
                Name 
              </label>
             
              <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship5, "firstname", event.target.value)
                }
                name="firstname"
                id="firstname5"
                placeholder="Firstname"
                className="form-control"
              />
            </Col>
            <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship5, "lastname", event.target.value)
                }
                name="lastname"
                id="lastname5"
                placeholder="Lastname"
                className="form-control"
              />
            </Col>
              </Row>
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
                id="addressline5_1"
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
                id="addressline5_2"
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
                id="addressline5_3"
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
              <label className="mt-4">Nature of Beneficial Ownership</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "natureofownership",
                    event.target.value
                  )
                }
                name="natureofownership"
                id="natureofownership5"
              />
            </Col>}
            {showFormSix &&<Col lg={3}>
            <label className="text-span">
                <b>Beneficial Owner 6</b>
              </label><br/>
              <Row>
              <label className="col-sm-12">
                Name 
              </label>
             
              <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship6, "firstname", event.target.value)
                }
                name="firstname"
                id="firstname6"
                placeholder="Firstname"
                className="form-control"
              />
            </Col>
            <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship6, "lastname", event.target.value)
                }
                name="lastname"
                id="lastname6"
                placeholder="Lastname"
                className="form-control"
              />
            </Col>
              </Row>
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
                id="addressline6_1"
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
                id="addressline6_2"
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
                id="addressline6_3"
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
               <label className="mt-4">Nature of Beneficial Ownership</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "natureofownership",
                    event.target.value
                  )
                }
                name="natureofownership"
                id="natureofownership6"
              />
            </Col>}
            {showFormSeven &&<Col lg={3}>
            <label className="text-span">
                <b>Beneficial Owner 7</b>
              </label><br/>
              <Row>
              <label className="col-sm-12">
                Name 
              </label>
             
              <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship7, "firstname", event.target.value)
                }
                name="firstname"
                id="firstname7"
                placeholder="Firstname"
                className="form-control"
              />
            </Col>
            <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship7, "lastname", event.target.value)
                }
                name="lastname"
                id="lastname7"
                placeholder="Lastname"
                className="form-control"
              />
            </Col>
              </Row>
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
                id="addressline7_1"
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
                id="addressline7_2"
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
                id="addressline7_3"
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
              <label className="mt-4">Nature of Beneficial Ownership</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "natureofownership",
                    event.target.value
                  )
                }
                name="natureofownership"
                id="natureofownership7"
              />
            </Col>}
          </Row>
          <Row className="pb-3 mt-4">
          {/* <Col lg={4} className="text-center">
            </Col>
            <Col lg={4} className="text-center">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </Col> */}
            <Col lg={12} className="text-right mt-2">
            {showButtonFour &&  <button
                type="button" onClick={addDirectorFour}
                className="btn btn-primary mr-2"
              >
                Add Beneficial Owners 
              </button>}
              {showButtonFive &&  <button
                type="button" onClick={addDirectorFive}
                className="btn btn-primary mr-2"
              >
                Add Beneficial Owners 
              </button>}
              {showButtonSix &&  <button
                type="button" onClick={addDirectorSix}
                className="btn btn-primary mr-2"
              >
                Add Beneficial Owners 
              </button>}
              {showButtonSeven &&  <button
                type="button" onClick={addDirectorSeven}
                className="btn btn-primary mr-2"
              >
                Add Beneficial Owners 
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

export default ElevenSection;
