import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
import { createVendor } from "../../../_actions/section6.actions";
const SixSection = (props) => {
  var getcfid = JSON.parse(localStorage.getItem("apiData"));
  console.log(getcfid, "section-6");
  var cfidPost =getcfid.cfid
  

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
  const [cfid, setCfid]=useState(cfidPost);
  const [otherdirectorship1, setotherdirectorship1] = useState({
    cfid: cfid,
  });
  const [otherdirectorship2, setotherdirectorship2] = useState({
    cfid: cfid,
  });
  const [otherdirectorship3, setotherdirectorship3] = useState({
    cfid: cfid,
  });
  const [otherdirectorship4, setotherdirectorship4] = useState({
    cfid: cfid,
  });
  const onChange = (set, field, value) => {
    set((state) => ({
      ...state,
      [field]: value,
    }));
  };

  return (
    <section className="dark-section pb-4">
      <div className="content pt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mt-3">
            <Col lg={12}>
              <h6 className="text-span">
                <b>Additional Director Details </b>{" "}
              </h6>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={3}>
              <label className="text-span">
                <b>Director 4</b>
              </label>
            </Col>
            <Col lg={3}>
              <label className="text-span">
                <b>Director 5</b>
              </label>
            </Col>
            <Col lg={3}>
              <label className="text-span">
                <b>Director 6</b>
              </label>
            </Col>
            <Col lg={3}>
              <label className="text-span">
                <b>Director 7</b>
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
              <label>Date Of Birth</label>
              <input
                type="date"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship1, "dob", event.target.value)
                }
                name="dob"
                id="dob1"
              />
            </Col>
            <Col lg={3}>
              <label>Date Of Birth</label>
              <input
                type="date"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship2, "dob", event.target.value)
                }
                name="dob"
                id="dob2"
              />
            </Col>
            <Col lg={3}>
              <label>Date Of Birth</label>
              <input
                type="date"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship3, "dob", event.target.value)
                }
                name="dob"
                id="dob3"
              />
            </Col>
            <Col lg={3}>
              <label>Date Of Birth</label>
              <input
                type="date"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship4, "dob", event.target.value)
                }
                name="dob"
                id="dob4"
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
                    setotherdirectorship4,
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
                  onChange(setotherdirectorship1, "postal", event.target.value)
                }
                name="postal"
                id="postal1"
              />
            </Col>
            <Col lg={3}>
              <label>Aircode/Pincode</label>
              <input
                type="number"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship2, "postal", event.target.value)
                }
                name="postal"
                id="postal2"
              />
            </Col>
            <Col lg={3}>
              <label>Aircode/Pincode</label>
              <input
                type="number"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship3, "postal", event.target.value)
                }
                name="postal"
                id="postal3"
              />
            </Col>
            <Col lg={3}>
              <label>Aircode/Pincode</label>
              <input
                type="number"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship4, "postal", event.target.value)
                }
                name="postal"
                id="postal4"
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
              <label>Other Directorship 1 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "otherdirectorship1",
                    event.target.value
                  )
                }
                name="otherdirectorship1"
                id="otherdirectorship1_1"
              />
            </Col>
            <Col lg={3}>
              <label>Other Directorship 1 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "otherdirectorship1",
                    event.target.value
                  )
                }
                name="otherdirectorship1"
                id="otherdirectorship1_2"
              />
            </Col>
            <Col lg={3}>
              <label>Other Directorship 1 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "otherdirectorship1",
                    event.target.value
                  )
                }
                name="otherdirectorship1"
                id="otherdirectorship1_3"
              />
            </Col>
            <Col lg={3}>
              <label>Other Directorship 1 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "otherdirectorship1",
                    event.target.value
                  )
                }
                name="otherdirectorship1"
                id="otherdirectorship1_4"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={3}>
              <label>Other Directorship 2 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "otherdirectorship2",
                    event.target.value
                  )
                }
                name="otherdirectorship2"
                id="otherdirectorship2_1"
              />
            </Col>
            <Col lg={3}>
              <label>Other Directorship 2 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "otherdirectorship2",
                    event.target.value
                  )
                }
                name="otherdirectorship2"
                id="otherdirectorship2_2"
              />
            </Col>
            <Col lg={3}>
              <label>Other Directorship 2 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "otherdirectorship2",
                    event.target.value
                  )
                }
                name="otherdirectorship2"
                id="otherdirectorship2_3"
              />
            </Col>
            <Col lg={3}>
              <label>Other Directorship 2 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "otherdirectorship2",
                    event.target.value
                  )
                }
                name="otherdirectorship2"
                id="otherdirectorship2_4"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={3}>
              <label>Other Directorship 3 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "otherdirectorship3",
                    event.target.value
                  )
                }
                name="otherdirectorship3"
                id="otherdirectorship3_1"
              />
            </Col>
            <Col lg={3}>
              <label>Other Directorship 3 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "otherdirectorship3",
                    event.target.value
                  )
                }
                name="otherdirectorship3"
                id="otherdirectorship3_2"
              />
            </Col>
            <Col lg={3}>
              <label>Other Directorship 3 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "otherdirectorship3",
                    event.target.value
                  )
                }
                name="otherdirectorship3"
                id="otherdirectorship3_3"
              />
            </Col>
            <Col lg={3}>
              <label>Other Directorship 3 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "otherdirectorship3",
                    event.target.value
                  )
                }
                name="otherdirectorship3"
                id="otherdirectorship3_4"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={3}>
              <label>Disqualified or Restricted</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "restricted",
                    event.target.value
                  )
                }
                name="restricted"
                id="restricted1"
              />
            </Col>
            <Col lg={3}>
              <label>Disqualified or Restricted</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "restricted",
                    event.target.value
                  )
                }
                name="restricted"
                id="restricted2"
              />
            </Col>
            <Col lg={3}>
              <label>Disqualified or Restricted</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "restricted",
                    event.target.value
                  )
                }
                name="restricted"
                id="restricted3"
              />
            </Col>
            <Col lg={3}>
              <label>Disqualified or Restricted</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship4,
                    "restricted",
                    event.target.value
                  )
                }
                name="restricted"
                id="restricted4"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={3}>
              <label>
                If this director is also a subscriber, enter their number of
                shares
              </label>
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
              <label>
                If this director is also a subscriber, enter their number of
                shares
              </label>
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
              <label>
                If this director is also a subscriber, enter their number of
                shares
              </label>
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
              <label>
                If this director is also a subscriber, enter their number of
                shares
              </label>
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
                Is the director the beneficial owner of the above shares?
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
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </Col>
            <Col lg={3}>
              <label>
                Is the director the beneficial owner of the above shares?
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
              >
                 <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </Col>
            <Col lg={3}>
              <label>
                Is the director the beneficial owner of the above shares?
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
              > <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
            </Col>
            <Col lg={3}>
              <label>
                Is the director the beneficial owner of the above shares?
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
              > <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
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
                onClick={props.onSevenSectionClick}
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

export default SixSection;
