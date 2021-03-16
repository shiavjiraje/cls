import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
import { createVendor } from "../../../_actions/section8.actions";
const EightSection = (props) => {
  var getcfid = JSON.parse(localStorage.getItem("apiData"));
  var cfidPost =getcfid.cfid
  const [otherdirectorship1, setotherdirectorship1] = useState({
    cfid: cfidPost,
  });
  const [otherdirectorship2, setotherdirectorship2] = useState({
    cfid: cfidPost,
  });
  const [otherdirectorship3, setotherdirectorship3] = useState({
    cfid: cfidPost,
  });
  const [otherdirectorship4, setotherdirectorship4] = useState({
    cfid: cfidPost,
  });

  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    console.log(
      otherdirectorship1,
      otherdirectorship2,
      otherdirectorship3,
      otherdirectorship4
    );
    dispatch(
      createVendor([
        otherdirectorship1,
        otherdirectorship2,
        otherdirectorship3,
        otherdirectorship4,
      ])
    );
  };
  const onChange = (set, field, value) => {
    set((state) => ({
      ...state,
      [field]: value,
    }));
  };
  return (
    <section className="dark-section pb-1">
      <div className="content pt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mt-3">
            <Col lg={12}>
              <h6 className="text-span">
                <b>Additional Subscriber Details </b>{" "}
              </h6>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={3}>
              <label className="text-span">
                <b>Subscriber 4</b>
              </label>
            </Col>
            <Col lg={3}>
              <label className="text-span">
                <b>Subscriber 5</b>
              </label>
            </Col>
            <Col lg={3}>
              <label className="text-span">
                <b>Subscriber 6</b>
              </label>
            </Col>
            <Col lg={3}>
              <label className="text-span">
                <b>Subscriber 7</b>
              </label>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={3}>
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship1, "name", event.target.value)
                }
                name="name"
                id="name1"
              />
            </Col>
            <Col lg={3}>
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship2, "name", event.target.value)
                }
                name="name"
                id="name2"
              />
            </Col>
            <Col lg={3}>
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship3, "name", event.target.value)
                }
                name="name"
                id="name3"
              />
            </Col>
            <Col lg={3}>
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship4, "name", event.target.value)
                }
                name="name"
                id="name4"
              />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg={3}>
              <label>Address Line 1</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "addressline1",
                    event.target.value
                  )
                }
                name="addressline1"
                id="addressline1_1"
              />
            </Col>
            <Col lg={3}>
              <label>Address Line 1</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "addressline1",
                    event.target.value
                  )
                }
                name="addressline1"
                id="addressline1_2"
              />
            </Col>
            <Col lg={3}>
              <label>Address Line 1</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "addressline1",
                    event.target.value
                  )
                }
                name="addressline1"
                id="addressline1_3"
              />
            </Col>
            <Col lg={3}>
              <label>Address Line 1</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "addressline1",
                    event.target.value
                  )
                }
                name="addressline1"
                id="addressline1_4"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={3}>
              <label>Address Line 2</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "addressline2",
                    event.target.value
                  )
                }
                name="addressline2"
                id="addressline2_1"
              />
            </Col>
            <Col lg={3}>
              <label>Address Line 2</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "addressline2",
                    event.target.value
                  )
                }
                name="addressline2"
                id="addressline2_2"
              />
            </Col>
            <Col lg={3}>
              <label>Address Line 2</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "addressline2",
                    event.target.value
                  )
                }
                name="addressline2"
                id="addressline2_3"
              />
            </Col>
            <Col lg={3}>
              <label>Address Line 2</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "addressline2",
                    event.target.value
                  )
                }
                name="addressline2"
                id="addressline2_4"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={3}>
              <label>Address Line 3</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "addressline3",
                    event.target.value
                  )
                }
                name="addressline3"
                id="addressline3_1"
              />
            </Col>
            <Col lg={3}>
              <label>Address Line 3</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "addressline3",
                    event.target.value
                  )
                }
                name="addressline3"
                id="addressline3_2"
              />
            </Col>
            <Col lg={3}>
              <label>Address Line 3</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "addressline3",
                    event.target.value
                  )
                }
                name="addressline3"
                id="addressline3_3"
              />
            </Col>
            <Col lg={3}>
              <label>Address Line 3</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "addressline3",
                    event.target.value
                  )
                }
                name="addressline3"
                id="addressline3_4"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={3}>
              <label>Aircode/Pincode</label>
              <input
                type="number"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "postalcode",
                    event.target.value
                  )
                }
                name="postalcode"
                id="postalcode1"
              />
            </Col>
            <Col lg={3}>
              <label>Aircode/Pincode</label>
              <input
                type="number"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "postalcode",
                    event.target.value
                  )
                }
                name="postalcode"
                id="postalcode2"
              />
            </Col>
            <Col lg={3}>
              <label>Aircode/Pincode</label>
              <input
                type="number"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "postalcode",
                    event.target.value
                  )
                }
                name="postalcode"
                id="postalcode3"
              />
            </Col>
            <Col lg={3}>
              <label>Aircode/Pincode</label>
              <input
                type="number"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "postalcode",
                    event.target.value
                  )
                }
                name="postalcode"
                id="postalcode4"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={3}>
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship1, "country", event.target.value)
                }
                name="country"
                id="country1"
              />
            </Col>
            <Col lg={3}>
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship2, "country", event.target.value)
                }
                name="country"
                id="country2"
              />
            </Col>
            <Col lg={3}>
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship3, "country", event.target.value)
                }
                name="country"
                id="country3"
              />
            </Col>
            <Col lg={3}>
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship4, "country", event.target.value)
                }
                name="country"
                id="country4"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={3}>
              <label>Nationality</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "nationality",
                    event.target.value
                  )
                }
                name="nationality"
                id="nationality1"
              />
            </Col>
            <Col lg={3}>
              <label>Nationality</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "nationality",
                    event.target.value
                  )
                }
                name="nationality"
                id="nationality2"
              />
            </Col>
            <Col lg={3}>
              <label>Nationality</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "nationality",
                    event.target.value
                  )
                }
                name="nationality"
                id="nationality3"
              />
            </Col>
            <Col lg={3}>
              <label>Nationality</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "nationality",
                    event.target.value
                  )
                }
                name="nationality"
                id="nationality4"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={3}>
              <label>Occupation</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "occupation",
                    event.target.value
                  )
                }
                name="occupation"
                id="occupation1"
              />
            </Col>
            <Col lg={3}>
              <label>Occupation</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "occupation",
                    event.target.value
                  )
                }
                name="occupation"
                id="occupation2"
              />
            </Col>
            <Col lg={3}>
              <label>Occupation</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "occupation",
                    event.target.value
                  )
                }
                name="occupation"
                id="occupation3"
              />
            </Col>
            <Col lg={3}>
              <label>Occupation</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "occupation",
                    event.target.value
                  )
                }
                name="occupation"
                id="occupation4"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={3}>
              <label>Number Of Shares</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "numberofshare",
                    event.target.value
                  )
                }
                name="numberofshare"
                id="numberofshare1"
              />
            </Col>
            <Col lg={3}>
              <label>Number Of Shares</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "numberofshare",
                    event.target.value
                  )
                }
                name="numberofshare"
                id="numberofshare2"
              />
            </Col>
            <Col lg={3}>
              <label>Number Of Shares</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "numberofshare",
                    event.target.value
                  )
                }
                name="numberofshare"
                id="numberofshare3"
              />
            </Col>
            <Col lg={3}>
              <label>Number Of Shares</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "numberofshare",
                    event.target.value
                  )
                }
                name="numberofshare"
                id="numberofshare4"
              />
            </Col>
          </Row>
          <Row className="mt-4 pb-5">
            <Col lg={3}>
              <label>
                Is the Subscriber the beneficial owner of the above shares?
              </label>
              <select
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "beneficialowner",
                    event.target.value
                  )
                }
                name="beneficialowner"
                id="beneficialowner1"
              ><option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
            </Col>
            <Col lg={3}>
              <label>
                Is the Subscriber the beneficial owner of the above shares?
              </label>
              <select
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "beneficialowner",
                    event.target.value
                  )
                }
                name="beneficialowner"
                id="beneficialowner2"
              ><option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
            </Col>
            <Col lg={3}>
              <label>
                Is the Subscriber the beneficial owner of the above shares?
              </label>
              <select
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "beneficialowner",
                    event.target.value
                  )
                }
                name="beneficialowner"
                id="beneficialowner3"
              ><option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
            </Col>
            <Col lg={3}>
              <label>
                Is the Subscriber the beneficial owner of the above shares?
              </label>
              <select
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "beneficialowner",
                    event.target.value
                  )
                }
                name="beneficialowner"
                id="beneficialowner4"
              ><option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
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
                onClick={props.onNineSectionClick}
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

export default EightSection;
