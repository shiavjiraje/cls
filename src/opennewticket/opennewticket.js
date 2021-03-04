
import React, { useState } from "react";
import Navbarsupoort from '../_components/navbarsupoort';
import { Col, Row } from 'reactstrap';
import TextEditor from '../_components/textEditor';
import Footer from '../_components/footer';
//import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
//import { vendorAction } from "../_actions/opennewticket.actions";
import $ from 'jquery';
import swal from "sweetalert";
function OpenNewTicket(){
    const activeTicket ="active "
    const open = "open";
    const [name, setname] = useState("");
    const [email, setemail] = useState(0);
    const [business, setbusiness] = useState("");
    const [phoneno, setphoneno] = useState("");
    const [extension, setextension] = useState("");
    const [helptopics, sethelptopics] = useState("");
    const [issuesummary, setissuesummary] = useState("");
    const [details, setdetails] = useState("");
    const [initialstatus, setinitialstatus]=useState(open)
    const { register, errors, reset, handleSubmit } = useForm();

  //  const dispatch = useDispatch();
    const onSubmit = (e) => {
      // e.preventDefault();
      // let reqBody = {
      //   name: name,
      //   email: email,
      //   business: business,
      //   phoneno: phoneno,
      //   extension: extension,
      //   helptopics: helptopics,
      //   issuesummary: issuesummary,
      //   details: details,
      //   initialstatus:initialstatus
      // };
      // console.log(reqBody);
      // dispatch(vendorAction.createVendor(reqBody));
      console.log("main function");
    console.log("ajax request to the resource which will require cors enabled");
    
	var formData = new FormData();
		formData.append("email", email);
        	formData.append("name", name);
		formData.append("business", business);
		formData.append("phoneno", phoneno);
		formData.append("extension", extension);
		formData.append("helptopics", helptopics);
		formData.append("issuesummary", issuesummary);
		formData.append("details", details);
		formData.append("initialstatus", initialstatus);
		
	$.ajax
    ({
		url: "http://apiats.somee.com/api/clscreateticket",
		type:"Post",
		dataType:"JSON",
		data: formData, //JSON.stringify(obj),
        contentType: false,
		processData: false,
        success: function(data) 
        {
		
            console.log("log response on success");
            console.log(data);
            localStorage.setItem("ticketNumber", JSON.stringify(data));
            swal("Ticket Created Successful", data, "success");
            
        }
    });
    };
    //var getTicketNumbar = JSON.parse(localStorage.getItem("ticketNumber"));
    //console.log(getTicketNumbar,"getTicketNumbargetTicketNumbar");
    return(
        <React.Fragment>
       <Navbarsupoort activeTicket={activeTicket}/>
       
       <section className="light-section pb-1 mt-5">
              <div className="content pt-5"> 
              <Row className="mt-3">
                  <Col lg={12}>
                  <h6 className="text-span"><b>Open a New Ticket </b> </h6>
                  <p>Please fill the form below to open a new Ticket</p>
                  </Col>
                </Row>               
              </div>
              </section>
              <hr/>
              <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
              <section className="light-section">
              <div className="content">               
                <Row className="mt-3">
                  <Col lg={12}>
                    <label className="text-span"><b>Contact information </b></label>
                  </Col>
                  </Row>
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Email Address <span className="redspan">*</span></label>
                  </Col>
                  <Col lg={3}>
                  <input type="hidden"  className="form-control"
                    onChange={(e) => {
                      setinitialstatus(e.target.value);
                    }}
                    name="initialstatus"/>
                    <input type="email"  className="form-control"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    name="email"
                    ref={register({ required: true })}/>
                     {errors.email && (
                <p className="redspan font-12">The field is Required</p>
              )}
                  </Col>
                </Row>
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Name <span className="redspan">*</span></label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"
                    ref={register({ required: true })}
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                    name="name"/>
                     {errors.name && (
                <p className="redspan font-12">The field is Required</p>
              )}
                  </Col>                  
                </Row>
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Business</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"
                    onChange={(e) => {
                      setbusiness(e.target.value);
                    }}
                    name="business"/>
                  </Col>
                </Row>
                <Row className="mt-4">
                <Col lg={3}>
                    <label>Phone Number</label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control"
                    onChange={(e) => {
                      setphoneno(e.target.value);
                    }}
                    name="phoneno"/>
                  </Col>
                  <Col lg={1}>
                    <label>Ext:</label>
                  </Col>
                  <Col lg={1}>
                    <input type="text"  className="form-control"
                    onChange={(e) => {
                      setextension(e.target.value);
                    }}
                    name="extension"/>
                  </Col>
                </Row>
               
              </div>
              </section>
              <hr/>
              <section className="light-section">
              <div className="content">
                <Row className="mt-4">                 
                  <Col lg={3}>
                    <label>Help Topic</label>
                  </Col>
                  <Col lg={3}>
                    <select  className="form-control" onChange={(e) => {
                      sethelptopics(e.target.value);
                    }}
                    name="helptopics">
                      <option value="">Select</option>
                      <option value="Cotizacion">Cotizacion</option>
                      <option value="Facturacion">Facturacion</option>
                      <option value="Soporte">Soporte</option>
                    </select>
                  </Col>
                </Row>
              </div>
              </section>
              <hr/>
              <section className="light-section">
              <div className="content">
                <Row className="mt-4">                 
                  <Col lg={12}>
                    <label>Ticket Details</label>
                  </Col>
                  <Col lg={12}>
                    <label>Please Describe your Issue</label>
                  </Col>
                  </Row>
                  <Row className="mt-4">   
                  <Col lg={3}>
                    <label>Issue Summary <span className="redspan">*</span></label>
                  </Col>
                  <Col lg={3}>
                    <input type="text"  className="form-control" onChange={(e) => {
                      setissuesummary(e.target.value);
                    }}
                    ref={register({ required: true })} name="issuesummary"/>
                     {errors.issuesummary && (
                <p className="redspan font-12">The field is Required</p>
              )}
                  </Col>
                </Row>
                <Row className="mt-4 mb-4">   
                {/* <textarea onChange={(e) => {
                      setdetails(e.target.value);
                    }} name="details" className="form-control"></textarea> */}
                <TextEditor /> 
                {/* onChange={(e) => {
                      setdetails(e.target.value);
                    }} name="details" */}
                </Row>
              </div>
              </section>
              <hr/>
              <section className="light-section pb-4 pt-3">
              <div className="content text-center">
                <button type="submit" className="btn btn-primary">Create Ticket</button> 
                <button type={reset} className="btn btn-primary ml-5">Reset</button> 
                <button className="btn btn-primary ml-5">Cancel</button> 
                </div>
              </section>
              </form>
              <Footer/>
</React.Fragment>
    )
}
export default OpenNewTicket;
