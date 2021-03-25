import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Controller, useForm } from "react-hook-form";
import TextEditor from '../../_components/textEditor';
import { Row, Col } from 'reactstrap';
import $ from "jquery";
import config from '../../config/config';
const ViewTicketReplay = (props) => {
    
var urlpattern =config.baseUrl;
   
    const { control, handleSubmit } = useForm();
    const [status, setstatus]=useState('');
    const onSubmit = (data, e) => {
   e.preventDefault();
  console.log("main function");
  console.log("ajax request to the resource which will require cors enabled");
  var textdata = data.editor;
  var stripedHtml = textdata.replace(/<[^>]+>/g, '');
  //var decodedStripedHtml = .decode(stripedHtml);
  var email =props.viewticketdetails.ticket_email;
  var name =props.viewticketdetails.ticket_name;
 // var status =props.viewticketdetails.ticket_initial_status;
  var ticketno =props.viewticketdetails.ticket_number;

  var formData = new FormData();
  formData.append("email", email);
  formData.append("name", name);
  formData.append("details", stripedHtml);
  formData.append("status", status);
  formData.append("ticketno", ticketno);
  console.log(stripedHtml);
  $.ajax({
    url: `${urlpattern}clsreplyticket`,
    type: "Post",
    dataType: "JSON",
    data: formData, //JSON.stringify(obj),
    contentType: false,
    processData: false,
   
    success: function (data) {
     // console.log("log response on success");
      console.log("log response on success postbody",data);
      localStorage.setItem("ticketNumber", JSON.stringify(data));
      //swal("Ticket Created Successful", data, "success");
      getAllReplays();
    },
  });
};

    var currentticketnuber = props.viewticketdetails.ticket_number;
  console.log(currentticketnuber,"currentticketnuber")
  const [replays, getReplays ]=useState([]);
    
    useEffect(() => {
        getAllReplays();
         // eslint-disable-next-line 
     }, []);
    const getAllReplays=()=>{
        axios.get(`${urlpattern}clsreplyticket?ticketno=${currentticketnuber}`)
        
        .then((response)=>{
            var allreplays=response.data;
            getReplays(allreplays);            
            console.log(allreplays, 'joinallreplays');

        })
    }
    console.log(replays,"function baher");
   
   // replays.replies.forEach(element => console.log(element));
    var ticketreplay =replays.replies || [];
   // console.log(ticketreplay,"function baher filter");
    
    return (
        <section className="light-section pt-5 mt-5 mb-5">
             <form onSubmit={handleSubmit(onSubmit)}>
        <div className="content pt-5">
              <Row>
                   <Col lg={12}>
                      <h6 className="text-span"><b>Ticket Number : {props.viewticketdetails.ticket_number}</b></h6>
                  </Col>
                  <Col lg={6} >
                      <div className="dark-section p-3">
                      <h6 className="text-span"><b>Basic Ticket Information</b></h6>
                      <label>Ticket Status : {props.viewticketdetails.ticket_initial_status}</label><br/>
                      <label>Deapartment : {props.viewticketdetails.ticket_business}</label><br/>
                      <label>Create Date : {props.viewticketdetails.ticket_createdate}</label>
                      </div>
                  </Col>
                  <Col lg={6}>
                  <div className="dark-section p-3">
                  <h6 className="text-span"><b>User Information</b></h6>
                      <label>Name : {props.viewticketdetails.ticket_name}</label><br/>
                      <label>Email : {props.viewticketdetails.ticket_email}</label><br/>
                      <label>Phone : {props.viewticketdetails.ticket_phoneno}</label>
                      </div>
                  </Col>
                  <Col lg={12} className="mt-4">
                  <div className="light-section">
                       <Row>
                       <Col lg={3}>
                       <h6 className="text-span"><b>Ticket Status</b></h6>
                           <select className="form-control"
                            onChange={(e) => {
                                setstatus(e.target.value);
                              }}
                              name="status">
                               <option value="">Select</option>
                               <option value="Open">Open</option>
                               <option value="Close">Close</option>
                               <option value="in Progress">in Progress</option>
                           </select>
                       </Col>
                       </Row>
                  </div>
                  </Col>
                  <Col lg={12} className="mt-5">
                  <div className="light-section">
                  {ticketreplay.map((replies, index) => (
                        replies.email === props.viewticketdetails.ticket_email
                        ? <Row key={replies.ticketid}>
                        <Col lg={1}>
                        <div className="chat-icon"><div className="h1"><i className="fa fa-user" aria-hidden="true"></i></div></div>
                        </Col>
                        <Col lg={11}>
                        <div className="card card-post">
                        <div className="card-header bgprimary">{replies.ticketno} Posted {replies.replydate}</div>
                        <div className="card-body">{replies.details}</div>
                        </div>
                        <Col lg={12} className="mt-3">
                            <i className="fa fa-pencil-square-o text-span font-18" aria-hidden="true"></i><label className="createdby"> Created By</label>
                            <i className="fa fa-user-o text-span font-18 ml-5" aria-hidden="true"></i><label className="ml-2">{props.viewticketdetails.ticket_phoneno}</label>
                            <label className="createdby ml-2"> {replies.replydate}</label>
                        </Col>
                        </Col>
                        </Row>
                        : <Row>
                        <Col lg={11}>
                        <div className="card card-replay">
                        <div className="card-header bgprimary">{replies.ticketno} Posted {replies.replydate}</div>
                        <div className="card-body">{replies.details}</div>
                        </div>
                        <Col lg={12} className="mt-3">
                           <label className="createdby"> Closed By </label>
                            <label className="ml-2">{replies.name}</label> With Status of &nbsp;
                            <label className="createdby ml-2"> {replies.status}</label>
                            <label className="createdby ml-2"> {replies.replydate}</label>
                            
                        </Col>
                        </Col>
                        <Col lg={1}>
                        <div className="chat-icon"><div className="h1"><i className="fa fa-user" aria-hidden="true"></i></div></div>
                        </Col>
                        </Row> 
                    ))}
                
                      {/* <Row>
                       <Col lg={11}>
                       <div className="card card-replay">
                       <div className="card-header bgprimary">{props.viewticketdetails.ticket_number} Posted {props.viewticketdetails.ticket_createdate}</div>
                       <div className="card-body">Content</div>
                       </div>
                       <Col lg={12} className="mt-3">
                          <label className="createdby"> Closed By</label>
                           <label className="ml-2">{props.viewticketdetails.ticket_name}</label>With Status of
                           <label className="createdby ml-2"> {props.viewticketdetails.ticket_initial_status}</label>
                           <label className="createdby ml-2"> {props.viewticketdetails.ticket_finaldate}</label>
                           
                       </Col>
                       </Col>
                       <Col lg={1}>
                       <div className="chat-icon"><div className="h1"><i className="fa fa-user" aria-hidden="true"></i></div></div>
                       </Col>
                       </Row> */}
                   </div>
                  </Col>
                  <Col lg={12} className="mt-5">
                  <div className="dark-section p-3 blue-brd">
                      <h6 className="text-span"><b>Post a Replay</b></h6>
                      <Row className="blue-brd-top"></Row>
                      <label className="mt-2">To best assist you, we request that you be specific and detailed</label>
                     
                      <Controller
 name="editor"
 control={control}
 defaultValue=""
 render={({ onChange, value }) => (
   <TextEditor onChange={onChange} value={value} />
 )}
/>
                      
                       <Col lg={12} className="mt-4 text-center mb-5">
                           <button type="submit" className="btn btn-primary">Post Replay</button> 
                           <button type="button" className="btn btn-primary ml-2">Reset</button> 
                           <button type="button" onClick={props.gotobackpage} className="btn btn-primary ml-2">Cancel</button> 
                       </Col>
                      
                  </div>
                  </Col>
              </Row>
              </div>
              </form>
              </section>
    )
}
export default ViewTicketReplay;
