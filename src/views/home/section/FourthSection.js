import React, { useState, useEffect } from "react";
//import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
//import { createVendor } from "../../../_actions/section4.actions";
import config from '../../../config/config';
import swal from "sweetalert";
//import axios from "axios";
const FourthSection = (props) => {
  var urlpattern =config.baseUrl;
  //var getcfid = JSON.parse(localStorage.getItem("apiData"));
  //var cfidPost =getcfid.cfid
 // console.log(getcfid.cfid, "section-4");
  const [cfid, setcfid] = useState();  
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [companyname, setcompanyname] = useState('');
  const [dob, setdob] = useState("");
  const [companynumber, setcompanynumber] = useState("");
  const [companydirector, setcompanydirector] = useState("");
  const [companyregiseroffice, setcompanyregiseroffice] = useState("");
  const [addressline1, setaddressline1] = useState("");
  const [addressline2, setaddressline2] = useState("");
  const [addressline3, setaddressline3] = useState("");
  const [companyaddressline1, setcompanyaddressline1] = useState("");
  const [companyaddressline2, setcompanyaddressline2] = useState("");
  const [country, setcountry] = useState("");
  const [companypostal, setcompanypostal] = useState("");
  const [postal, setpostal] = useState("");
  const [companycountry, setcompanycountry] = useState("");
  const { register, errors, handleSubmit } = useForm();
  const [readonly, setreadonly] = useState("");
  //const dispatch = useDispatch();
  const onSubmit = (e) => {
    setreadonly("readonly");
    var axios = require('axios');
    var name=firstname + " " + lastname;
    var data = {
      cfid: cfid,
      name: name,
      companyname: companyname,
      dob: dob,
      companynumber: companynumber,
      addressline1: addressline1,
      addressline2: addressline2,
      addressline3: addressline3,
      companydirector: companydirector,
      companyregiseroffice: companyregiseroffice,
      companyaddressline1: companyaddressline1,
      companyaddressline2: companyaddressline2,
      country: country,
      companypostal: companypostal,
      postal: postal,
      companycountry: companycountry,
    };
    
    var config = {
      method: 'post',
      url: `${urlpattern}clssecretary/`,
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      swal("Record Saved Successful", );
      props.onFiveSectionClick();
      setreadonly("readonly");
    })
    .catch(function (error) {
      swal(error.response.data, "error");
      setreadonly("");
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
    <section className={"dark-section pb-4", readonly}>
      <div className="content pt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mt-3">
            <Col lg={12}>
              <h6 className="text-span">
                <b>Company Secretary Details </b>{" "}
              </h6>
              <label>
                <b>
                  Every company is required to have a company secretary. If
                  there is only one director a separate company secretary is
                  required <a className="text-span" target="_blank" href="/handyguide">(Note 11)</a>
                </b>
              </label>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={6}>
              <label className="text-span">
                <b>Individual Secretary Details</b>
              </label><br/>
            
             
            
              <Row className="mt-5">
              <label className="col-sm-6">
                Name <span className="redspan">*</span>
              </label>
              <Col lg={3}>
              <input
                type="text"
                ref={register({
                  required: "The field is Required",
                 })}
                onChange={(e) => {
                  setfirstname(e.target.value);
                }}
                name="firstname"
                id="firstname"
                placeholder="First Name"
                className="form-control"
              />
              {errors.firstname && <p className="error redspan font-12">{errors.firstname.message}</p>}
            </Col>
            <Col lg={3}>
              <input
                type="text"
                ref={register({
                  required: "The field is Required",
                 })}
                onChange={(e) => {
                  setlastname(e.target.value);
                }}
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                className="form-control"
              />
              {errors.lastname && <p className="error redspan font-12">{errors.lastname.message}</p>}
            </Col>
            </Row>
            <Row className="mt-4">
            <Col lg={6}>
              <label>
                Date Of Birth <span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={6}>
              <input
                type="date" min="1900-01-01"
                className="form-control"
                onChange={(e) => {
                  setdob(e.target.value);
                }}
                name="dob"
                ref={register({ required: true })}
              />
              {errors.dob && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
            </Row>
            <Row className="mt-4">
            <Col lg={6}>
              <label>
                Residential Address 1 <span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={6}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setaddressline1(e.target.value);
                }}
                name="addressline1"
                ref={register({ required: true })}
              />
              {errors.addressline1 && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
            </Row>
            <Row className="mt-4">
            <Col lg={6}>
              <label>
                Residential Address 2 <span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={6}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setaddressline2(e.target.value);
                }}
                name="addressline2"
                ref={register({ required: true })}
              />
              {errors.addressline2 && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
            </Row>
            <Row className="mt-4">
            <Col lg={6}>
              <label>Residential Address 3</label>
            </Col>
            <Col lg={6}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setaddressline3(e.target.value);
                }}
                name="addressline3"
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
                  setpostal(e.target.value);
                }}
                name="postal"
              />
            </Col>
            </Row>
            <Row className="mt-4">
            <Col lg={6}>
              <label>Country</label>
            </Col>
            <Col lg={6}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setcountry(e.target.value);
                }}
                name="country"
              />
            </Col>
            </Row>
            </Col>
            <Col lg={6}>
              <label className="text-span">
                <b>Corporate Secretary Details</b>
              </label><br/>
              <Row className="mt-5">
            
            <Col lg={6}>
              <label>Company Name</label>
            </Col>
            <Col lg={6}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setcompanyname(e.target.value);
                }}
                name="companyname"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            
            <Col lg={6}>
              <label>Company Number</label>
            </Col>
            <Col lg={6}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setcompanynumber(e.target.value);
                }}
                name="companynumber"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            
            <Col lg={6}>
              <label>
                Company Director <div>(signing on behalf of the Company)</div>
              </label>
            </Col>
            <Col lg={6}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setcompanydirector(e.target.value);
                }}
                name="companydirector"
              />
            </Col>
          </Row>
          
          <Row className="mt-4">
            
            <Col lg={6}>
              <label>Registered Office</label>
            </Col>
            <Col lg={6}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setcompanyregiseroffice(e.target.value);
                }}
                name="companyregiseroffice"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            
            <Col lg={6}>
              <label>Residential Address 1</label>
            </Col>
            <Col lg={6}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setcompanyaddressline1(e.target.value);
                }}
                name="companyaddressline1"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            
            <Col lg={6}>
              <label>Residential Address 2</label>
            </Col>
            <Col lg={6}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setcompanyaddressline2(e.target.value);
                }}
                name="companyaddressline2"
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
                  setcompanypostal(e.target.value);
                }}
                name="companypostal"
              />
            </Col>
          </Row>
          <Row className="mt-4 mb-5">
            <Col lg={6}>
              <label>Country</label>
            </Col>
            <Col lg={6}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setcompanycountry(e.target.value);
                }}
                name="companycountry"
              />
            </Col>
          </Row>
            </Col>
          </Row>
          
          
          
          
          
          <Row className="pb-3">
            {/* <Col lg={4} className="text-left">             
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

export default FourthSection;
