import React, { Component } from 'react'
import { Col, Row } from 'reactstrap';
export class FourthSection extends Component {
    render() {
        return (
            <section className="dark-section pb-1">
              <div className="content pt-5"> 
              <form>
              <Row className="mt-3">
                  <Col lg={12}>
                  <h6 className="text-span"><b>Company Secretary Details </b> </h6><label><b>Every company is required to have a company secretary. If there is only one director a separate company secretary is required (Note 11)</b></label>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={6}>
                    <label className="text-span"><b>Individual Secretary Details</b></label>
                  </Col>
                  <Col lg={6}>
                    <label className="text-span"><b>Corporate Secretary Details</b></label>
                  </Col>
                  </Row>
                <Row className="mt-3">
                  <Col lg={3}>
                    <label>Name</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Company Name</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg={3}>
                    <label>Date Of Birth</label>
                  </Col>
                  <Col lg={3}>
                    <input type="date"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Company Number</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Address Line 1</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Company Director <div>
(signing on behalf of the Company)</div></label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Address Line 2</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Registered Office</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Address Line 3</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                  <label>Address Line 1</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">
                <Col lg={3}>
                    <label>Aircode/Pincode</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Address Line 2</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">
                <Col lg={3}>
                    <label>Country</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                  <label>Aircode/Pincode</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4 mb-5">
                <Col lg={3}>
                   
                  </Col>
                  <Col lg={3}>
                   
                  </Col>
                  <Col lg={3}>
                  <label>Country</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="pb-3">
                  <Col lg={6} className="text-right">
                    <button type="submit" className="btn btn-primary">Submit</button> 
                  </Col>
                  <Col lg={6} className="text-right">
                    <button type="button" className="btn btn-primary" onClick={this.props.onFiveSectionClick}>Next</button> 
                  </Col>
                </Row>
                </form>
              </div>
              </section>
              
        )
    }
}

export default FourthSection
