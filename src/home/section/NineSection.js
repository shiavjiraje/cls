import React, { Component } from 'react'
import { Col, Row } from 'reactstrap';
export class NineSection extends Component {
    render() {
        return (
          <section className="light-section pb-1">
              <div className="content pt-5"> 
              <form>
              <Row className="mt-3">
                  <Col lg={12}>
                  <h6 className="text-span"><b>Corporate Subscriber Details  </b> </h6><label>

                  
This section must be completed if the shares are to be owned by a body corporate (Note 13)</label>
                  </Col>
                </Row>
                <Row className="mt-3"> 
                  <Col lg={4}>
                    <label className="text-span"><b>Corporate Subscriber 1</b></label>
                  </Col>
                  <Col lg={4}>
                    <label className="text-span"><b>Corporate Subscriber 2</b></label>
                  </Col>
                  <Col lg={4}>
                    <label className="text-span"><b>Corporate Subscriber 3</b></label>
                  </Col>
                  </Row>
                <Row className="mt-3">
                  <Col lg={4}>
                    <label>Company Name</label>                 
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={4}>
                    <label>Company Name</label>                 
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={4}>
                    <label>Company Name</label>                  
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg={4}>
                    <label>Company Number</label>                 
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={4}>
                    <label>Company Number</label>                 
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={4}>
                    <label>Company Number</label>                  
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={4}>
                    <label>Company Director(Signing)</label>                 
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={4}>
                    <label>Company Director(Signing)</label>                 
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={4}>
                    <label>Company Director(Signing)</label>                  
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={4}>
                    <label>Registred Office Address</label>                 
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={4}>
                    <label>Registred Office Address</label>                 
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={4}>
                    <label>Registred Office Address</label>                  
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
                <Row className="mt-4 mb-5">                 
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
                <Row className="pb-3">
                  <Col lg={6} className="text-right">
                    <button type="submit" className="btn btn-primary">Submit</button> 
                  </Col>
                  <Col lg={6} className="text-right">
                    <button type="button" className="btn btn-primary" onClick={this.props.onTenSectionClick}>Next</button> 
                  </Col>
                </Row>
            </form>
              </div>
              </section>
        )
    }
}

export default NineSection;
