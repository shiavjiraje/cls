import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
import { createVendor } from "../../../_actions/section9.actions";

const NineSection = (props) => {
  var getcfid = JSON.parse(localStorage.getItem("apiData"));
  var cfidPost =getcfid.cfid
 

  const { handleSubmit } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    console.log(otherdirectorship1, otherdirectorship2, otherdirectorship3);
    dispatch(
      createVendor([otherdirectorship1, otherdirectorship2, otherdirectorship3])
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
  const onChange = (set, field, value) => {
    set((state) => ({
      ...state,
      [field]: value,
    }));
  };
  return (
    <section className="light-section pb-4">
      <div className="content pt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mt-3">
            <Col lg={12}>
              <h6 className="text-span">
                <b>Corporate Subscriber Details </b>{" "}
              </h6>
              <label>
                This section must be completed if the shares are to be owned by
                a body corporate (Note 13)
              </label>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={4}>
              <label className="text-span">
                <b>Corporate Subscriber 1</b>
              </label>
            </Col>
            <Col lg={4}>
              <label className="text-span">
                <b>Corporate Subscriber 2</b>
              </label>
            </Col>
            <Col lg={4}>
              <label className="text-span">
                <b>Corporate Subscriber 3</b>
              </label>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={4}>
              <label>Company Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "companyname",
                    event.target.value
                  )
                }
                name="companyname"
                id="companyname1"
              />
            </Col>
            <Col lg={4}>
              <label>Company Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "companyname",
                    event.target.value
                  )
                }
                name="companyname"
                id="companyname2"
              />
            </Col>
            <Col lg={4}>
              <label>Company Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "companyname",
                    event.target.value
                  )
                }
                name="companyname"
                id="companyname3"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
              <label>Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "companyphonenumber",
                    event.target.value
                  )
                }
                name="companyphonenumber"
                id="companyphonenumber1"
              />
            </Col>
            <Col lg={4}>
              <label>Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "companyphonenumber",
                    event.target.value
                  )
                }
                name="companyphonenumber"
                id="companyphonenumber2"
              />
            </Col>
            <Col lg={4}>
              <label>Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "companyphonenumber",
                    event.target.value
                  )
                }
                name="companyphonenumber"
                id="companyphonenumber3"
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={4}>
              <label>Company Director(Signing)</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "companydirector",
                    event.target.value
                  )
                }
                name="companydirector"
                id="companydirector1"
              />
            </Col>
            <Col lg={4}>
              <label>Company Director(Signing)</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "companydirector",
                    event.target.value
                  )
                }
                name="companydirector"
                id="companydirector2"
              />
            </Col>
            <Col lg={4}>
              <label>Company Director(Signing)</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "companydirector",
                    event.target.value
                  )
                }
                name="companydirector"
                id="companydirector3"
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={4}>
              <label>Registred Office Address</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "registeroffice",
                    event.target.value
                  )
                }
                name="registeroffice"
                id="registeroffice1"
              />
            </Col>
            <Col lg={4}>
              <label>Registred Office Address</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "registeroffice",
                    event.target.value
                  )
                }
                name="registeroffice"
                id="registeroffice2"
              />
            </Col>
            <Col lg={4}>
              <label>Registred Office Address</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship3,
                    "registeroffice",
                    event.target.value
                  )
                }
                name="registeroffice"
                id="registeroffice3"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
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
            <Col lg={4}>
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
            <Col lg={4}>
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
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
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
            <Col lg={4}>
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
            <Col lg={4}>
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
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
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
            <Col lg={4}>
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
            <Col lg={4}>
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
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
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
            <Col lg={4}>
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
            <Col lg={4}>
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
          </Row>
          <Row className="mt-4 mb-5">
            <Col lg={4}>
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
            <Col lg={4}>
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
            <Col lg={4}>
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
                onClick={props.onTenSectionClick}
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

export default NineSection;
