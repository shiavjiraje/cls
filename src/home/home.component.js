import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';  
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Navigation from '../_components/navbar'; 
import { Col, Container, Row } from 'reactstrap';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});


class Home extends Component {

   render() {
     const { classes } = this.props;

      return (
          <React.Fragment>
              <Navigation />
              <section className="light-section top-100" >
              <div className="content"> 
                <Row>
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
                <Row className="mt-4 mb-5">
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
              </div>
              </section>
              <section className="dark-section pb-1">
              <div className="content pt-5"> 
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
              </div>
              </section>
              <section className="light-section pt-5" >
              <div className="content"> 
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
                </div>
                </section>
                <section className="dark-section pb-1">
              <div className="content pt-5"> 
              <Row className="mt-3">
                  <Col lg={12}>
                  <h6 className="text-span"><b>Company Secretary Details </b> </h6><label><b>Every company is required to have a company secretary. If there is only one director a separate company secretary is required (Note 11)</b></label>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={6}>
                    <label className="text-span"><b>Individual Secretary Details</b></label>
                  </Col>
                  <Col lg={6}>
                    <label className="text-span"><b>Corporate Secretary Details</b></label>
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
                    <label>Company Name</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg={3}>
                    <label>Date Of Birth</label>
                  </Col>
                  <Col lg={3}>
                    <input type="date"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Company Number</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
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
                    <label>Company Director <div>
(signing on behalf of the Company)</div></label>
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
                    <label>Registered Office</label>
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
                  <label>Address Line 1</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">
                <Col lg={3}>
                    <label>Aircode/Pincode</label>
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
                    <label>Country</label>
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
                <Row className="mt-4 mb-5">
                <Col lg={3}>
                   
                  </Col>
                  <Col lg={3}>
                   
                  </Col>
                  <Col lg={3}>
                  <label>Country</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
              </div>
              </section>
              <section className="light-section pb-1">
              <div className="content pt-5"> 
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
              </div>
              </section>
              
              <section className="dark-section pb-1">
              <div className="content pt-5"> 
              <Row className="mt-3">
                  <Col lg={12}>
                  <h6 className="text-span"><b>Additional Director Details </b> </h6>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={3}>
                    <label className="text-span"><b>Director 4</b></label>
                  </Col>
                  <Col lg={3}>
                    <label className="text-span"><b>Director 5</b></label>
                  </Col>
                  <Col lg={3}>
                    <label className="text-span"><b>Director 6</b></label>
                  </Col>
                  <Col lg={3}>
                    <label className="text-span"><b>Director 7</b></label>
                  </Col>
                  </Row>
                <Row className="mt-3">
                  <Col lg={3}>
                    <label>Name</label>                 
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Name</label>                 
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Name</label>                  
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Name</label>                  
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg={3}>
                    <label>Date Of Birth</label>                 
                    <input type="date"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Date Of Birth</label>                  
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Date Of Birth</label>                 
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Date Of Birth</label>                 
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg={3}>
                    <label>Occupation</label>
                    <input type="date"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Occupation</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Occupation</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Occupation</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Address Line 1</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Address Line 1</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Address Line 1</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Address Line 1</label>
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
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Nationality</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Nationality</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Nationality</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Nationality</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Other Directorship 1 - Company Number</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Other Directorship 1 - Company Number</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Other Directorship 1 - Company Number</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Other Directorship 1 - Company Number</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Other Directorship 2 - Company Number</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Other Directorship 2 - Company Number</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Other Directorship 2 - Company Number</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Other Directorship 2 - Company Number</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Other Directorship 3 - Company Number</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Other Directorship 3 - Company Number</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Other Directorship 3 - Company Number</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Other Directorship 3 - Company Number</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Disqualified or Restricted</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Disqualified or Restricted</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Disqualified or Restricted</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Disqualified or Restricted</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>If this director is also a subscriber, enter their 
number of shares</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>If this director is also a subscriber, enter their 
number of shares</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>If this director is also a subscriber, enter their 
number of shares</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>If this director is also a subscriber, enter their 
number of shares</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4 pb-5">                 
                  <Col lg={3}>
                    <label>Is the director the beneficial owner of the 
above shares?</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Is the director the beneficial owner of the 
above shares?</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Is the director the beneficial owner of the 
above shares?</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Is the director the beneficial owner of the 
above shares?</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
              </div>
              </section>
              <section className="light-section pb-1">
              <div className="content pt-5"> 
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
              </div>
              </section>
              <section className="dark-section pb-1">
              <div className="content pt-5"> 
              <Row className="mt-3">
                  <Col lg={12}>
                  <h6 className="text-span"><b>Additional Subscriber Details </b> </h6>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={3}>
                    <label className="text-span"><b>Subscriber 4</b></label>
                  </Col>
                  <Col lg={3}>
                    <label className="text-span"><b>Subscriber 5</b></label>
                  </Col>
                  <Col lg={3}>
                    <label className="text-span"><b>Subscriber 6</b></label>
                  </Col>
                  <Col lg={3}>
                    <label className="text-span"><b>Subscriber 7</b></label>
                  </Col>
                  </Row>
                <Row className="mt-3">
                  <Col lg={3}>
                    <label>Name</label>                 
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Name</label>                 
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Name</label>                  
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Name</label>                  
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Address Line 1</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Address Line 1</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Address Line 1</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Address Line 1</label>
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
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Nationality</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Nationality</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Nationality</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Nationality</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg={3}>
                    <label>Occupation</label>
                    <input type="date"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Occupation</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Occupation</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Occupation</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
                <Row className="mt-4">                 
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
                <Row className="mt-4 pb-5">                 
                  <Col lg={3}>
                    <label>Is the Subscriber the beneficial owner of the 
above shares?</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Is the Subscriber the beneficial owner of the 
above shares?</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Is the Subscriber the beneficial owner of the 
above shares?</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                  <Col lg={3}>
                    <label>Is the Subscriber the beneficial owner of the 
above shares?</label>
                    <input type="text"  className="form-control"/>
                  </Col>
                </Row>
              </div>
              </section>
              <section className="light-section pb-1">
              <div className="content pt-5"> 
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
              </div>
              </section>
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
})(withStyles(styles)(Home)));

export { connectedHomePage as Home };
  