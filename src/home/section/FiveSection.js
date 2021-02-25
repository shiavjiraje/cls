import React, { Component } from 'react'
import { Col, Row } from 'reactstrap';
export class FiveSection extends Component {
    render() {
        return (
          <section className="light-section pb-1">
          <div className="content pt-5"> 
          <form>
          <Row className="mt-3">
              <Col lg={12}>
              <h6 className="text-span"><b>Company Director(s) </b> </h6><label>
LTD company may have 1 director. All other company types must have 2, and charity companies must have 3<span className="text-span"> (Note 12)</span> If any director has more than 3 directorships please 
forward these details by email to <span className="text-span">formations@clscs.ie</span>
If any director is also a subscriber, please enter their number of shares in the second last section of the column</label>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col lg={4}>
                <label className="text-span"><b>Director 1</b></label>
              </Col>
              <Col lg={4}>
                <label className="text-span"><b>Director 2</b></label>
              </Col>
              <Col lg={4}>
                <label className="text-span"><b>Director 3</b></label>
              </Col>
              </Row>
            <Row className="mt-3">
              <Col lg={4}>
                <label>Name</label>                 
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Name</label>                 
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Name</label>                  
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={4}>
                <label>Date Of Birth</label>                 
                <input type="date"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Date Of Birth</label>                  
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Date Of Birth</label>                 
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={4}>
                <label>Occupation</label>
                <input type="date"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Occupation</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Occupation</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4">                 
              <Col lg={4}>
                <label>Address Line 1</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Address Line 1</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Address Line 1</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4">                 
              <Col lg={4}>
                <label>Address Line 2</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Address Line 2</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Address Line 2</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4">                 
              <Col lg={4}>
                <label>Address Line 3</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Address Line 3</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Address Line 3</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4">                 
              <Col lg={4}>
                <label>Aircode/Pincode</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Aircode/Pincode</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Aircode/Pincode</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4">                 
              <Col lg={4}>
                <label>Country</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Country</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Country</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4">                 
              <Col lg={4}>
                <label>Nationality</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Nationality</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Nationality</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4">                 
              <Col lg={4}>
                <label>Other Directorship 1 - Company Number</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Other Directorship 1 - Company Number</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Other Directorship 1 - Company Number</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4">                 
              <Col lg={4}>
                <label>Other Directorship 2 - Company Number</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Other Directorship 2 - Company Number</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Other Directorship 2 - Company Number</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4">                 
              <Col lg={4}>
                <label>Other Directorship 3 - Company Number</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Other Directorship 3 - Company Number</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Other Directorship 3 - Company Number</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4">                 
              <Col lg={4}>
                <label>Disqualified or Restricted</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Disqualified or Restricted</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Disqualified or Restricted</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4">                 
              <Col lg={4}>
                <label>If this director is also a subscriber, enter their 
number of shares</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>If this director is also a subscriber, enter their 
number of shares</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>If this director is also a subscriber, enter their 
number of shares</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4 pb-5">                 
              <Col lg={4}>
                <label>Is the director the beneficial owner of the 
above shares?</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Is the director the beneficial owner of the 
above shares?</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Is the director the beneficial owner of the 
above shares?</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="pb-3">
                  <Col lg={6} className="text-right">
                    <button type="submit" className="btn btn-primary">Submit</button> 
                  </Col>
                  <Col lg={6} className="text-right">
                    <button type="button" className="btn btn-primary" onClick={this.props.onSixSectionClick}>Next</button> 
                  </Col>
                </Row>
            </form>
          </div>
          </section>    
        )
    }
}

export default FiveSection
