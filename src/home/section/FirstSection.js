import React, { Component } from 'react'
import { Col, Row } from 'reactstrap';
 class FirstSection extends Component {
  render(props) {
    return (
      <section className="light-section top-100" >
              <div className="content"> 
              <form>
                <Row className="pb-4">
                  <Col lg={9}>
                  <label className="light-text">You are here : Home</label>
                  </Col>
                  <Col lg={3}>
                  <input type="text" placeholder="Search for datas and report" className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg={9}>
                  <label><b>We Agree to the <span className="text-span">CLS General Terms of Business</span> and have reviewed the <span className="text-span">CLS Handy Guide</span> to Completing the Company Order Form (Tick Box)</b></label>
                  </Col>
                  <Col lg={3}>                  
                  <div className="form-group form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox"/> Agree
                    </label>
                  </div>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg={9}>
                  <label><h6><b>Anti Money Laundering Customer Due Diligence (Select) </b></h6>
<div>Third Parties  (Accountants, Solicitors, Tax Advisors) </div>
<div>We confirm that we have performed CDD on this business relationship in full compliance with Criminal Justice (Money Laundering & Terrorist Financing) Act 2010 Note 4</div>
<div>OR</div>
<div>Non-Third Parties </div>
<div>If you are a Non-Third party please read Note 4 and confirm you agree to provide the Anti-Money Laundering documentation in Note 4</div></label>
                  </Col>
                  <Col lg={3}>                  
                  <div className="form-group">
                  <select className="form-control">
                    <option>Select</option>
                  </select>
                  </div>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg={9}>
                  <label><h6><b>Incorporation Type:</b> </h6><div className="text-span"> Note 4 </div></label>
                  </Col>
                  <Col lg={3}>                  
                  <div className="form-group">
                  <select className="form-control">
                    <option>Select</option>
                  </select>
                  </div>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={9}>
                  <label><h6><b>Company Pack Type (Select)</b> </h6><div className="text-span"> Note 6 </div></label>
                  </Col>
                  <Col lg={3}>                  
                  <div className="form-group">
                  <select className="form-control">
                    <option>Select</option>
                  </select>
                  </div>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={9}>
                  <label><h6><b>Payment Type (Select)</b> </h6></label>
                  </Col>
                  <Col lg={3}>                  
                  <div className="form-group">
                  <select className="form-control">
                    <option>Select</option>
                  </select>
                  </div>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={12}>
                  <h6 className="text-span"><b>Contact Details for Incorporation Purposes</b> </h6>
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
                    <label>Address Line 1</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg={3}>
                    <label>Practice/Company Name</label>
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
                    <label>Phone Number</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Address Line 3</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4 mb-4">
                  <Col lg={3}>
                    <label>Email Address</label>
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
                <Row className="pb-3">
                  <Col lg={6} className="text-right">
                    <button type="submit" className="btn btn-primary">Submit</button> 
                  </Col>
                  <Col lg={6} className="text-right">
                    <button type="button" className="btn btn-primary" onClick={this.props.onSecondSectionClick}>Next</button> 
                  </Col>
                </Row>
                </form>
              </div>
              </section>
              
    )
  }
}
export default FirstSection;