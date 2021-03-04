import React, { useEffect,useState } from 'react';
import Navbarsupoort from '../_components/navbarsupoort';
import { Col, Row } from 'reactstrap';
import Footer from '../_components/footer';
import axios from 'axios';
function CheckTicketStatus(){
    const activeTickitStatus ="active ";
    const [data, setData] = useState({ hits: [] });
  const [email, setemail] = useState('');
  const [ticketno, setticketno] = useState('');
  const [search, setSearch] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://www.apiats.somee.com/api/clsreplyticket?email=${email}&ticketno=${ticketno}`,
      );
 
      setData(result.data);
     
    };
 
    fetchData();
  }, [email,ticketno]);
  console.log(data);
    return(
        <React.Fragment>
       <Navbarsupoort activeTickitStatus={activeTickitStatus}/>
       
       <section className="light-section pb-5 mt-5">
              <div className="content pt-5"> 
              <Row className="mt-5">
                  <Col lg={12}>
                 <div> <label className="text-span"><b>Check Ticket Status </b> </label></div>
                  <label>Please provide your email address and a ticket number. An access link will be emailed to you. </label>
                  </Col>
                </Row>  
                </div>
              </section> 
                <section className="dark-section pt-5">
              <div className="content"> 
              <Row>
                  <Col lg={12}>
                  <label className="text-span"><b>Contact information </b> </label>
                  </Col>
              </Row>
              <Row>
                  <Col lg={3}>
                  <label>Email Address</label>
                  </Col>
                  <Col lg={3}>
                  <input type="text" className="form-control"
                   value={email}
                   onChange={event => setemail(event.target.value)}/>
                  </Col>
                  <Col lg={3}>
                  <label>Have an account with us ? <a className="text-span" href="/">Sign in</a></label>
                  </Col>
              </Row>
              <Row className="mt-4">
                  <Col lg={3}>
                  <label>Ticket Number</label>
                  </Col>
                  <Col lg={3}>
                  <input type="text" value={ticketno}
                   onChange={event => setticketno(event.target.value)} className="form-control" placeholder="e.g 562894"/>
                  </Col>
              </Row>
                <Row className="mt-5 pb-5">
                  <Col>
                  <button type="button" onClick={() => setSearch(email,ticketno)} className="btn btn-primary">Email Access Link</button> 
                  </Col>
                </Row>           
              </div>
              </section>
              <section className="light-section pb-3 pt-3 ">
              <div className="content"> 
              <Row className="">
                  <Col lg={12}>
                  <label>If this is your first time contacting us or you've lost the ticket number, Please <a className="text-span" href="/opennewticket">open a new ticket </a> </label>
                  </Col>
                </Row>  
                </div>
              </section> 
              <Footer/>
</React.Fragment>
    )
}
export default CheckTicketStatus;
