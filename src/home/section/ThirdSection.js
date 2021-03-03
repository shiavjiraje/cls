import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
import { vendorAction } from "../../_actions/section3.actions";

const ThirdSection = (props) => {
  //let roleList = useSelector((state) => state.vendor.createid || []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(vendorAction.createVendor());

    // eslint-disable-next-line
  }, []);
  //console.log("rollist", roleList.createid);
  var getcfid = JSON.parse(localStorage.getItem("apiData"));
  //var i = 10;
  
  const [cfid, setcfid] = useState(getcfid.cfid);
  const [issuedsharecapital, setissuedsharecapital] = useState("");
  const [nominalamountpershare, setnominalamountpershare] = useState("");
  const [shareclass, setshareclass] = useState("");
  const [authorisedsharecapital, setauthorisedsharecapital] = useState("");
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (e) => {
    // e.preventDefault();
    let reqBody = {
      cfid: cfid,
      issuedsharecapital: issuedsharecapital,
      nominalamountpershare: nominalamountpershare,
      shareclass: shareclass,
      authorisedsharecapital: authorisedsharecapital,
    };

    dispatch(vendorAction.createVendor(reqBody));
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
                  className="form-control" value={getcfid.cfid}
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
            <Col lg={6} className="text-right">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Col>
            <Col lg={6} className="text-right">
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
