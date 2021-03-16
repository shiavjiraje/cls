import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
import { createVendor } from "../../../_actions/section3.actions";

const ThirdSection = (props) => {
  const dispatch = useDispatch();
  var getcfid = JSON.parse(localStorage.getItem("apiData"));
  console.log(getcfid.cfid, "section-2");
  const [cfid, setcfid] = useState();
  const [issuedsharecapital, setissuedsharecapital] = useState("");
  const [nominalamountpershare, setnominalamountpershare] = useState("");
  const [shareclass, setshareclass] = useState("");
  const [authorisedsharecapital, setauthorisedsharecapital] = useState("");
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (e) => {
    // e.preventDefault();
    let reqBody = {
      cfid: getcfid.cfid,
      issuedsharecapital: issuedsharecapital,
      nominalamountpershare: nominalamountpershare,
      shareclass: shareclass,
      authorisedsharecapital: authorisedsharecapital,
    };
    console.log(reqBody);
    dispatch(createVendor(reqBody));
  };
  return (
    <section className="light-section pt-5">
      <div className="content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="">
            <Col lg={12}>
              <h6 className="text-span">
                <b>Share Capital </b>{" "}
              </h6>
              <label>
                <b>This part does not apply to CLG’s (Note 10)</b>
              </label>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={9}>
              <label>
                Issued Share Capital <span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={3} className="style-input">
              <div className="form-group">
                <input
                  type="hidden"
                  className="form-control"
                  value={getcfid.cfid}
                  onChange={(e) => {
                    setcfid(e.target.value);
                  }}
                  name="cfid"
                />
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setissuedsharecapital(e.target.value);
                  }}
                  name="issuedsharecapital"
                  ref={register({ required: true })}
                />
                {errors.issuedsharecapital && (
                  <p className="redspan font-12">The field is Required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={9}>
              <label>
                Nominal Amount Per Share <span className="redspan">*</span>
              </label>
            </Col>
            <Col lg={3} className="style-input">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setnominalamountpershare(e.target.value);
                  }}
                  name="nominalamountpershare"
                  ref={register({ required: true })}
                />
                {errors.nominalamountpershare && (
                  <p className="redspan font-12">The field is Required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={9}>
              <label> Share Class</label>
            </Col>
            <Col lg={3} className="style-input">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setshareclass(e.target.value);
                  }}
                  name="shareclass"
                />
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={9}>
              <label>Athorised Share Capital(Optional for LTD)</label>
            </Col>
            <Col lg={3} className="style-input">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setauthorisedsharecapital(e.target.value);
                  }}
                  name="authorisedsharecapital"
                />
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
                onClick={props.onFourthSectionClick}
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

export default ThirdSection;
