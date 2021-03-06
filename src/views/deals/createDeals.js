import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import swal from 'sweetalert';
import $ from "jquery";
import config from '../../config/config';
//var urlpattern =config.crmUrl;
var urlpattern = config.baseUrl;
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
           
          url: `${urlpattern}Stage`,
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
     
        "title": title,
        "stageId": stagedata
    });
    
    var config = {
      method: 'post',
      url: `${urlpattern}Deal`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      swal("Deals Created Successful", );
      toggle();      
      props.getAllDeals();
    })
    .catch(function (error) {
      swal(JSON.stringify(error.response.data.error.errors[0].title),  "error")
    });
    
    
    
    };
    
  return (
    <div>
      <Button color="primary" onClick={toggle}>Create New Deal</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Create New Deal</ModalHeader>
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
                  <option value="">Select</option>
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