import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import { history } from '../../_helpers';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../assets/img/cls-logo-white.png'
import { Container, Row, Col, Button, } from 'reactstrap';

  
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
            history.push('/welcome');
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
                            <Col md={4} className="card shadow login-box">
                   <div className="pt-2 white-border text-center pb-3">
                        <img src={logo} className="logo" alt="logo"/>
                   </div>
                   <div className="pb-3 pl-3 pr-3 pt-3">
                    <h5 className="text-center">{'Welcome'}</h5>
                        <form>
                       
                        <div className="form-group mt-4">
                        <label className="text-left w-100">Username</label>
                        <div className="input-group mb-3">
                           
                            <div className="input-group-prepend">
                                <span className="input-group-text input-group-icon" id="basic-addon3"><i className="fa fa-user" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" 
                            value={this.state.username}
                            onChange = {this.handleChange('username')}
                            aria-label="Username" aria-describedby="basic-addon3"/>
                        </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="form-group mt-4">
                        <label className="text-left w-100">Password</label>
                        <div className="input-group mb-3">
                       
                            <div className="input-group-prepend">
                                <span className="input-group-text input-group-icon" id="basic-addon2"><i className="fa fa-lock" aria-hidden="true"></i></span>
                            </div>
                            <input  className="form-control" placeholder="Password" 
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={this.handleChange('password')} aria-label="Password" aria-describedby="basic-addon2"/>
                        </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="form-group form-check mt-4 mb-1">
                            <label className="form-check-label login-text">
                            <input className="form-check-input" type="checkbox"/> Remember me
                            </label>
                            <Link to="/account/forget-password" className="float-right login-text text-unline-dashed ml-1">Forgot your password?</Link>
                        </div>
                        <div className="form-group mt-4 mb-1">
                        <Button variant="contained" className="btn btn-light btn-block " onClick={(event)=>{this.login()}}>
                            Login
                        </Button>
                        </div>
                        {/* <div className="form-group mt-4 mb-3">
                        <Link className="btn btn-light btn-block signup"  to="/registration">
                            Sign Up
                        </Link>
                        </div> */}
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