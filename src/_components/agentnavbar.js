import React from 'react';
//import { userActions } from '../_actions';
import { connect } from 'react-redux';
import userLogo from '../assets/img/user.png'
import Logo from '../assets/img/cls-logo-white.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav, 
 NavItem,
} from 'reactstrap';
import {
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { userActions } from '../_actions';
import { Link } from 'react-router-dom';
// const links = [
//   { href: '/home', className:"left-border", text: 'Support Center Home' },
//   { href: '/opennewticket', text: 'Open a New Ticket' },
//   { href: '#about', text: 'Check Ticket Status' }
// ];

// const createNavItem = ({ href, text, className, i}) => (
//   <NavItem key={href}>
//     <NavLink href={href} className={className}>{text}</NavLink>
//   </NavItem>
// );
class Agentnavbar extends React.Component {

    constructor(props){
        super(props);
        this.state={
            anchor: 'left',
            dropDownOpen : false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
      this.setState({
          dropDownOpen : !this.state.dropDownOpen
      });
  }
  logout = event =>{
    const { dispatch } = this.props;
    console.log(this.props);
    console.log(localStorage.getItem('auth'));
    dispatch(userActions.logout());
} 
    toggleNav() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
        //const { classes } = this.props;
       // const { anchor } = this.state;
       var getUsername = localStorage.getItem('Username');
        return(
          <div>
            <Navbar className="navbar navbar-expand-md navbar-dark bg-dark fixed-top mb">
          <NavbarBrand to="/home" className="col-3 text-left"> <img src={Logo} alt="Cls"  className="nav-logo"/> </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isOpen} navbar className="col-9">
            <Nav className="col-md-9 homenavbar" navbar>
           
            <NavItem>
              <NavLink to="/agenthome" className= 'nav-link' >Add Form</NavLink>
            </NavItem>
             
            <NavItem>
              <NavLink to="/formview" className={'nav-link'} >View Form</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/supportcenter" className={this.props.activeSupport +'left-border'}>Support Center Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/opennewticket" className={this.props.activeTicket}>Open a New Ticket</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ticketstatus" className={this.props.activeTickitStatus}>Check Ticket Status</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/viewticketthread" className={this.props.activeTickitThread}>View Ticket Thread</NavLink>
            </NavItem> */}
            </Nav>
            <div className="col-md-3 pl-0" >
            <Nav className="" navbar>
            <NavItem >
              <NavLink >
              <i className="fa fa-bell nav-icon" aria-hidden="true"></i>
              </NavLink>
            </NavItem>
            {/* <NavItem >
              <NavLink >
              <i className="fa fa-cog nav-icon" aria-hidden="true"></i>
              </NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               <span><img src={userLogo} alt="userIcon" className="user-icon"/></span> {getUsername}
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>
              <Link  to="/registration">  
                            Registration
                        </Link>
                        </DropdownItem>
               
                <DropdownItem>
                  <Link to="/resetpassword">
                  Change Password
                  </Link>
                </DropdownItem>
                <DropdownItem onClick={(event)=>{this.logout()}}>
                 Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
           </Nav>
            </div>
          </Collapse>
        </Navbar>
        
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

export default connect(mapStateToProps)(Agentnavbar);