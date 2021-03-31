import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
import { createVendor } from "../../../_actions/section5.actions";
import config from '../../../config/config';
const FiveSection = (props) => {
  // var getcfid = JSON.parse(localStorage.getItem("apiData"));

  // console.log(getcfid.cfid, "section-5");
  // var cfidPost =getcfid.cfid
  
  var urlpattern =config.baseUrl;
  const { register, errors, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onChange = (set, field, value) => {
    set((state) => ({
      ...state,
      [field]: value,
    }));
  };
  useEffect(() => {
    getCfidApi();
    // eslint-disable-next-line 
}, []);


const [getcfid, setcfid] = useState();  
 

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

 
const [otherdirectorship1, setotherdirectorship1] = useState({
  cfid:getcfid
});
const [otherdirectorship2, setotherdirectorship2] = useState({
  cfid:getcfid
});
const [otherdirectorship3, setotherdirectorship3] = useState({
  cfid:getcfid
});
const onSubmit = (e) => {
  console.log(otherdirectorship1, otherdirectorship2, otherdirectorship3);
  let data =[otherdirectorship1, otherdirectorship2, otherdirectorship3];
  data.map(directorship => directorship.cfid=getcfid);
  dispatch(
    createVendor(data)
  );
  props.onSixSectionClick();
};

  return (
    <section className="light-section pb-4">
      <div className="content pt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mt-3">
            <Col lg={12}>
              <h6 className="text-span">
                <b>Company Director(s) </b>{" "}
              </h6>
              <label>
                LTD company may have 1 director. All other company types must
                have 2, and charity companies must have 3
                <a className="text-span" target="_blank" href="/handyguide"> (Note 12)</a> If any director
                has more than 3 directorships please forward these details by
                email to <span className="text-span">formations@clscs.ie</span>
                If any director is also a subscriber, please enter their number
                of shares in the second last section of the column
              </label>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={4}>
              <label className="text-span">
                <b>Director 1</b>
              </label>
            </Col>
            <Col lg={4}>
              <label className="text-span">
                <b>Director 2</b>
              </label>
            </Col>
            <Col lg={4}>
              <label className="text-span">
                <b>Director 3</b>
              </label>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={4}>
              <label>
                Name <span className="redspan">*</span>
              </label>
              {/* <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship1, "cfid", event.target.value)
                }
                name="cfid"
              />  */}
              <br/> 
              <input
                type="text"
                className="form-control"
                //value={sectionstate.otherdirectorship1.name}
                onChange={(event) =>
                  onChange(setotherdirectorship1, "name", event.target.value)
                }
                name="name"
                id="name1"
                ref={register({ required: true })}
              />
              {errors.name && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
            <Col lg={4}>
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                //value={sectionstate.otherdirectorship2.name}
                onChange={(event) =>
                  onChange(setotherdirectorship2, "name", event.target.value)
                }
                name="name"
                id="name2"
              />
            </Col>
            <Col lg={4}>
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                //value={sectionstate.otherdirectorship3.name}
                onChange={(event) =>
                  onChange(setotherdirectorship3, "name", event.target.value)
                }
                name="name"
                id="name3"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
              <label>
                Date Of Birth <span className="redspan">*</span>
              </label>
              <input
                type="date"
                className="form-control"
                ref={register({ required: true })}
                onChange={(event) =>
                  onChange(setotherdirectorship1, "dob", event.target.value)
                }
                name="dob"
                id="dob1"
              />
              {errors.dob && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
            <Col lg={4}>
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
            <Col lg={4}>
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
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
              <label>
                Occupation <span className="redspan">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                ref={register({ required: true })}
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "occupation",
                    event.target.value
                  )
                }
                name="occupation"
                id="ocuu1"
              />
              {errors.occupation && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
            <Col lg={4}>
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
                id="occu2"
              />
            </Col>
            <Col lg={4}>
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
                id="occu3"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
              <label>
                Address Line 1 <span className="redspan">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                ref={register({ required: true })}
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "addressline1",
                    event.target.value
                  )
                }
                name="addressline1"
                id="addline1_1"
              />
              {errors.addressline1 && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
            <Col lg={4}>
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
                id="addline1_2"
              />
            </Col>
            <Col lg={4}>
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
                id="addline1_3"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
              <label>
                Address Line 2 <span className="redspan">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                ref={register({ required: true })}
                onChange={(event) =>
                  onChange(
                    setotherdirectorship1,
                    "addressline2",
                    event.target.value
                  )
                }
                name="addressline2"
                id="addline2_1"
              />
              {errors.addressline2 && (
                <p className="redspan font-12">The field is Required</p>
              )}
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
                id="addline2_2"
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
                id="addline2_3"
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
                id="addline3_1"
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
                id="addline3_2"
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
                  onChange(setotherdirectorship1, "postal", event.target.value)
                }
                name="postal"
                id="postal1"
              />
            </Col>
            <Col lg={4}>
              <label>Aircode/Pincode</label>
              <input
                type="number"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship3, "postal", event.target.value)
                }
                name="postal"
                id="postal2"
              />
            </Col>
            <Col lg={4}>
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
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
              <label>
                Country <span className="redspan">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                ref={register({ required: true })}
                onChange={(event) =>
                  onChange(setotherdirectorship1, "country", event.target.value)
                }
                name="country"
                id="country1"
              />
              {errors.postal && (
                <p className="redspan font-12">The field is Required</p>
              )}
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
          <Row className="mt-4">
            <Col lg={4}>
              <label>
                Nationality <span className="redspan">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                ref={register({ required: true })}
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
              {errors.nationality && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
            <Col lg={4}>
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
            <Col lg={4}>
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
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
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
            <Col lg={4}>
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
            <Col lg={4}>
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
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
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
            <Col lg={4}>
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
            <Col lg={4}>
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
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
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
            <Col lg={4}>
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
            <Col lg={4}>
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
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
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
            <Col lg={4}>
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
                id="restricted2"
              />
            </Col>
            <Col lg={4}>
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
          </Row>
          <Row className="mt-4">
            <Col lg={4}>
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
            <Col lg={4}>
              <label>
                If this director is also a subscriber, enter their number of
                shares
              </label>
              <input
                type="text"
                className="form-control"
                id="numberofshare2"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship2,
                    "numberofshare",
                    event.target.value
                  )
                }
                name="numberofshare"
              />
            </Col>
            <Col lg={4}>
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
          </Row>
          <Row className="mt-4 pb-5">
            <Col lg={4}>
              <label>
                Is the director the beneficial owner of the above shares?
                <span className="redspan">*</span>
              </label>
              <select
                className="form-control"
                ref={register({ required: true })}
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
              {errors.beneficialowner && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
            <Col lg={4}>
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
            <Col lg={4}>
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
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </Col>
          </Row>
          <Row className="pb-3">
            {/* <Col lg={6} className="text-right">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </Col> */}
            <Col lg={12} className="text-right">
              <button
                type="submit"
                className="btn btn-primary"
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

export default FiveSection;
