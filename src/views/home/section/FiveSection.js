import React, { useEffect, useState } from "react";
//import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
//import { createVendor } from "../../../_actions/section5.actions";
import config from '../../../config/config';
import swal from "sweetalert";
const FiveSection = (props) => {
  // var getcfid = JSON.parse(localStorage.getItem("apiData"));

  // console.log(getcfid.cfid, "section-5");
  // var cfidPost =getcfid.cfid
  
  var urlpattern =config.baseUrl;
  const { register, errors, handleSubmit } = useForm();

  //const dispatch = useDispatch();

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
const [disabled, setdesable] = useState(false);
 
const [otherdirectorship1, setotherdirectorship1] = useState({
  cfid:getcfid
});
const [otherdirectorship2, setotherdirectorship2] = useState({
  cfid:getcfid
});
const [otherdirectorship3, setotherdirectorship3] = useState({
  cfid:getcfid
});
const [otherdirectorship4, setotherdirectorship4] = useState({
  cfid: getcfid,
});
const [otherdirectorship5, setotherdirectorship5] = useState({
  cfid: getcfid,
});
const [otherdirectorship6, setotherdirectorship6] = useState({
  cfid: getcfid,
});
const [otherdirectorship7, setotherdirectorship7] = useState({
  cfid: getcfid,
});
const onSubmit = (e) => {
  setdesable(true);
  var axios = require('axios');
  let data =[otherdirectorship1, otherdirectorship2, otherdirectorship3, otherdirectorship4, otherdirectorship5, otherdirectorship6,otherdirectorship7];
  data.map(directorship => directorship.cfid=getcfid);
  
  
  var config = {
    method: 'post',
    url: `${urlpattern}clsdirector/`,
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    swal("Record Saved Successful", );
    props.onSevenSectionClick();
    setdesable(false);
  })
  .catch(function (error) {
    swal(error.response.data, "error");
    setdesable(false);
  });
};
const [showFormFour, setshowFormFour]=useState(false);
const [showButtonFour, setshowButtonFour]=useState(true);
const [showFormFive, setshowFormFive]=useState(false);
const [showButtonFive, setshowButtonFive]=useState(false);
const [showFormSix, setshowFormSix]=useState(false);
const [showButtonSix, setshowButtonSix]=useState(false);
const [showFormSeven, setshowFormSeven]=useState(false);
const [showButtonSeven, setshowButtonSeven]=useState(false);
const addDirectorFour=()=>{
  setshowFormFour(true);
  setshowButtonFive(true);
  setshowButtonFour(false);
}
const addDirectorFive=()=>{
  setshowFormFive(true);
  setshowButtonFive(false);
  setshowButtonSix(true);
}
const addDirectorSix=()=>{
  setshowFormSix(true);
  setshowButtonSix(false);
  setshowButtonSeven(true);
}
const addDirectorSeven=()=>{
  setshowFormSeven(true);
  setshowButtonSeven(false);
}
  return (
    <section className={"light-section pb-4"}>
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
                email to <span className="text-span">formations@clscs.ie </span>
                If any director is also a subscriber, please enter their number
                of shares in the second last section of the column
              </label>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={4}>
              <label className="text-span">
                <b>Director 1</b>
              </label><br/>
              <Row className="mt-4">
              <label className="col-sm-12">
                Name <span className="redspan">*</span>
              </label>
             
              <Col lg={6}>
              <input
                type="text"
                ref={register({
                  required: "The field is Required",                  
                 })}
                 onChange={(event) =>
                  onChange(setotherdirectorship1, "firstname", event.target.value)
                }
                name="firstname"
                id="firstname1"
                placeholder="First Name"
                className="form-control"
              />
              {errors.firstname1 && <p className="error redspan font-12">{errors.firstname.message}</p>}
            </Col>
            <Col lg={6}>
              <input
                type="text"
                ref={register({
                  required: "The field is Required",
                 })}
                 onChange={(event) =>
                  onChange(setotherdirectorship1, "lastname", event.target.value)
                }
                name="lastname"
                id="lastname1"
                placeholder="Last Name"
                className="form-control"
              />
              {errors.lastname1 && <p className="error redspan font-12">{errors.lastname.message}</p>}
            </Col>
              </Row>
              <Row className="mt-4">
              <label className="col-sm-12">
                Date Of Birth <span className="redspan">*</span>
              </label>
              <div className="col-sm-12">
              <input
                type="date"
                className="form-control" min="1900-01-01"
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
              </div>
              </Row>
              <Row className="mt-4">
            
              <label className="col-sm-12">
                Occupation <span className="redspan">*</span>
              </label>
              <Col lg={12}>
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
            </Row>
            <Row className="mt-4">
            
              <label className="col-sm-12">
                Residential Address 1 <span className="redspan">*</span>
              </label>
              <Col lg={12}>
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
            </Row>
            <Row className="mt-4">
            
              <label className="col-sm-12">
                Residential Address 2 <span className="redspan">*</span>
              </label>
              <Col lg={12}>
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
                id="addline1_2"
              />
              {errors.addressline2 && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
            </Row>
            <Row className="mt-4">
           
              <label className="col-sm-12">Residential Address 3</label>
              <Col lg={12}>
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
                id="addline1_3"
              />
            </Col>
            </Row>
            <Row className="mt-4">
           
              <label className="col-sm-12">Eircode/Postcode</label>
              <Col lg={12}>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship1, "postal", event.target.value)
                }
                name="postal"
                id="postal1"
              />
            </Col>
            </Row>
            <Row className="mt-4">
            
              <label className="col-sm-12">
                Country <span className="redspan">*</span>
              </label>
              <Col lg={12}>
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
            </Row>
            <Row className="mt-4">
            
              <label className="col-sm-12">
                Nationality <span className="redspan">*</span>
              </label>
              <Col lg={12}>
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
            </Row>
            <Row className="mt-4">
            
              <label className="col-sm-12">Other Directorship 1 - Company Number</label>
              <Col lg={12}>
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
            </Row>
            <Row className="mt-4">
            
              <label className="col-sm-12">Other Directorship 2 - Company Number</label>
              <Col lg={12}>
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
            </Row>
            <Row className="mt-4">
           
              <label className="col-sm-12">Other Directorship 3 - Company Number</label>
              <Col lg={12}>
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
            </Row>
            <Row className="mt-4">
            
              <label className="col-sm-12">Disqualified or Restricted <span className="redspan">*</span></label>
              <Col lg={12}>
              <input
                type="text"
                className="form-control"
                ref={register({ required: true })}
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
              {errors.restricted && (
                <p className="redspan font-12">The field is Required</p>
              )}
            </Col>
            </Row>
            <Row className="mt-4">
            
              <label className="col-sm-12">
                If this director is also a subscriber, enter their number of
                shares
              </label>
              <Col lg={12}>
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
            </Row>
            <Row className="mt-4 pb-1">
           
              <label className="col-sm-12">
                Is the director the beneficial owner of the above shares?
                <span className="redspan">*</span>
              </label>
              <Col lg={12}>
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
            </Row>
            </Col>
            <Col lg={4}>
              <label className="text-span">
                <b>Director 2</b>
              </label><br/>
              <Row className="mt-4">
              <label className="col-sm-12">
                Name
              </label>
             
              <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship2, "firstname", event.target.value)
                }
                name="firstname"
                id="firstname2"
                placeholder="First Name"
                className="form-control"
              />
            </Col>
            <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship2, "lastname", event.target.value)
                }
                name="lastname"
                id="lastname2"
                placeholder="Last Name"
                className="form-control"
              />
            </Col>
              </Row>
              <Row className="mt-4">
              <label className="col-sm-12">
                Date Of Birth 
              </label>
              <div className="col-sm-12">
              <input
                type="date"
                className="form-control" min="1900-01-01"
                onChange={(event) =>
                  onChange(setotherdirectorship2, "dob", event.target.value)
                }
                name="dob"
                id="dob2"
              />
              </div>
              </Row>
              <Row className="mt-4">
            
              <label className="col-sm-12">
                Occupation 
              </label>
              <Col lg={12}>
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
                id="ocuu2"
              />
            </Col>
            </Row>
            <Row className="mt-4">
            
              <label className="col-sm-12">
                Residential Address 1 
              </label>
              <Col lg={12}>
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
                id="addline2_1"
              />
            </Col>
            </Row>
            <Row className="mt-4">
            
              <label className="col-sm-12">
                Residential Address 2 
              </label>
              <Col lg={12}>
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
            </Row>
            <Row className="mt-4">
           
              <label className="col-sm-12">Residential Address 3</label>
              <Col lg={12}>
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
                id="addline2_3"
              />
            </Col>
            </Row>
            <Row className="mt-4">
           
              <label className="col-sm-12">Eircode/Postcode</label>
              <Col lg={12}>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship2, "postal", event.target.value)
                }
                name="postal"
                id="postal2"
              />
            </Col>
            </Row>
            <Row className="mt-4">
            
              <label className="col-sm-12">
                Country 
              </label>
              <Col lg={12}>
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
            </Row>
            <Row className="mt-4">
            
              <label className="col-sm-12">
                Nationality 
              </label>
              <Col lg={12}>
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
            </Row>
            <Row className="mt-4">
            
            <label className="col-sm-12">Other Directorship 1 - Company Number</label>
            <Col lg={12}>
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
          </Row>
          <Row className="mt-4">
            
              <label className="col-sm-12">Other Directorship 2 - Company Number</label>
              <Col lg={12}>
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
            </Row>
            <Row className="mt-4">
           
              <label className="col-sm-12">Other Directorship 3 - Company Number</label>
              <Col lg={12}>
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
            </Row>
            <Row className="mt-4">
            
              <label className="col-sm-12">Disqualified or Restricted</label>
              <Col lg={12}>
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
            </Row>
            <Row className="mt-4">
            
              <label className="col-sm-12">
                If this director is also a subscriber, enter their number of
                shares
              </label>
              <Col lg={12}>
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
            </Row>
            <Row className="mt-4 pb-1">
           
              <label className="col-sm-12">
                Is the director the beneficial owner of the above shares?
              </label>
              <Col lg={12}>
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
            </Row>
            </Col>
            <Col lg={4}>
              <label className="text-span">
                <b>Director 3</b>
              </label><br/>
              <Row className="mt-4">
              <label className="col-sm-12">
                Name
              </label>
             
              <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship3, "firstname", event.target.value)
                }
                name="firstname"
                id="firstname3"
                placeholder="First Name"
                className="form-control"
              />
            </Col>
            <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship3, "lastname", event.target.value)
                }
                name="lastname"
                id="lastname3"
                placeholder="Last Name"
                className="form-control"
              />
            </Col>
              </Row>
              <Row className="mt-4">
              <label className="col-sm-12">
                Date Of Birth 
              </label>
              <div className="col-sm-12">
              <input
                type="date"
                className="form-control" min="1900-01-01"
                onChange={(event) =>
                  onChange(setotherdirectorship3, "dob", event.target.value)
                }
                name="dob"
                id="dob3"
              />
              </div>
              </Row>
              <Row className="mt-4">
            
            <label className="col-sm-12">
              Occupation 
            </label>
            <Col lg={12}>
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
              id="ocuu3"
            />
          </Col>
          </Row>
          <Row className="mt-4">
            
              <label className="col-sm-12">
                Residential Address 1 
              </label>
              <Col lg={12}>
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
                id="addline3_1"
              />
            </Col>
            </Row>
            <Row className="mt-4">
            
              <label className="col-sm-12">
                Residential Address 2 
              </label>
              <Col lg={12}>
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
                id="addline3_2"
              />
            </Col>
            </Row>
            <Row className="mt-4">
           
              <label className="col-sm-12">Residential Address 3</label>
              <Col lg={12}>
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
                id="addline3_3"
              />
            </Col>
            </Row>
            <Row className="mt-4">
           
              <label className="col-sm-12">Eircode/Postcode</label>
              <Col lg={12}>
              <input
                type="text"
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
            
            <label className="col-sm-12">
              Country 
            </label>
            <Col lg={12}>
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
            
              <label className="col-sm-12">
                Nationality 
              </label>
              <Col lg={12}>
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
            
            <label className="col-sm-12">Other Directorship 1 - Company Number</label>
            <Col lg={12}>
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
            
              <label className="col-sm-12">Other Directorship 2 - Company Number</label>
              <Col lg={12}>
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
           
              <label className="col-sm-12">Other Directorship 3 - Company Number</label>
              <Col lg={12}>
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
            
              <label className="col-sm-12">Disqualified or Restricted</label>
              <Col lg={12}>
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
            
              <label className="col-sm-12">
                If this director is also a subscriber, enter their number of
                shares
              </label>
              <Col lg={12}>
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
            <Row className="mt-4 pb-1">
           
              <label className="col-sm-12">
                Is the director the beneficial owner of the above shares?
              </label>
              <Col lg={12}>
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
            </Col>
          </Row>
          
          <Row className="">
            {showFormFour&&
            
            <Col lg={3} className="mt-4">
            <label className="text-span">
                <b>Director 4</b>
              </label><br/>
              <Row>
              <label className="col-sm-12">
                Name
              </label>
             
              <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship4, "firstname", event.target.value)
                }
                name="firstname"
                id="firstname4"
                placeholder="First Name"
                className="form-control"
              />
            </Col>
            <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship4, "lastname", event.target.value)
                }
                name="lastname"
                id="lastname4"
                placeholder="Last Name"
                className="form-control"
              />
            </Col>
              </Row>
               <label className="mt-4">Date Of Birth</label>
              <input
                type="date" min="1900-01-01"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship4, "dob", event.target.value)
                }
                name="dob"
                id="dob4"
              />
              <label className="mt-4">Occupation</label>
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
               <label className="mt-4">Residential Address 1</label>
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
                id="addressline4_1"
              />
              <label className="mt-4">Residential Address 2</label>
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
              <label className="mt-4">Residential Address 3</label>
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
              <label className="mt-4">Eircode/Postcode</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship4, "postal", event.target.value)
                }
                name="postal"
                id="postal4"
              />
              <label className="mt-4">Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship4, "country", event.target.value)
                }
                name="country"
                id="country4"
              />
              <label className="mt-4">Nationality</label>
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
              <label className="mt-4">Other Directorship 1 - Company Number</label>
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
                id="otherdirectorship4_1"
              />
              <label className="mt-4">Other Directorship 2 - Company Number</label>
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
                id="otherdirectorship4_2"
              />
              <label className="mt-4">Other Directorship 3 - Company Number</label>
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
                id="otherdirectorship4_3"
              />
              <label className="mt-4">Disqualified or Restricted</label>
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
              <label className="mt-4">
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
              <label className="mt-4">
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
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </Col>}
            {showFormFive &&
            <Col lg={3} className="mt-4">
            <label className="text-span">
                <b>Director 5</b>
              </label><br/>
              <Row>
              <label className="col-sm-12">
                Name
              </label>
             
              <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship5, "firstname", event.target.value)
                }
                name="firstname"
                id="firstname5"
                placeholder="First Name"
                className="form-control"
              />
            </Col>
            <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship5, "lastname", event.target.value)
                }
                name="lastname"
                id="lastname5"
                placeholder="Last Name"
                className="form-control"
              />
            </Col>
              </Row>
              <label className="mt-4">Date Of Birth</label>
              <input
                type="date" min="1900-01-01"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship5, "dob", event.target.value)
                }
                name="dob"
                id="dob5"
              />
              <label className="mt-4">Occupation</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "occupation",
                    event.target.value
                  )
                }
                name="occupation"
                id="occupation5"
              />
               <label className="mt-4">Residential Address 1</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "addressline1",
                    event.target.value
                  )
                }
                name="addressline1"
                id="addressline1_5"
              />
              <label className="mt-4">Residential Address 2</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "addressline2",
                    event.target.value
                  )
                }
                name="addressline2"
                id="addressline2_5"
              />
              <label className="mt-4">Residential Address 3</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "addressline3",
                    event.target.value
                  )
                }
                name="addressline3"
                id="addressline3_5"
              />
              <label className="mt-4">Eircode/Postcode</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship5, "postal", event.target.value)
                }
                name="postal"
                id="postal5"
              />
              <label className="mt-4">Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship5, "country", event.target.value)
                }
                name="country"
                id="country5"
              />
              <label className="mt-4">Nationality</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "nationality",
                    event.target.value
                  )
                }
                name="nationality"
                id="nationality5"
              />
              <label className="mt-4">Other Directorship 1 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "otherdirectorship1",
                    event.target.value
                  )
                }
                name="otherdirectorship1"
                id="otherdirectorship5_1"
              />
              <label className="mt-4">Other Directorship 2 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "otherdirectorship2",
                    event.target.value
                  )
                }
                name="otherdirectorship2"
                id="otherdirectorship5_2"
              />
              <label className="mt-4">Other Directorship 3 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "otherdirectorship3",
                    event.target.value
                  )
                }
                name="otherdirectorship3"
                id="otherdirectorship5_3"
              />
              <label className="mt-4">Disqualified or Restricted</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "restricted",
                    event.target.value
                  )
                }
                name="restricted"
                id="restricted5"
              />
              <label className="mt-4">
                If this director is also a subscriber, enter their number of
                shares
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "numberofshare",
                    event.target.value
                  )
                }
                name="numberofshare"
                id="numberofshare5"
              />
              <label className="mt-4">
                Is the director the beneficial owner of the above shares?
              </label>
              <select
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship5,
                    "beneficialowner",
                    event.target.value
                  )
                }
                name="beneficialowner"
                id="beneficialowner5"
              >
                 <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </Col>}
            {showFormSix&&
            <Col lg={3} className="mt-4">
            <label className="text-span">
                <b>Director 6</b>
              </label><br/>
              <Row>
              <label className="col-sm-12">
                Name
              </label>
             
              <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship6, "firstname", event.target.value)
                }
                name="firstname"
                id="firstname6"
                placeholder="First Name"
                className="form-control"
              />
            </Col>
            <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship6, "lastname", event.target.value)
                }
                name="lastname"
                id="lastname6"
                placeholder="Last Name"
                className="form-control"
              />
            </Col>
              </Row>
              <label className="mt-4">Date Of Birth</label>
              <input
                type="date" min="1900-01-01"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship6, "dob", event.target.value)
                }
                name="dob"
                id="dob6"
              />
              <label className="mt-4">Occupation</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "occupation",
                    event.target.value
                  )
                }
                name="occupation"
                id="occupation6"
              />
              <label className="mt-4">Residential Address 1</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "addressline1",
                    event.target.value
                  )
                }
                name="addressline1"
                id="addressline1_6"
              />
              <label className="mt-4">Residential Address 2</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "addressline2",
                    event.target.value
                  )
                }
                name="addressline2"
                id="addressline2_6"
              />
              <label className="mt-4">Residential Address 3</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "addressline3",
                    event.target.value
                  )
                }
                name="addressline3"
                id="addressline3_6"
              />
              <label className="mt-4">Eircode/Postcode</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship6, "postal", event.target.value)
                }
                name="postal"
                id="postal6"
              />
              <label className="mt-4">Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship6, "country", event.target.value)
                }
                name="country"
                id="country6"
              />
              <label className="mt-4">Nationality</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "nationality",
                    event.target.value
                  )
                }
                name="nationality"
                id="nationality6"
              />
              <label className="mt-4">Other Directorship 1 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "otherdirectorship1",
                    event.target.value
                  )
                }
                name="otherdirectorship1"
                id="otherdirectorship6_1"
              />
              <label className="mt-4">Other Directorship 2 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "otherdirectorship2",
                    event.target.value
                  )
                }
                name="otherdirectorship2"
                id="otherdirectorship6_2"
              />
              <label className="mt-4">Other Directorship 3 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "otherdirectorship3",
                    event.target.value
                  )
                }
                name="otherdirectorship3"
                id="otherdirectorship6_3"
              />
              <label className="mt-4">Disqualified or Restricted</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "restricted",
                    event.target.value
                  )
                }
                name="restricted"
                id="restricted6"
              />
              <label className="mt-4">
                If this director is also a subscriber, enter their number of
                shares
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "numberofshare",
                    event.target.value
                  )
                }
                name="numberofshare"
                id="numberofshare6"
              />
              <label className="mt-4">
                Is the director the beneficial owner of the above shares?
              </label>
              <select
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship6,
                    "beneficialowner",
                    event.target.value
                  )
                }
                name="beneficialowner"
                id="beneficialowner6"
              > <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
            </Col>}
            {showFormSeven&&
            <Col lg={3} className="mt-4">
            <label className="text-span">
                <b>Director 7</b>
              </label><br/>
              <Row>
              <label className="col-sm-12">
                Name
              </label>
             
              <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship7, "firstname", event.target.value)
                }
                name="firstname"
                id="firstname7"
                placeholder="First Name"
                className="form-control"
              />
            </Col>
            <Col lg={6}>
              <input
                type="text"
                 onChange={(event) =>
                  onChange(setotherdirectorship7, "lastname", event.target.value)
                }
                name="lastname"
                id="lastname7"
                placeholder="Last Name"
                className="form-control"
              />
            </Col>
              </Row>
              <label className="mt-4">Date Of Birth</label>
              <input
                type="date" min="1900-01-01"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship7, "dob", event.target.value)
                }
                name="dob"
                id="dob7"
              />
              <label className="mt-4">Occupation</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "occupation",
                    event.target.value
                  )
                }
                name="occupation"
                id="occupation7"
              />
              <label className="mt-4">Residential Address 1</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "addressline1",
                    event.target.value
                  )
                }
                name="addressline1"
                id="addressline1_7"
              />
              <label className="mt-4">Residential Address 2</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "addressline2",
                    event.target.value
                  )
                }
                name="addressline2"
                id="addressline2_7"
              />
              <label className="mt-4">Residential Address 3</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "addressline3",
                    event.target.value
                  )
                }
                name="addressline3"
                id="addressline3_7"
              />
              <label className="mt-4">Eircode/Postcode</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship7, "postal", event.target.value)
                }
                name="postal"
                id="postal7"
              />
              <label className="mt-4">Country</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(setotherdirectorship7, "country", event.target.value)
                }
                name="country"
                id="country7"
              />
              <label className="mt-4">Nationality</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "nationality",
                    event.target.value
                  )
                }
                name="nationality"
                id="nationality7"
              />
              <label className="mt-4">Other Directorship 1 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "otherdirectorship1",
                    event.target.value
                  )
                }
                name="otherdirectorship1"
                id="otherdirectorship7_1"
              />
              <label className="mt-4">Other Directorship 2 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "otherdirectorship2",
                    event.target.value
                  )
                }
                name="otherdirectorship2"
                id="otherdirectorship7_2"
              />
              <label className="mt-4">Other Directorship 3 - Company Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "otherdirectorship3",
                    event.target.value
                  )
                }
                name="otherdirectorship3"
                id="otherdirectorship7_3"
              />
              <label className="mt-4">Disqualified or Restricted</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "restricted",
                    event.target.value
                  )
                }
                name="restricted"
                id="restricted7"
              />
              <label className="mt-4">
                If this director is also a subscriber, enter their number of
                shares
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "numberofshare",
                    event.target.value
                  )
                }
                name="numberofshare"
                id="numberofshare7"
              />
              <label className="mt-4">
                Is the director the beneficial owner of the above shares?
              </label>
              <select
                className="form-control"
                onChange={(event) =>
                  onChange(
                    setotherdirectorship7,
                    "beneficialowner",
                    event.target.value
                  )
                }
                name="beneficialowner"
                id="beneficialowner7"
              > <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
            </Col>}
          </Row>
          <Row className="pb-3 mt-5">
            {/* <Col lg={6} className="text-right">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </Col> */}
            <Col lg={12} className="text-right">
            {showButtonFour &&  <button
                type="button" onClick={addDirectorFour}
                className="btn btn-primary mr-2"
              >
                Add More Directors
              </button>}
              {showButtonFive &&  <button
                type="button" onClick={addDirectorFive}
                className="btn btn-primary mr-2"
              >
                Add More Directors
              </button>}
              {showButtonSix &&  <button
                type="button" onClick={addDirectorSix}
                className="btn btn-primary mr-2"
              >
                Add More Directors
              </button>}
              {showButtonSeven &&  <button
                type="button" onClick={addDirectorSeven}
                className="btn btn-primary mr-2"
              >
                Add More Directors
              </button>}
              <button
                type="submit"  disabled={disabled}
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
