import React, { Component } from 'react';
import config from '../../config/config';
//import { useHistory } from "react-router-dom";
var urlpattern =config.baseUrl;

class resetPassword extends Component {
    
    constructor(){
        super();
        this.state={
            newpwd:"",
            value2:"",
            oldpwd:"",
        }
        
        this.handleChange1=(event)=>{
            this.setState({
                newpwd:event.target.value
            })
        }
        
        this.handleChange2=(event)=>{
            this.setState({
                value2:event.target.value
            })              
        }
        this.handleChange3=(event)=>{
            this.setState({
                oldpwd:event.target.value
            })              
        }
    }
    handleSubmit = event =>{
        event.preventDefault();
        var getUsername = localStorage.getItem('Username');
        const url =`${urlpattern}clspassword`
        const data = { newpwd:this.state.newpwd, oldpwd:this.state.oldpwd, username:getUsername }
        fetch(url, { method: 'POST', // or ‘PUT’
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{ 'Content-Type': 'application/json' } })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response)); }
        
  render() {
      
      let colour1="red",colour2="red",colour3="red",colour4="red";
      //colour5="red";
      if(this.state.newpwd.length >= "8")
      {
          colour1="green";    
      }
      if(this.state.newpwd.match(/[A-Z]/))
      {
          colour2="green";    
      }
      if(this.state.newpwd.match(/[a-z]/))
      {
          colour3="green";    
      }
      if(this.state.newpwd.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/))
      {
          colour4="green";    
      }
      if(this.state.newpwd === this.state.value2 && this.state.newpwd!=="" )
      {
          //colour5="green";    
      }
      
      const style={
          boxShadow:"2px 2px 3px 3px #ccc",
          border:"2px #eee",
          padding:"20px",
          marginTop:"25px"
      }
           
    return (
        
    <div className="container"> 
    <div className="row mt-5">
    <div className="col-md-4"></div>
        
    
    <div className="col-md-4 card shadow login-box mt-5">
    <div style={style}>
    <form onSubmit={this.handleSubmit}> 
          <p style={{fontWeight:"bold"}}>All checkmarks must turn green, password must have:</p>
          <p><i style={{color:colour1,fontSize:"20px"}} class="fa fa-check-circle" aria-hidden="true"></i> At least 8 characters</p>
          <p><i style={{color:colour2,fontSize:"20px"}} class="fa fa-check-circle" aria-hidden="true"></i> At least 1 uppercase letter</p>
          <p><i style={{color:colour3,fontSize:"20px"}} class="fa fa-check-circle" aria-hidden="true"></i> At least 1 lowercase letter</p>
          <p><i style={{color:colour4,fontSize:"20px"}} class="fa fa-check-circle" aria-hidden="true"></i> At least 1 number or special character</p>
          {/* <p><i style={{color:colour5,fontSize:"20px"}} class="fa fa-check-circle" aria-hidden="true"></i> Password === Confirm Password</p> */}
        
          <div class="form-group">
            <label for="password">Old Password</label>
            <input type="text" class="form-control" value={this.state.oldpwd} onChange={this.handleChange3} placeholder="Password"/>
          </div>
          <div class="form-group">
            <label for="password">New Password</label>
            <input type="text" class="form-control" value={this.state.newpwd} onChange={this.handleChange1} placeholder="Password"/>
          </div>
          <div class="form-group">
            <label for="password">Confirm Password</label>
            <input type="text" class="form-control" value={this.state.value2} onChange={this.handleChange2} placeholder="Confirm Password"/>
          </div> 
         {this.state.value2 === "" ? "" :
         (this.state.newpwd === this.state.value2  ? <p style={{color:"green",fontWeight:"bold"}}> Passwords match </p> :
         <p style={{color:"red",fontWeight:"bold"}}> Passwords not match </p>
          )}
           <div class="form-group">
          <button type="submit"  className="btn btn-light btn-block mt4">
            Submit
            </button>
        </div>
    </form>
    </div>
    </div>
   
        
    <div className="col-md-4"></div>
    </div>
    </div>
    );
  }
}

export default resetPassword;
