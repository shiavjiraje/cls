import React, {useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
import { createVendor } from "../../../_actions/section2.actions";
const SecondSection = (props) => {
   const dispatch = useDispatch();
 var getcfid = JSON.parse(localStorage.getItem("apiData"));
  const [cfid, setcfid] = useState(getcfid.cfid);
  const [firstchoice, setfirstchoice] = useState("");
  const [secondchoice, setsecondchoice] = useState("");
  const [thirdchoice, setthirdchoice] = useState("");
  const [principalactivity, setprincipalactivity] = useState("");
  const [additionwording, setadditionwording] = useState("");
  const [companytype, setcompanytype] = useState("");
  const { register, errors, handleSubmit } = useForm();
  const firstInputFocus = useRef();
  const onSubmit = (e) => {
    // e.preventDefault();
    let reqBody = {
      cfid: cfid,
      firstchoice: firstchoice,
      secondchoice: secondchoice,
      thirdchoice: thirdchoice,
      principalactivity: principalactivity,
      additionwording: additionwording,
      companytype: companytype,
    };

    dispatch(createVendor(reqBody));
  };
  useEffect(() => {
    if (firstInputFocus.current) {
          firstInputFocus.current.focus()
        }
    }, []);
  return (
    <section className="dark-section pb-1">
      <div className="content pt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="">
            <Col lg={12}>
              <h6 className="text-span">
                <b>
                  Company Incorporation Required Details (Please Complete in
                  Full)
                </b>{" "}
              </h6>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={12}>
              <label>
                <h6>
                  <b>Proposed Company Name:</b>{" "}
                </h6>
                <label>Please review before choosing a company name</label>
                <span className="text-span"> (Note 7)</span>
              </label>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={1}>
              <label>
                First Choice <span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={3}>
              <input
                type="hidden" value={getcfid.cfid}
                className="form-control" ref={firstInputFocus}
                onChange={(e) => {
                  setcfid(e.target.value);
                }} autoFocus
                name="cfid"
              />
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setfirstchoice(e.target.value);
                }}
                name="firstchoice"
                ref={register({ required: true })}
              />
              {errors.firstchoice && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
            <Col lg={1}>
              <label>
                Second Choice <span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={3}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setsecondchoice(e.target.value);
                }}
                name="secondchoice"
                ref={register({ required: true })}
              />
              {errors.secondchoice && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
            <Col lg={1}>
              <label>
                Third Choice <span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={3}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setthirdchoice(e.target.value);
                }}
                name="thirdchoice"
                ref={register({ required: true })}
              />
              {errors.thirdchoice && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={12}>
              <label>
                <h6>
                  <b>Principal Activity of the Company</b>{" "}
                </h6>
                <label>
                  This box must be completed setting out what will be the main
                  activities of the company. If this is more than 40 words
                  please complete the additional wording box
                </label>
                <span className="text-span"> (Note 8)</span>
              </label>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={1}>
              <label>
                Principal Activity <span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={3}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setprincipalactivity(e.target.value);
                }}
                name="principalactivity"
                ref={register({ required: true })}
              />
              {errors.principalactivity && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
            <Col lg={1}>
              <label>additional Wording</label>
            </Col>
            <Col lg={3}>
              <textarea
                type="text"
                className="form-control"
                onChange={(e) => {
                  setadditionwording(e.target.value);
                }}
                name="additionwording"
              ></textarea>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col lg={9}>
              <label>
                <h6>
                  <b>
                    Company Type (Select) <span className="redspan">*</span>
                  </b>{" "}
                </h6>
                <label>
                  Please choose the appropriate company type and{" "}
                  <span className="text-span"> click here</span> for more
                  information
                </label>
              </label>
            </Col>
            <Col lg={3}>
              <div className="form-group">
                <select
                  className="form-control"
                  onChange={(e) => {
                    setcompanytype(e.target.value);
                  }}
                  name="companytype"
                  ref={register({ required: true })}
                >
                  <option value="">Select</option>
                  <option value="Private Company Limited by Shares - LTD">
                    Private Company Limited by Shares - LTD
                  </option>
                  <option value="Designated Activity Company - DAC">
                    Designated Activity Company - DAC
                  </option>
                  <option value="Company Limited by Guarantee - CLG">
                    Company Limited by Guarantee - CLG
                  </option>
                  <option value="Charity (CLG or DAC)">
                    Charity (CLG or DAC)
                  </option>
                  <option value="Unlimited Company - ULC">
                    Unlimited Company - ULC
                  </option>
                </select>
                {errors.companytype && (
                  <p className="redspan font-12">The field is Required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="pb-3">
          <Col lg={4} className="text-right">
            </Col>
            <Col lg={4} className="text-center">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </Col>
            <Col lg={4} className="text-right">
              <button
                type="button"
                className="btn btn-primary"
                onClick={props.onThirdSectionClick}
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

export default SecondSection;
