import React, { Component } from 'react'
import { Col, Row } from 'reactstrap';
 class SecondSection extends Component {
  render() {
    return (
      <section className="dark-section pb-1">
              <div className="content pt-5"> 
              <form>
              <Row className="">
                  <Col lg={12}>
                  <h6 className="text-span"><b>Company Incorporation Required Details (Please Complete in Full)</b> </h6>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={12}>
                  <label><h6><b>Proposed Company Name:</b> </h6><label>Please review before choosing a company name</label><span className="text-span"> (Note 7)</span></label>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg={1}>
                    <label>First Choice</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={1}>
                    <label>Second Choice</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={1}>
                    <label>Third Choice</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg={12}>
                  <label><h6><b>Principal Activity of the Company</b> </h6><label>This box must be completed setting out what will be the main activities of the company. If this is more than 40 words please complete the additional wording box</label><span className="text-span"> (Note 8)</span></label>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg={1}>
                    <label>Principal Activity</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={1}>
                    <label>additional Wording</label>
                  </Col>
                  <Col lg={3}>
                    <textarea type="text"  className="form-control"></textarea>
                  </Col>
                </Row>
                <Row className="mt-3 mb-3">
                  <Col lg={9}>
                  <label><h6><b>Company Type (Select)</b> </h6><label>Please choose the appropriate company type and <span className="text-span"> click here</span> for more information</label></label>
                  </Col>
                  <Col lg={3}>                  
                  <div className="form-group">
                  <select className="form-control">
                    <option>Select</option>
                  </select>
                  </div>
                  </Col>
                </Row>
                <Row className="pb-3">
                  <Col lg={6} className="text-right">
                    <button type="submit" className="btn btn-primary">Submit</button> 
                  </Col>
                  <Col lg={6} className="text-right">
                    <button type="button" className="btn btn-primary" onClick={this.props.onThirdSectionClick}>Next</button> 
                  </Col>
                </Row>
                </form>
              </div>
              </section>
              
              
    )
  }
}
export default SecondSection;