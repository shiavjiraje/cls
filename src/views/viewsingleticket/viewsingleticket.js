import React, { useEffect, useState } from "react";
//import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from "reactstrap";
import Navbarsupoort from "../../_components/navbarsupoort";
import axios from "axios";
import TextEditor from "../../_components/textEditor";
import config from '../../config/config';
const ViewSingleTicket = () => {
  
var urlpattern =config.baseUrl;
  const [tickets, getTickets] = useState([]);
  
  useEffect(() => {
    getAllTickets();
     // eslint-disable-next-line 
 }, []);
  const getAllTickets = () => {
    axios
      .get(
        `${urlpattern}clsreplyticket?email=ajay.zala@archesoftronix.com&ticketno=20210224001`
      )

      .then((response) => {
        var allTickets = response.data;
        getTickets(allTickets);
        //console.log(allTickets, 'join list');
      });
  };

  let viewticketdetails = tickets;
  console.log(viewticketdetails, "viewticketdetails");
  const activeTickitThread = "active";

  return (
    <React.Fragment>
      <Navbarsupoort activeTickitThread={activeTickitThread} />
      <section className="light-section pt-2 mt-5">
        <div className="content pt-5">
          <Row>
            <Col lg={12}>
              <h6 className="text-span">
                <b>Ticket Number : {viewticketdetails.ticketno}</b>
              </h6>
            </Col>
            <Col lg={6}>
              <div className="dark-section p-3">
                <h6 className="text-span">
                  <b>Basic Ticket Information</b>
                </h6>
                <label>Ticket Status : {viewticketdetails.initialstatus}</label>
                <br />
                <label>Deapartment : {viewticketdetails.business}</label>
                <br />
                <label>Create Date : {viewticketdetails.createdate}</label>
              </div>
            </Col>
            <Col lg={6}>
              <div className="dark-section p-3">
                <h6 className="text-span">
                  <b>User Information</b>
                </h6>
                <label>Name : {viewticketdetails.name}</label>
                <br />
                <label>Email : {viewticketdetails.email}</label>
                <br />
                <label>Phone : {viewticketdetails.phoneno}</label>
              </div>
            </Col>
            <Col lg={12} className="mt-5">
              <div className="light-section">
                <Row>
                  <Col lg={1}>
                    <div className="chat-icon">
                      <h1>
                        <i className="fa fa-user" aria-hidden="true"></i>
                      </h1>
                    </div>
                  </Col>
                  <Col lg={11}>
                    <div className="card">
                      <div className="card-header bgprimary">
                        {viewticketdetails.number} Posted{" "}
                        {viewticketdetails.createdate}
                      </div>
                      <div className="card-body">Content</div>
                    </div>
                    <Col lg={12} className="mt-3">
                      <i
                        className="fa fa-pencil-square-o text-span font-18"
                        aria-hidden="true"
                      ></i>
                      <label className="createdby"> Created By</label>
                      <i
                        className="fa fa-user-o text-span font-18 ml-5"
                        aria-hidden="true"
                      ></i>
                      <label className="ml-2">
                        {viewticketdetails.phoneno}
                      </label>
                      <label className="createdby ml-2">
                        {" "}
                        {viewticketdetails.createdate}
                      </label>
                    </Col>
                  </Col>
                </Row>
                <Row>
                  <Col lg={11}>
                    <div className="card card-replay">
                      <div className="card-header bgprimary">
                        {viewticketdetails.number} Posted{" "}
                        {viewticketdetails.createdate}
                      </div>
                      <div className="card-body">Content</div>
                    </div>
                    <Col lg={12} className="mt-3">
                      <label className="createdby"> Closed By</label>
                      <label className="ml-2">{viewticketdetails.name}</label>
                      With Status of
                      <label className="createdby ml-2">
                        {" "}
                        {viewticketdetails.initial_status}
                      </label>
                      <label className="createdby ml-2">
                        {" "}
                        {viewticketdetails.finaldate}
                      </label>
                    </Col>
                  </Col>
                  <Col lg={1}>
                    <div className="chat-icon">
                      <h1>
                        <i className="fa fa-user" aria-hidden="true"></i>
                      </h1>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={12} className="mt-5">
              <div className="dark-section p-3 blue-brd">
                <h6 className="text-span">
                  <b>Post a Reply</b>
                </h6>
                <Row className="blue-brd-top"></Row>
                <label className="mt-2">
                  To best assist you, we request that you be specific and
                  detailed
                </label>
                <TextEditor />
                <Col lg={12} className="mt-4 text-center">
                  <button type="submit" className="btn btn-primary">
                    Post Reply
                  </button>
                  <button type="button" className="btn btn-primary ml-2">
                    Reset
                  </button>
                  <button type="button" className="btn btn-primary ml-2">
                    Cancel
                  </button>
                </Col>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ViewSingleTicket;
