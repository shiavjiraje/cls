import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
import { createVendor } from "../../../_actions/section13.actions";
const ThirteenSection = (props) => {
  var getcfid = JSON.parse(localStorage.getItem("apiData"));
  var cfidPost =getcfid.cfid
  
  //console.log(getcfid);
  const { register, errors, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    console.log(otherdirectorship1);
    dispatch(createVendor(otherdirectorship1));
  };
  const [otherdirectorship1, setotherdirectorship1] = useState({
    cfid: cfidPost,
    //agree:1
  });
  const onChange = (set, field, value) => {
    set((state) => ({
      ...state,
      [field]: value,
    }));
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="light-section pb-4">
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
                <p>This must be in the Republic of Ireland (Note 15)</p>
              </Col>
              <Col lg={6}>
                <label className="text-span">
                  <b>Business / Central Administration Address</b>
                </label>
                <p>(If different from Registered Address)</p>
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
                  onChange={(event) =>
                    onChange(
                      setotherdirectorship1,
                      "roaddressline1",
                      event.target.value
                    )
                  }
                  name="roaddressline1"
                  id="roaddressline1"
                  ref={register({ required: true })}
                />
                {errors.roaddressline1 && (
                  <p className="redspan font-12">The field is Required</p>
                )}
              </Col>
              <Col lg={3}>
                <label>Address Line 1</label>
              </Col>
              <Col lg={3}>
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) =>
                    onChange(
                      setotherdirectorship1,
                      "caaddressline1",
                      event.target.value
                    )
                  }
                  name="caaddressline1"
                  id="caaddressline1"
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
                  onChange={(event) =>
                    onChange(
                      setotherdirectorship1,
                      "roaddressline2",
                      event.target.value
                    )
                  }
                  name="roaddressline2"
                  id="roaddressline2"
                  ref={register({ required: true })}
                />
                {errors.roaddressline2 && (
                  <p className="redspan font-12">The field is Required</p>
                )}
              </Col>
              <Col lg={3}>
                <label>Address Line 2</label>
              </Col>
              <Col lg={3}>
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) =>
                    onChange(
                      setotherdirectorship1,
                      "caaddressline2",
                      event.target.value
                    )
                  }
                  name="caaddressline2"
                  id="caaddressline2"
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
                  onChange={(event) =>
                    onChange(
                      setotherdirectorship1,
                      "roaddressline3",
                      event.target.value
                    )
                  }
                  name="roaddressline3"
                  id="roaddressline3"
                />
              </Col>
              <Col lg={3}>
                <label>Address Line 3</label>
              </Col>
              <Col lg={3}>
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) =>
                    onChange(
                      setotherdirectorship1,
                      "caaddressline3",
                      event.target.value
                    )
                  }
                  name="caaddressline3"
                  id="caaddressline3"
                />
              </Col>
            </Row>
            <Row className="mt-4 mb-5">
              <Col lg={3}>
                <label>Aircode/Pincode</label>
              </Col>
              <Col lg={3}>
                <input
                  type="number"
                  className="form-control"
                  onChange={(event) =>
                    onChange(
                      setotherdirectorship1,
                      "ropostalcode",
                      event.target.value
                    )
                  }
                  name="ropostalcode"
                  id="ropostalcode"
                />
              </Col>
              <Col lg={3}>
                <label>Aircode/Pincode</label>
              </Col>
              <Col lg={3}>
                <input
                  type="number"
                  className="form-control"
                  onChange={(event) =>
                    onChange(
                      setotherdirectorship1,
                      "capostalcode",
                      event.target.value
                    )
                  }
                  name="capostalcode"
                  id="capostalcode"
                />
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
                      onChange={(event) =>
                        onChange(
                          setotherdirectorship1,
                          "roisalsothebusinessorcaaddress",
                          event.target.value
                        )
                      }
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
            <Col lg={4} className="text-center">
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
                  onClick={props.onFourteenSectionClick}
                >
                  Next
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
