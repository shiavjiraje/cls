import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
import { vendorAction } from "../../_actions/section4.actions";
import axios from "axios";
const FourthSection = (props) => {
 // var i = 10;
 var getcfid = JSON.parse(localStorage.getItem("apiData"));
// console.log("fourth section", getcfid.cfid);
  const [cfid, setcfid] = useState(getcfid.cfid);
  const [name, setname] = useState("");
  const [companyname, setcompanyname] = useState(0);
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

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    // e.preventDefault();
    let reqBody = {
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

    dispatch(vendorAction.createVendor(reqBody));
  };
  const handlePdfSubmit = () => {
    axios
    .post(`http://www.apiats.somee.com/api/clspdfform?cfid=${getcfid.cfid}`)

    .then((response) => {
       console.log(response);
    }).catch(function() {
        console.log("error");
     });
}
  return (
    <section className="dark-section pb-1">
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
                  required (Note 11)
                </b>
              </label>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={6}>
              <label className="text-span">
                <b>Individual Secretary Details</b>
              </label>
            </Col>
            <Col lg={6}>
              <label className="text-span">
                <b>Corporate Secretary Details</b>
              </label>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={3}>
              <label>
                Name <span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={3}>
              <input
                type="hidden"
                className="form-control"
                onChange={(e) => {
                  setcfid(e.target.value);
                }} value={getcfid.cfid}
                name="cfid"
              />
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setname(e.target.value);
                }}
                name="name"
                ref={register({ required: true })}
              />
              {errors.name && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
            <Col lg={3}>
              <label>Company Name</label>
            </Col>
            <Col lg={3}>
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
            <Col lg={3}>
              <label>
                Date Of Birth <span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={3}>
              <input
                type="date"
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
            <Col lg={3}>
              <label>Company Number</label>
            </Col>
            <Col lg={3}>
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
            <Col lg={3}>
              <label>
                Address Line 1 <span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={3}>
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
            <Col lg={3}>
              <label>
                Company Director <div>(signing on behalf of the Company)</div>
              </label>
            </Col>
            <Col lg={3}>
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
            <Col lg={3}>
              <label>
                Address Line 2 <span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={3}>
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
            <Col lg={3}>
              <label>Registered Office</label>
            </Col>
            <Col lg={3}>
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
            <Col lg={3}>
              <label>Address Line 3</label>
            </Col>
            <Col lg={3}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setaddressline3(e.target.value);
                }}
                name="addressline3"
              />
            </Col>
            <Col lg={3}>
              <label>Address Line 1</label>
            </Col>
            <Col lg={3}>
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
            <Col lg={3}>
              <label>Aircode/Pincode</label>
            </Col>
            <Col lg={3}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setpostal(e.target.value);
                }}
                name="postal"
              />
            </Col>
            <Col lg={3}>
              <label>Address Line 2</label>
            </Col>
            <Col lg={3}>
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
            <Col lg={3}>
              <label>Country</label>
            </Col>
            <Col lg={3}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setcountry(e.target.value);
                }}
                name="country"
              />
            </Col>
            <Col lg={3}>
              <label>Aircode/Pincode</label>
            </Col>
            <Col lg={3}>
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
            <Col lg={3}></Col>
            <Col lg={3}></Col>
            <Col lg={3}>
              <label>Country</label>
            </Col>
            <Col lg={3}>
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
          <Row className="pb-3">
         
            <Col lg={4} className="text-left">
            <button type="button" onClick={handlePdfSubmit} className="btn btn-primary ">
                Genrate PDF
              </button>
              </Col>
              <Col lg={4} className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
             
            </Col>
            <Col lg={4} className="text-right">
              <button
                type="button"
                className="btn btn-primary"
                onClick={props.onFiveSectionClick}
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
