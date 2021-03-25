import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import swal from 'sweetalert';
const CeateTeamSpaces = (props) => {
  const {
   // buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const createNewProject = (e) => {
    var apitokenstring = "twp_7lLfVHIgalTodMCxT3aWRMngEUnb_eu";
    var encodedtoken = window.btoa(apitokenstring);
      var recipeUrl = 'https://clscharteredsecretaries.eu.teamwork.com/projects.json';
      var postBody = {
          "Project":{
          name: name,
          description:  description
          }
      };
      var requestMetadata = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization':`Basic ${encodedtoken}`,
          },
          Authorization: `Basic ${encodedtoken}`,
          body: JSON.stringify(postBody)
      };
  
      fetch(recipeUrl, requestMetadata)
          .then(res => res.json())
          .then(recipes => {
              console.log(recipes);
             // getAllProject();
              swal("Project Created Successful", recipes.id, "success");
              toggle();
              props.getAllSpces();
              //alert(recipes.id);
          });
    
    };
    
  return (
    <div>
      <Button color="primary" onClick={toggle}>Create New Project</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Create New Project</ModalHeader>
        <ModalBody>
        <Row>
                <Col lg={12}>
                    <label>Name</label>
              <input
                type="text"
                onChange={(e) => {
                  setname(e.target.value);
                }}
                name="name"
                className="form-control"
              />
            </Col>
            </Row>
            <Row className="mt-3">
            <Col lg={12}>
            <label>Description</label>
              <input
                type="text"
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
                name="description"
                className="form-control"
              />
            </Col>
         </Row>
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