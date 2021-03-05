import React from 'react';
import Navbarsupoort from '../../_components/navbarsupoort';
import { Col, Row } from 'reactstrap';
import Footer from '../../_components/footer';
function SupportCenterHome(){
    const activeSupport ="active "
    return(
        <React.Fragment>
       <Navbarsupoort activeSupport={activeSupport}/>
       
       <section className="light-section pb-5 mt-5 section-height">
              <div className="content pt-5"> 
              <Row className="mt-5">
                  <Col lg={12}>
                  <h6 className="text-span"><b>Welcome ! </b> </h6>
                  <h6>Welcome to the CLS</h6>
                  </Col>
                </Row>    
                <Row className="mt-5">
                  <Col>
                  <a href="/opennewticket" className="btn btn-primary">Open a New Ticket</a> 
                <a href="/ticketstatus" className="btn btn-primary ml-5">Check Ticket Status</a> 
                  </Col>
                </Row>           
              </div>
              </section>
              <Footer/>
</React.Fragment>
    )
}
export default SupportCenterHome;
