import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { history } from '../_helpers';
import { Link, withRouter } from 'react-router-dom';
import './login.component.css'
import logo from '../assets/img/cls-logo-white.png'
import { Container, Row, Col,Label, FormGroup, Button, } from 'reactstrap';

  
class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            showPassword: false,
        }
    }

    componentDidMount() {
        console.log(this.props);
        if(localStorage.getItem('auth')){
            history.push('/home');
        }
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    login = event =>{
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

   render() {
      return (
        <div className="login-bg">
            <Container className="login-margin">
                        <Row className="justify-content-center">
                            <Col md={4} className="card shadow login-box p-0">
                   <div className="pt-2 white-border pb-3">
                        <img src={logo} className="logo" alt="logo"/>
                   </div>
                   <div className="pb-3 pl-3 pr-3 pt-3">
                    <h4>{'Welcome'}</h4>
                        <form>
                        <div class="form-group">
                        <label className="text-left w-100">Username</label>
                        <div class="input-group mb-3">
                           
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-icon" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Username" 
                            value={this.state.username}
                            onChange = {this.handleChange('username')} aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        </div>
                        <div class="form-group">
                        <label className="text-left w-100">Email</label>
                        <div class="input-group mb-3">
                           
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-icon" id="basic-addon3"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Username" 
                            //value={this.state.username}
                            //onChange = {this.handleChange('username')} 
                            aria-label="Username" aria-describedby="basic-addon3"/>
                        </div>
                        </div>
                        
                        <div class="form-group">
                        <label className="text-left w-100">Password</label>
                        <div class="input-group mb-3">
                       
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-icon" id="basic-addon2">@</span>
                            </div>
                            <input  class="form-control" placeholder="Password" 
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={this.handleChange('password')} aria-label="Password" aria-describedby="basic-addon2"/>
                        </div>
                        </div>
                        <div class="form-group form-check check-m">
                            <label class="form-check-label">
                            <input class="form-check-input" type="checkbox"/> Remember me
                            </label>
                            <Link to="/account/forget-password" className="float-right text-muted text-unline-dashed ml-1">Forgot your password?</Link>
                        </div>
                        <Button variant="contained" className="btn btn-light btn-block" onClick={(event)=>{this.login()}}>
                            Login
                        </Button>
                        </form>
                        </div>
                </Col>
                </Row>
                </Container>
        </div>
      );
   }
}


  
const mapStateToProps = (state) =>{
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(Login));

export { connectedLoginPage as Login };