import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';  
import { withRouter } from 'react-router-dom';
import Navigation from '../_components/navbar'; 
import { Col, Container, Row } from 'reactstrap';



class Home extends Component {

   render() {
     const { classes } = this.props;

      return (
          <React.Fragment>
              <Navigation />
           <section className="dark-section pb-1">
              <div className="content pt-5"> 
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
              
              </div>
              </section>
            </React.Fragment>
      );
   }
}
  
Home.propTypes = {
      classes: PropTypes.object.isRequired,
};
    
  
function mapStateToProps(state) {
    return state;
}


const connectedHomePage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})((Home)));

export { connectedHomePage as Home };
  