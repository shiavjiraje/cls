import React, { Component } from 'react'
import { Col, Row } from 'reactstrap';
export class SevenSection extends Component {
    render() {
        return (
          <section className="light-section pb-1">
          <div className="content pt-5"> 
          <form>
          <Row className="mt-3">
              <Col lg={12}>
              <h6 className="text-span"><b>Subscriber Details (Individual)  </b> </h6><label>

              The subscribers are the first shareholders / members of the company and at least one is required (Note 13)
<p><b>NOTE:</b> If a Subscriber is a Corporate Body only please enter N/A for Subscriber details (individual) and complete Subscriber Details (Corporate)</p></label>
              </Col>
            </Row>
            <Row className="mt-3"> 
              <Col lg={4}>
                <label className="text-span"><b>Subscriber 1</b></label>
              </Col>
              <Col lg={4}>
                <label className="text-span"><b>Subscriber 2</b></label>
              </Col>
              <Col lg={4}>
                <label className="text-span"><b>Subscriber 3</b></label>
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
                <label>Number Of Shares</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Number Of Shares</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Number Of Shares</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4 pb-5">                 
              <Col lg={4}>
                <label>Is the Subscriber the beneficial owner of the 
above shares?</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Is the Subscriber the beneficial owner of the 
above shares?</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Is the Subscriber the beneficial owner of the 
above shares?</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="pb-3">
                  <Col lg={6} className="text-right">
                    <button type="submit" className="btn btn-primary">Submit</button> 
                  </Col>
                  <Col lg={6} className="text-right">
                    <button type="button" className="btn btn-primary" onClick={this.props.onEightSectionClick}>Next</button> 
                  </Col>
                </Row>
            </form>
          </div>
          </section>
        )
    }
}

export default SevenSection;
