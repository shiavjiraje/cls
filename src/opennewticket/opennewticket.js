import React from 'react';
import Navbarsupoort from '../_components/navbarsupoort';
import { Col, Row } from 'reactstrap';
import TextEditor from '../_components/textEditor';
import Footer from '../_components/footer';
function OpenNewTicket(){
    const active ="active"
    return(
        <React.Fragment>
       <Navbarsupoort active={active}/>
       
       <section className="light-section pb-1 mt-5">
              <div className="content pt-5"> 
              <Row className="mt-3">
                  <Col lg={12}>
                  <h6 className="text-span"><b>Open a New Ticket </b> </h6>
                  <p>Please fill the form below to open a new Ticket</p>
                  </Col>
                </Row>               
              </div>
              </section>
              <hr/>
              <section className="light-section">
              <div className="content">               
                <Row className="mt-3">
                  <Col lg={12}>
                    <label className="text-span"><b>Contact information </b></label>
                  </Col>
                  </Row>
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Email Address</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Name</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>                  
                </Row>
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Business</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">
                <Col lg={3}>
                    <label>Phone Number</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={1}>
                    <label>Ext:</label>
                  </Col>
                  <Col lg={1}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
               
              </div>
              </section>
              <hr/>
              <section className="light-section">
              <div className="content">
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Help Topic</label>
                  </Col>
                  <Col lg={3}>
                    <select  className="form-control"></select>
                  </Col>
                </Row>
              </div>
              </section>
              <hr/>
              <section className="light-section">
              <div className="content">
                <Row className="mt-4">                 
                  <Col lg={12}>
                    <label>Ticket Details</label>
                  </Col>
                  <Col lg={12}>
                    <label>Please Describe your Issue</label>
                  </Col>
                  </Row>
                  <Row className="mt-4">   
                  <Col lg={3}>
                    <label>Issue Summary</label>
                  </Col>
                  <Col lg={3}>
                    <select  className="form-control"></select>
                  </Col>
                </Row>
                <Row className="mt-4 mb-4">   
                <TextEditor/>
                </Row>
              </div>
              </section>
              <hr/>
              <section className="light-section pb-4 pt-3">
              <div className="content text-center">
                <button className="btn btn-primary">Create Ticket</button> 
                <button className="btn btn-primary ml-5">Reset</button> 
                <button className="btn btn-primary ml-5">Cancel</button> 
                </div>
              </section>
              <Footer/>
</React.Fragment>
    )
}
export default OpenNewTicket;
