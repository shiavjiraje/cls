import React, { Component } from 'react'
import { Col, Row } from 'reactstrap';
export class TenSection extends Component {
    render() {
        return (
          <section className="dark-section pb-1">
          <div className="content pt-5"> 
          <form>
          <Row className="mt-3">
              <Col lg={12}>
              <h6 className="text-span"><b>Additional Corporate Subscriber Details </b> </h6>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col lg={3}>
                <label className="text-span"><b>Corporate Subscriber 4</b></label>
              </Col>
              <Col lg={3}>
                <label className="text-span"><b>Corporate Subscriber 5</b></label>
              </Col>
              <Col lg={3}>
                <label className="text-span"><b>Corporate Subscriber 6</b></label>
              </Col>
              <Col lg={3}>
                <label className="text-span"><b>Corporate Subscriber 7</b></label>
              </Col>
              </Row>
            <Row className="mt-3">
              <Col lg={3}>
                <label>Company Name</label>                 
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Company Name</label>                 
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Company Name</label>                  
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Company Name</label>                  
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col lg={3}>
                <label>Company Number</label>                 
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Company Number</label>                 
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Company Number</label>                  
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Company Number</label>                  
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col lg={3}>
                <label>Company Director (Signing)</label>                 
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Company Director (Signing)</label>                 
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Company Director (Signing)</label>                  
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Company Director (Signing)</label>                  
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col lg={3}>
                <label>Registered Office Address</label>                 
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Registered Office Address</label>                 
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Registered Office Address</label>                  
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Registered Office Address</label>                  
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            
            <Row className="mt-4">                 
              <Col lg={3}>
                <label>Address Line 2</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Address Line 2</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Address Line 2</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Address Line 2</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4">                 
              <Col lg={3}>
                <label>Address Line 3</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Address Line 3</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Address Line 3</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Address Line 3</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4">                 
              <Col lg={3}>
                <label>Aircode/Pincode</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Aircode/Pincode</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Aircode/Pincode</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Aircode/Pincode</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4">                 
              <Col lg={3}>
                <label>Country</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Country</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Country</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Country</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="mt-4 pb-5">                 
              <Col lg={3}>
                <label>Number Of Shares</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Number Of Shares</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Number Of Shares</label>
                <input type="text"  className="form-control"/>
              </Col>
              <Col lg={3}>
                <label>Number Of Shares</label>
                <input type="text"  className="form-control"/>
              </Col>
            </Row>
            <Row className="pb-3">
                  <Col lg={6} className="text-right">
                    <button type="submit" className="btn btn-primary">Submit</button> 
                  </Col>
                  <Col lg={6} className="text-right">
                    <button type="button" className="btn btn-primary" onClick={this.props.onElevenSectionClick}>Next</button> 
                  </Col>
                </Row>
            </form>
          
          </div>
          </section>
         
        )
    }
}

export default TenSection;
