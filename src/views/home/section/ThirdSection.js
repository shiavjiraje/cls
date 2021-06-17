import React, { useState, useEffect } from "react";
//import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
//import { createVendor } from "../../../_actions/section3.actions";
import swal from "sweetalert";
import config from '../../../config/config';
const ThirdSection = (props) => {
  //const dispatch = useDispatch();
  var urlpattern =config.baseUrl;
  // var getcfid = JSON.parse(localStorage.getItem("apiData"));
  // var cfidPost =getcfid.cfid
  //console.log(getcfid.cfid, "section-2");
  const [cfid, setcfid] = useState();
  const [issuedsharecapital, setissuedsharecapital] = useState("");
  const [nominalamountpershare, setnominalamountpershare] = useState("");
  const [shareclass, setshareclass] = useState("");
  const [authorisedsharecapital, setauthorisedsharecapital] = useState("");
  const { register, errors, handleSubmit } = useForm();
  const [disabled, setdesable] = useState(false);
  const onSubmit = (e) => {
    setdesable(true);
    var axios = require('axios');
    var data = {
      cfid: cfid,
      issuedsharecapital: issuedsharecapital,
      nominalamountpershare: nominalamountpershare,
      shareclass: shareclass,
      authorisedsharecapital: authorisedsharecapital,
    };
    
    var config = {
      method: 'post',
      url: `${urlpattern}clssharecapital/`,
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      swal("Record Saved Successful", );
      props.onFourthSectionClick();
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
    <section className={"light-section pt-5 pb-4"}>
      <div className="content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="">
            <Col lg={12}>
              <h6 className="text-span">
                <b>Share Capital </b>{" "}
              </h6>
              <label>
                <b>This part does not apply to CLG’s<a className="text-span" target="_blank" href="/handyguide"> (Note 10)</a></b>
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
                {/* <input
                  type="hidden"
                  className="form-control"
                  value={getcfid.cfid}
                  onChange={(e) => {
                    setcfid(e.target.value);
                  }}
                  name="cfid"
                /> */}
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
              <label>Authorised Share Capital(Optional for LTD)</label>
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
          <Row className="pb-3 mt-3">
          {/* <Col lg={4} className="text-right">
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
        </form>
      </div>
    </section>
  );
};

export default ThirdSection;
