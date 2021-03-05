import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { useForm } from "react-hook-form";
import { createVendorinfo } from "../../../_actions/section1.actions";
import { useDispatch } from "react-redux";
const FirstSection = (props) => {
  const [name, setname] = useState("");
  const [agree, setagree] = useState(0);
  const [nonthirdparties, setnonthirdparties] = useState("");
  const [incorporationtype, setincorporationtype] = useState("");
  const [companypacktype, setcompanypacktype] = useState("");
  const [paymenttype, setpaymenttype] = useState("");
  const [companyname, setcompanyname] = useState("");
  const [addressline1, setaddressline1] = useState("");
  const [addressline2, setaddressline2] = useState("");
  const [addressline3, setaddressline3] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [postal, setpostal] = useState("");
  const { register, errors, handleSubmit } = useForm();
  localStorage.setItem("cfid", JSON.stringify("10"));
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    // e.preventDefault();
    let reqBody = {
      name: name,
      agree: agree,
      nonthirdparties: nonthirdparties,
      incorporationtype: incorporationtype,
      companypacktype: companypacktype,
      paymenttype: paymenttype,
      companyname: companyname,
      addressline1: addressline1,
      addressline2: addressline2,
      addressline3: addressline3,
      phone: phone,
      email: email,
      postal: postal,
    };

    dispatch(createVendorinfo(reqBody));
  };
  return (
    <section className="light-section top-100">
      <div className="content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="pb-4">
            <Col lg={9}>
              <label className="light-text">You are here : Home</label>
            </Col>
            <Col lg={3}>
              <input
                type="text"
                placeholder="Search for datas and report"
                className="form-control"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={9}>
              <label>
                <b>
                  We Agree to the{" "}
                  <span className="text-span">
                    CLS General Terms of Business
                  </span>{" "}
                  and have reviewed the{" "}
                  <span className="text-span">CLS Handy Guide</span> to
                  Completing the Company Order Form (Tick Box)
                </b>
              </label>
            </Col>
            <Col lg={3}>
              <div className="form-group form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    value={agree || 0}
                    defaultChecked={false}
                    onChange={(e) => {
                      setagree(e.target.value);
                      console.log(e.target.value);
                    }}
                    name="agree"
                    ref={register({ required: true })}
                    type="checkbox"
                  />{" "}
                  Agree<span className="redspan">*</span>
                </label>
                {errors.agree && (
                  <p className="redspan font-12">The field is Required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={9}>
              <label>
                <h6>
                  <b>Anti Money Laundering Customer Due Diligence (Select) </b>
                </h6>
                <div>
                  Third Parties (Accountants, Solicitors, Tax Advisors){" "}
                </div>
                <div>
                  We confirm that we have performed CDD on this business
                  relationship in full compliance with Criminal Justice (Money
                  Laundering & Terrorist Financing) Act 2010 Note 4
                </div>
                <div>OR</div>
                <div>Non-Third Parties </div>
                <div>
                  If you are a Non-Third party please read Note 4 and confirm
                  you agree to provide the Anti-Money Laundering documentation
                  in Note 4
                </div>
              </label>
            </Col>
            <Col lg={3}>
              <div className="form-group">
                <select
                  className="form-control"
                  onChange={(e) => {
                    setnonthirdparties(e.target.value);
                  }}
                  name="nonthirdparties"
                >
                  <option value="">Select</option>
                  <option value="Third Party">Third Party</option>
                  <option value="Non Third Parties">Non Third Parties</option>
                </select>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={9}>
              <label>
                <h6>
                  <b>
                    Incorporation Type: <span className="redspan">*</span>
                  </b>{" "}
                </h6>
                <div className="text-span"> Note 4 </div>
              </label>
            </Col>
            <Col lg={3}>
              <div className="form-group">
                <select
                  className="form-control"
                  ref={register({ required: true })}
                  onChange={(e) => {
                    setincorporationtype(e.target.value);
                  }}
                  name="incorporationtype"
                >
                  <option value="">Select</option>
                  <option value="Standard">Standard</option>
                  <option value="Nominee">Nominee</option>
                </select>
                {errors.incorporationtype && (
                  <p className="redspan font-12">The field is Required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={9}>
              <label>
                <h6>
                  <b>
                    Company Pack Type (Select){" "}
                    <span className="redspan">*</span>
                  </b>{" "}
                </h6>
                <div className="text-span"> Note 6 </div>
              </label>
            </Col>
            <Col lg={3}>
              <div className="form-group">
                <select
                  className="form-control"
                  ref={register({ required: true })}
                  onChange={(e) => {
                    setcompanypacktype(e.target.value);
                  }}
                  name="companypacktype"
                >
                  <option value="">Select</option>
                  <option value="Basic Pack (Digital)">
                    Basic Pack (Digital)
                  </option>
                  <option value="Digital Pack (Incl Seal)">
                    Digital Pack (Incl Seal)
                  </option>
                  <option value="Hard Copy (Incl Seal)">
                    Hard Copy (Incl Seal)
                  </option>
                </select>
                {errors.companypacktype && (
                  <p className="redspan font-12">The field is Required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={9}>
              <label>
                <h6>
                  <b>
                    Payment Type (Select)<span className="redspan">*</span>
                  </b>{" "}
                </h6>
              </label>
            </Col>
            <Col lg={3}>
              <div className="form-group">
                <select
                  className="form-control"
                  ref={register({ required: true })}
                  onChange={(e) => {
                    setpaymenttype(e.target.value);
                  }}
                  name="paymenttype"
                >
                  <option value="">Select</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Credit Card">Credit Card</option>
                </select>
                {errors.paymenttype && (
                  <p className="redspan font-12">The field is Required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={12}>
              <h6 className="text-span">
                <b>Contact Details for Incorporation Purposes</b>{" "}
              </h6>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={3}>
              <label>
                Name<span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={3}>
              <input
                type="text"
                ref={register({ required: true })}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                name="name"
                className="form-control"
              />
              {errors.name && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
            <Col lg={3}>
              <label>
                Address Line 1<span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={3}>
              <input
                type="text"
                ref={register({ required: true })}
                className="form-control"
                onChange={(e) => {
                  setaddressline1(e.target.value);
                }}
                name="addressline1"
              />
              {errors.addressline1 && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={3}>
              <label>
                Practice/Company Name<span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={3}>
              <input
                type="text"
                ref={register({ required: true })}
                className="form-control"
                onChange={(e) => {
                  setcompanyname(e.target.value);
                }}
                name="companyname"
              />
              {errors.companyname && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
            <Col lg={3}>
              <label>
                Address Line 2<span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={3}>
              <input
                type="text"
                ref={register({ required: true })}
                className="form-control"
                onChange={(e) => {
                  setaddressline2(e.target.value);
                }}
                name="addressline2"
              />
              {errors.addressline2 && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={3}>
              <label>
                Phone Number<span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={3}>
              <input
                type="number"
                ref={register({ required: true, min: 10 })}
                className="form-control"
                onChange={(e) => {
                  setphone(e.target.value);
                }}
                name="phone"
              />
              {errors.phone && (
                <p className="redspan font-12">The Feild is Required Number</p>
              )}
            </Col>
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
          </Row>
          <Row className="mt-4 mb-4">
            <Col lg={3}>
              <label>
                Email Address<span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={3}>
              <input
                type="email"
                ref={register({ required: true })}
                className="form-control"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                name="email"
              />
              {errors.email && (
                <p className="redspan font-12">The Feild is Required Email</p>
              )}
            </Col>
            <Col lg={3}>
              <label>Aircode/Pincode</label>
            </Col>
            <Col lg={3}>
              <input
                type="number"
                className="form-control"
                onChange={(e) => {
                  setpostal(e.target.value);
                }}
                name="postal"
              />
              {errors.postal && (
                <p className="redspan font-12">The Feild is Required Number</p>
              )}
            </Col>
          </Row>
          <Row className="pb-3">
          <Col lg={4} className="text-right">
            </Col>
            <Col lg={4} className="text-center">
              <input type="submit" className="btn btn-primary" value="Submit" />
            </Col>
            <Col lg={4} className="text-right">
              <button
                type="button"
                className="btn btn-primary"
                onClick={props.onSecondSectionClick}
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

export default FirstSection;
