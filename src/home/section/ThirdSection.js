import React, { Component } from 'react'
import { Col, Row } from 'reactstrap';
export class ThirdSection extends Component {
    render() {
        return (
            <section className="light-section pt-5" >
              <div className="content"> 
              <form>
              <Row className="">
                  <Col lg={12}>
                  <h6 className="text-span"><b>Share Capital </b> </h6>
                  <label><b>This part does not apply to CLG’s (Note 10)</b></label>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={9}>
                  <label>Issued Share Capital</label>
                  </Col>
                  <Col lg={3} className="style-input">                  
                  <div className="form-group">
                  <input type="text" className="form-control"/>
                  </div>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={9}>
                  <label>Nominal Amount Per Share</label>
                  </Col>
                  <Col lg={3} className="style-input">                  
                  <div className="form-group">
                  <input type="text" className="form-control"/>
                  </div>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={9}>
                  <label> Share Class</label>
                  </Col>
                  <Col lg={3} className="style-input">                  
                  <div className="form-group">
                  <input type="text" className="form-control"/>
                  </div>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={9}>
                  <label>Athorised Share Capital(Optional for LTD)</label>
                  </Col>
                  <Col lg={3} className="style-input">                  
                  <div className="form-group">
                  <input type="text" className="form-control"/>
                  </div>
                  </Col>
                </Row>
                <Row className="pb-3">
                  <Col lg={6} className="text-right">
                    <button type="submit" className="btn btn-primary">Submit</button> 
                  </Col>
                  <Col lg={6} className="text-right">
                    <button type="button" className="btn btn-primary" onClick={this.props.onFourthSectionClick}>Next</button> 
                  </Col>
                </Row>
                </form>
                </div>
                </section>
              
        )
    }
}

export default ThirdSection
