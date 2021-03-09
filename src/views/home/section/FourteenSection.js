import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
import { createVendor } from "../../../_actions/section14.actions";
import axios from "axios";
const FourteenSection = (props) => {
  var getcfid = JSON.parse(localStorage.getItem("apiData"));
  const [otherdirectorship1, setotherdirectorship1] = useState({
    cfid: getcfid.cfid,
    //agree:1
  });

  const { handleSubmit } = useForm();
  const handlePdfSubmit = () => {
    axios
      .post(`http://www.apiats.somee.com/api/clspdfform?cfid=${getcfid.cfid}`)
      .then((response) => {
       // alert("pdf calling");
        console.log(response);
      })
      .catch(function () {
        console.log("error");
      });
  };
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    console.log(otherdirectorship1);
    dispatch(createVendor(otherdirectorship1));
    handlePdfSubmit();
  };
  const onChange = (set, field, value) => {
    set((state) => ({
      ...state,
      [field]: value,
    }));
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="dark-section pb-1">
          <div className="content pt-3">
            <Row className="mt-3">
              <Col lg={12}>
                <h6 className="text-span">
                  <b>Additional information </b>{" "}
                </h6>
                <p className="text-span">Note 16</p>
              </Col>
            </Row>
            <Row className="mt-2 mb-4">
              <Col lg={12}>
                <textarea
                  className="form-control"
                  rows="12"
                  onChange={(event) =>
                    onChange(
                      setotherdirectorship1,
                      "addtionalinfo",
                      event.target.value
                    )
                  }
                  name="addtionalinfo"
                  id="addtionalinfo"
                ></textarea>
              </Col>
            </Row>
            <Row className="pb-3 mt-4">
              <Col lg={12} className="text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </Col>
            </Row>
          </div>
        </section>
      </form>
    </React.Fragment>
  );
};

export default FourteenSection;