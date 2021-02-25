import React, { Component } from 'react'
import { Col, Row } from 'reactstrap';
export class ThirteenSection extends Component {
    render() {
        return (
          <React.Fragment>
            <form>
          <section className="light-section pb-1">
              <div className="content pt-5"> 
              <Row className="mt-3">
                  <Col lg={12}>
                  <h6 className="text-span"><b>Address Details </b> </h6>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={6}>
                    <label className="text-span"><b>Registered Office Address </b></label>
                    <p>This must be in the Republic of Ireland (Note 15)</p>
                  </Col>
                  <Col lg={6}>
                    <label className="text-span"><b>Business / Central Administration Address</b></label>
                    <p>(If different from Registered Address)</p>
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
                    <label>Address Line 1</label>
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
                    <label>Address Line 2</label>
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
                  <label>Address Line 3</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4 mb-5">
                <Col lg={3}>
                    <label>Aircode/Pincode</label>
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
               
              </div>
              </section>
              
              <section className="dark-section pb-1">
              <div className="content pt-3"> 
              <Row className="mt-3">
                  <Col lg={12}>
                  <h6 className="text-span"><b>Additional information </b> </h6>
                  <p className="text-span">Note 16</p>
                  </Col>
                </Row>
                <Row className="mt-2 mb-4">                 
                  <Col lg={12}>
                    <textarea className="form-control" rows="12"></textarea>
                  </Col>
                </Row>  
                <Row className="pb-3 mt-4">
                  <Col lg={12} className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button> 
                  </Col>
                </Row>     
              </div>
              </section>
             
                </form>
              </React.Fragment>
        )
    }
}

export default ThirteenSection;
