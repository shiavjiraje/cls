import React, { useState, useEffect } from "react";
//import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
//import { createVendor } from "../../../_actions/section13.actions";
import config from '../../../config/config';
import swal from "sweetalert";
var urlpattern =config.baseUrl;
const ThirteenSection = (props) => {

  
  //console.log(getcfid);
  const { register, errors, handleSubmit } = useForm();
  //const dispatch = useDispatch();
  const [roaddressline1 ,setroaddressline1]=useState('');
  const [caaddressline1 ,setcaaddressline1]=useState('');
  const [roaddressline2 ,setroaddressline2]=useState('');
  const [caaddressline2 ,setcaaddressline2]=useState('');
  const [roaddressline3 ,setroaddressline3]=useState('');
  const [caaddressline3 ,setcaaddressline3]=useState('');
  const [ropostalcode ,setropostalcode]=useState('');
  const [capostalcode ,setcapostalcode]=useState('');
  const [roisalsothebusinessorcaaddress ,setroisalsothebusinessorcaaddress]=useState('');
  const [cfid, setcfid] = useState();
  const [disabled, setdesable] = useState(false);
  const onSubmit = (e) => {
    setdesable(true);
    var axios = require('axios');
    let data ={
      cfid:cfid,
      roaddressline1: roaddressline1,
      caaddressline1: caaddressline1,
      roaddressline2: roaddressline2,
      caaddressline2: caaddressline2,
      roaddressline3: roaddressline3,
      caaddressline3: caaddressline3,
      ropostalcode: ropostalcode,
      capostalcode: capostalcode,
      roisalsothebusinessorcaaddress: roisalsothebusinessorcaaddress,
    }
  
  var config = {
    method: 'post',
    url: `${urlpattern}clsaddressdetails/`,
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    swal("Record Saved Successful", );
    props.onFourteenSectionClick();
    setdesable(false);
  })
  .catch(function (error) {
    swal(error.response.data, "error");
    setdesable(false);
  });
  };
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
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className={"light-section pb-4"}>
          <div className="content pt-5">
            <Row className="mt-3">
              <Col lg={12}>
                <h6 className="text-span">
                  <b>Address Details </b>{" "}
                </h6>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col lg={6}>
                <label className="text-span">
                  <b>Registered Office Address </b>
                </label>
                <p>This must be in the Republic of Ireland<a className="text-span" target="_blank" href="/handyguide">(Note 15)</a></p>
                <Row className="mt-4">
                <Col lg={6}>
                <label>
                  Address Line 1 <span className="redspan">*</span>
                </label>
              </Col>
              <Col lg={6}>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setroaddressline1(e.target.value);
                  }}
                  name="roaddressline1"
                  id="roaddressline1"
                  ref={register({ required: true })}
                />
                {errors.roaddressline1 && (
                  <p className="redspan font-12">The field is Required</p>
                )}
              </Col>
                </Row>
                <Row className="mt-4">
                <Col lg={6}>
                <label>
                  Address Line 2 <span className="redspan">*</span>
                </label>
              </Col>
              <Col lg={6}>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setroaddressline2(e.target.value);
                  }}
                  name="roaddressline2"
                  id="roaddressline2"
                  ref={register({ required: true })}
                />
                {errors.roaddressline2 && (
                  <p className="redspan font-12">The field is Required</p>
                )}
              </Col>
                </Row>
                <Row className="mt-4">
                <Col lg={6}>
                <label>Address Line 3</label>
              </Col>
              <Col lg={6}>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setroaddressline3(e.target.value);
                  }}
                  name="roaddressline3"
                  id="roaddressline3"
                />
              </Col>
                </Row>
                <Row className="mt-4">
                <Col lg={6}>
                <label>Eircode/Postcode</label>
              </Col>
              <Col lg={6}>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setropostalcode(e.target.value);
                  }}
                  name="ropostalcode"
                  id="ropostalcode"
                />
              </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <label className="text-span">
                  <b>Business / Central Administration Address</b>
                </label>
                <p>(If different from Registered Address)</p>
                <Row className="mt-4">
             
              <Col lg={6}>
                <label>Address Line 1</label>
              </Col>
              <Col lg={6}>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setcaaddressline1(e.target.value);
                  }}
                  name="caaddressline1"
                  id="caaddressline1"
                />
              </Col>
            </Row>
            <Row className="mt-4">
              
              <Col lg={6}>
                <label>Address Line 2</label>
              </Col>
              <Col lg={6}>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setcaaddressline2(e.target.value);
                  }}
                  name="caaddressline2"
                  id="caaddressline2"
                />
              </Col>
            </Row>
            <Row className="mt-4">
              
              <Col lg={6}>
                <label>Address Line 3</label>
              </Col>
              <Col lg={6}>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setcaaddressline3(e.target.value);
                  }}
                  name="caaddressline3"
                  id="caaddressline3"
                />
              </Col>
            </Row>
            <Row className="mt-4 mb-5">
             
              <Col lg={6}>
                <label>Eircode/Postcode</label>
              </Col>
              <Col lg={6}>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setcapostalcode(e.target.value);
                  }}
                  name="capostalcode"
                  id="capostalcode"
                />
              </Col>
            </Row>
              </Col>  
            </Row>
            
            
           
            
            <Row>
              <Col lg={12}>
                <div className="form-group form-check">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      value={"Yes" || "No"}
                      defaultChecked={false}
                      onChange={(e) => {
                        setroisalsothebusinessorcaaddress(e.target.value);
                      }}
                      name="roisalsothebusinessorcaaddress"
                      id="roisalsothebusinessorcaaddress"
                      type="checkbox"
                    />{" "}
                    The registered office address is also the business / central
                    administration address
                  </label>
                  {errors.agree && (
                    <p className="redspan font-12">The field is Required</p>
                  )}
                </div>
              </Col>
            </Row>

            <Row className="pb-3">
            {/* <Col lg={4} className="text-center">
              </Col>
              <Col lg={4} className="text-center">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </Col> */}
              <Col lg={12} className="text-right">
                <button
                  type="submit"  disabled={disabled}
                  className="btn btn-primary"
                >
                  Save and Next
                </button>
              </Col>
            </Row>
          </div>
        </section>
      </form>
    </React.Fragment>
  );
};

export default ThirteenSection;
