import React, { useState } from "react";
import logo from '../../assets/img/cls-logo-white.png';
import { Container, Row, Col } from 'reactstrap';
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createVendorinfo } from "../../_actions/registartion";
function Registration() {
    const [empcode, setempcode] = useState("");
    const [email, setemail] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [role, setrole] = useState("");
    
    const { register, errors, handleSubmit } = useForm();
    const dispatch = useDispatch();
  const onSubmit = (e) => {
    // e.preventDefault();
    var fullname=firstname + " " + lastname;
    let reqBody = {
      empcode: empcode,
      email:email,
      fullname:fullname,
      username:username,
      password:password,
      role:role,
      department:"",
      phone:""
    };

    dispatch(createVendorinfo(reqBody));
  };
  
    return (
        <div>
            <div className="login-bg">
            <Container className="login-margin">
                        <Row className="justify-content-center">
                            <Col md={10} className="card shadow login-box">
                   <div className="pt-1 white-border text-center pb-1">
                        <img src={logo} className="logo" alt="logo"/>
                   </div>
                   <div className="pt-4">
                    <h5 className="text-center">REGISTRATION</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                       
                        <Row>
                        <Col lg={6} className="pl-5 pr-5">
                        <label className="text-left w-100">Employee Id <span className="redspan">*</span></label>
                        <div className="input-group mb-3">
                           
                            <div className="input-group-prepend">
                                <span className="input-group-text input-group-icon" id="basic-addon3"><i className="fa fa-user" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" className="form-control" 
                            aria-label="empcode" aria-describedby="basic-addon3"
                            onChange={(e) => {
                                setempcode(e.target.value);
                              }}
                              name="empcode"
                              ref={register({ required: true })}/>
                               
                        </div>
                        {errors.empcode && (
                  <p className="redspan font-12">The field is Required</p>
                )}
                        </Col>
                        <Col lg={6}  className="pl-5 pr-5">
                        <label className="text-left w-100">Email Id <span className="redspan">*</span></label>
                        <div className="input-group mb-3">
                           
                            <div className="input-group-prepend">
                                <span className="input-group-text input-group-icon" id="basic-addon3"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                            </div>
                            <input type="email" className="form-control" 
                            aria-label="email" aria-describedby="basic-addon3"
                            onChange={(e) => {
                                setemail(e.target.value);
                              }}
                              name="email"
                              ref={register({
                                required: "The field is Required",
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                  message: "Enter a valid e-mail address",
                                },
                               })}/>
                               
                        </div>
                        {errors.email && <p className="error redspan font-12">{errors.email.message}</p>}
                        </Col>
                        </Row>
                        <Row className="mt-3">
                        <Col lg={6} className="pl-5 pr-5">
                        <label className="text-left w-100">First Name <span className="redspan">*</span></label>
                        <div className="input-group mb-3">
                           
                            <div className="input-group-prepend">
                                <span className="input-group-text input-group-icon" id="basic-addon3"><i className="fa fa-user" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" className="form-control" 
                            aria-label="firstname" aria-describedby="basic-addon3"
                            onChange={(e) => {
                                setfirstname(e.target.value);
                              }}
                              name="firstname"
                              ref={register({
                                required: "The field is Required",
                               })}/>
                               
                        </div>
                        {errors.firstname && <p className="error redspan font-12">{errors.firstname.message}</p>}
                        </Col>
                        <Col lg={6}  className="pl-5 pr-5">
                        <label className="text-left w-100">Last Name <span className="redspan">*</span></label>
                        <div className="input-group mb-3">
                           
                            <div className="input-group-prepend">
                                <span className="input-group-text input-group-icon" id="basic-addon3"><i className="fa fa-user" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" className="form-control" 
                            aria-label="lastname" aria-describedby="basic-addon3"
                            onChange={(e) => {
                                setlastname(e.target.value);
                              }}
                              name="lastname"
                              ref={register({
                                required: "The field is Required",
                               })}/>
                               
                        </div>
                        {errors.lastname && <p className="error redspan font-12">{errors.lastname.message}</p>}
                        </Col>
                        </Row>
                        <Row className="mt-3">
                        <Col lg={6} className="pl-5 pr-5">
                        <label className="text-left w-100">Username <span className="redspan">*</span></label>
                        <div className="input-group mb-3">
                           
                            <div className="input-group-prepend">
                                <span className="input-group-text input-group-icon" id="basic-addon3"><i className="fa fa-user" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" className="form-control" 
                            aria-label="username" aria-describedby="basic-addon3"
                            onChange={(e) => {
                                setusername(e.target.value);
                              }}
                              name="username"
                              ref={register({ required: true })}/>
                              
                        </div>
                        {errors.username && (
                  <p className="redspan font-12">The field is Required</p>
                )}
                        </Col>
                        <Col lg={6}  className="pl-5 pr-5">
                        <label className="text-left w-100">Password <span className="redspan">*</span></label>
                        <div className="input-group mb-3">
                           
                            <div className="input-group-prepend">
                                <span className="input-group-text input-group-icon" id="basic-addon3"><i className="fa fa-lock" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" className="form-control" 
                            aria-label="password" aria-describedby="basic-addon3"
                            onChange={(e) => {
                                setpassword(e.target.value);
                              }}
                              name="password"
                              ref={register({ required: true })}/>
                               
                        </div>
                        {errors.password && (
                  <p className="redspan font-12">The field is Required</p>
                )}
                        </Col>
                        </Row>
                        <Row className="mt-3">
                        <Col lg={6} className="pl-5 pr-5">
                        <label className="text-left w-100">Role <span className="redspan">*</span></label>
                        <div className="input-group mb-3">
                           
                            <div className="input-group-prepend">
                                <span className="input-group-text input-group-icon" id="basic-addon3"><i className="fa fa-user" aria-hidden="true"></i></span>
                            </div>
                            <select type="text" className="form-control" 
                            aria-label="role" aria-describedby="basic-addon3"
                            onChange={(e) => {
                                setrole(e.target.value);
                              }}
                              name="role"  ref={register({ required: true })}>
                                 <option value="">Select</option>
                                <option value="User">User</option>
                                <option value="Agent">Agent</option>
                            </select>
                            
                        </div>
                        {errors.role && (
                  <p className="redspan font-12">The field is Required</p>
                )}
                        </Col>
                        <Col lg={6}  className="pl-5 pr-5">
                        <button type="submit"  className="btn btn-light btn-block mt4">
                            Register
                        </button>
                        </Col>
                        </Row>
                        </form>
                        </div>
                </Col>
                </Row>
                </Container>
        </div>
        </div>
    )
}

export default Registration
