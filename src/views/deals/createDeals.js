import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import swal from 'sweetalert';
import $ from "jquery";
import config from '../../config/config';
var urlpattern =config.crmUrl;
const CreateDeals = (props) => {
  const {
   // buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [title, settitle] = useState("");
  const [stage, setstage] = useState(0);
  const [Deals, getDeals ]=useState([]);
  useEffect(() => {
    getAllStage();
  }, []);
  const getAllStage=()=>{
      $.ajax
      ({
           
          url: `${urlpattern}stages`,
          type:"GET",
          dataType:"JSON",
          success: function(data) 
          {
             // debugger;
              //console.log("log response on success");
              //console.log(data);
              var allDeals = data;
              getDeals(allDeals);
          }
      });
      
  }
  
  let stageRecords =Deals.stages ||[];
  console.log(stageRecords, "stages record");
  const createNewProject = (e) => {
    var axios = require('axios');
  var stagedata= parseInt(stage);
    var data = JSON.stringify({
      "deal": {
        "title": title,
        "stage": {
          id: stagedata
        }
      }
    });
    
    var config = {
      method: 'post',
      url: `${urlpattern}deals`,
      headers: { 
        'Authorization': 'Bearer tkn.v1_YmEzYzg4MzctYjE2OC00NDlmLTk0YjYtZjlmYzdmYjMxNWYxLTY4MzY1OC41ODA3MDMuRVU=', 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      swal("Deals Created Successful",  "success");
      toggle();      
      props.getAllDeals();
    })
    .catch(function (error) {
      console.log(error);
    });
    
    
    
    };
    
  return (
    <div>
      <Button color="primary" onClick={toggle}>Create New Deals</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Create New Deals</ModalHeader>
        <ModalBody>
        <Row>
                <Col lg={12}>
                    <label>Title</label>
              <input
                type="text"
                onChange={(e) => {
                  settitle(e.target.value);
                }}
                name="title"
                className="form-control"
              />
            </Col>
            </Row>
            <Row className="mt-3">
            <Col lg={12}>
            <label>Stage</label>
            <select
                  className="form-control"
                  onChange={(e) => {
                    setstage(e.target.value);
                  }}
                  name="stage"
                >
                  {stageRecords.map((stagelist,i) => (
                                    <option key={i++} value={stagelist.id}>
                                        {stagelist.name}
                                    </option>
                                ))}
                </select>
            </Col>
         </Row>
         {/* <Row className="mt-3">
            <Col lg={12}>
            <label>Space Color</label>
              <input
                type="text"
                onChange={(e) => {
                  setspaceColor(e.target.value);
                }}
                name="spaceColor"
                className="form-control"
              />
            </Col>
         </Row> */}
        </ModalBody>
        <ModalFooter>
          <Button color="primary"  onClick={createNewProject} >Create</Button>{' '}
          <Button color="primary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateDeals;