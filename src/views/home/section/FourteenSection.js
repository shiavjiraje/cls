import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";
import { createVendor } from "../../../_actions/section14.actions";
import axios from "axios";
import config from '../../../config/config';
import { history } from '../../../_helpers';
const FourteenSection = (props) => {
  
var urlpattern =config.baseUrl;
 
const [cfid, setcfid] = useState();
useEffect(() => {
  getCfidApi();
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
  const { handleSubmit } = useForm();
  const handlePdfSubmit = () => {
    axios
      .post(`${urlpattern}clspdfform?cfid=${cfid}`)
      .then((response) => {
       // alert("pdf calling");
        console.log(response);
        localStorage.setItem("pdfData", JSON.stringify(response.data));
        //debugger;
        //if(response.data.Filepath==!null){
          history.push('/projectmanagement');
        //}
        
      })
      .catch(function () {
        console.log("error");
      });
  };
  const [addtionalinfo, setaddtionalinfo]=useState();

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    let reqBody = {
      cfid:cfid,
      addtionalinfo:addtionalinfo
    }
   
    dispatch(createVendor(reqBody));
    handlePdfSubmit();
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="dark-section pb-4">
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
                  onChange={(e) => {
                    setaddtionalinfo(e.target.value);
                  }}
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
