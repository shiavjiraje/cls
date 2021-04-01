import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import swal from 'sweetalert';
import config from '../../config/config';
const CeateTeamSpaces = (props) => {
  const {
   // buttonLabel,
    className
  } = props;
  var urlpattern =config.crmUrl;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [title, settitle] = useState("");
  const [purpose, setpurpose] = useState("");
  const [code, setcode] = useState("");
  const [state, setstate] = useState("");
  //const [spaceColor, setspaceColor] = useState("");
  const createNewProject = (e) => {
   
    var axios = require('axios');
    var data = JSON.stringify({
      "space": {
        "title": title,
        "purpose": purpose,
        "code": code,
        "state": state,
        "spaceColor": "#494e6a",
        "icon": "",
        "banner": "",
        "bannerX": 0,
        "bannerY": 50
      }
    });
    
    var config = {
      method: 'post',
      url: `${urlpattern}spaces`,
      headers: { 
        'Authorization': 'Bearer tkn.v1_NTBmYWYwMzQtYTU5OC00OGFlLTk4ZjEtYTBjYjVkZTc5YWI2LTY4MzY1OC41ODA3MDMuRVU=', 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      swal("Teamspace Created Successful", "success");
      toggle();
      props.getAllSpces();
    })
    .catch(function (error) {
      console.log(error);
    });
    
    
    };
    
  return (
    <div>
      <Button color="primary" onClick={toggle}>Create New Teamspce</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Create New Teamspace</ModalHeader>
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
            <label>Purpose</label>
              <input
                type="text"
                onChange={(e) => {
                  setpurpose(e.target.value);
                }}
                name="purpose"
                className="form-control"
              />
            </Col>
         </Row>
         <Row className="mt-3">
            <Col lg={12}>
            <label>Code</label>
              <input
                type="text"
                onChange={(e) => {
                  setcode(e.target.value);
                }}
                name="code"
                className="form-control"
              />
            </Col>
         </Row>
         <Row className="mt-3">
            <Col lg={12}>
            <label>State</label>
              <input
                type="text"
                onChange={(e) => {
                  setstate(e.target.value);
                }}
                name="state"
                className="form-control"
              />
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

export default CeateTeamSpaces;