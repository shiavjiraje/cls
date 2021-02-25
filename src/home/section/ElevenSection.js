import React, { Component } from 'react'
import { Col, Row } from 'reactstrap';
export class ElevenSection extends Component {
    render() {
        return (
          <section className="light-section pb-1">
          <div className="content pt-5"> 
          <form>
          <Row className="mt-3">
              <Col lg={12}>
              <h6 className="text-span"><b>Beneficial Owners  </b> </h6><label>

              This section must be completed if the subscribers are not the beneficial owners of the shares in this company or the shares are being held by a corporate subscriber 
<span className="text-span"><b>(Note 14)</b></span>
              </label>
              </Col>
            </Row>
            <Row className="mt-3"> 
              <Col lg={4}>
                <label className="text-span"><b>Beneficial Owners 1</b></label>
              </Col>
              <Col lg={4}>
                <label className="text-span"><b>Beneficial Owners 2</b></label>
              </Col>
              <Col lg={4}>
                <label className="text-span"><b>Beneficial Owners 3</b></label>
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
            
            <Row className="mt-4 mb-5">                 
              <Col lg={4}>
                <label>Nature of Beneficial Ownership</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Nature of Beneficial Ownership</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={4}>
                <label>Nature of Beneficial Ownership</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="pb-3">
                  <Col lg={6} className="text-right">
                    <button type="submit" className="btn btn-primary">Submit</button> 
                  </Col>
                  <Col lg={6} className="text-right">
                    <button type="button" className="btn btn-primary" onClick={this.props.onTwellSectionClick}>Next</button> 
                  </Col>
                </Row>
            </form>
          </div>
          </section>
          
         
        )
    }
}

export default ElevenSection;
