import React from 'react';
import { userActions } from '../_actions';
import { connect } from 'react-redux';
import Logo from '../assets/img/cls-logo-white.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import userLogo from '../assets/img/user.png'
// const links = [
//   { href: '/home', className:"left-border", text: 'Teamwork CRM' },
//   { href: '/vendor', text: 'Project Management' },
//   { href: '#about', text: 'Document Management' },
//   { href: '#cata', text: 'Customer Support' }
// ];

// const createNavItem = ({ href, text, className, i}) => (
//   <NavItem key={href}>
//     <NavLink href={href} className={className}>{text}</NavLink>
//   </NavItem>
// );
class Navigation extends React.Component {

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

        return(
          <div>
            <Navbar className="navbar navbar-expand-md navbar-dark bg-dark fixed-top mb">
          <NavbarBrand to="/home" className="col-3 text-left"> <img src={Logo} alt="Cls"  className="nav-logo"/> </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isOpen} navbar className="col-9">
            <Nav className="col-md-9 homenavbar" navbar>
            <NavItem>
              <NavLink href="https://www.teamwork.com/launchpad/login?redirect_uri=http://localhost:3000/crm&client_id=4f1c06ed36fa06c273b0d1ae4a979d013d901c55" target="https://www.teamwork.com/launchpad/login?redirect_uri=http://localhost:3000/crm&client_id=4f1c06ed36fa06c273b0d1ae4a979d013d901c55" className={this.props.activeCrm +'left-border'}>Teamwork CRM</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/home" className="">Project Management</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/home" className="">Document Management</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/supportcenter" className="">Customer Support</NavLink>
            </NavItem>
            </Nav>
            <div className="col-md-3 pl-0" >
            <Nav className="" navbar>
            <NavItem >
              <NavLink >
              <i className="fa fa-bell nav-icon" aria-hidden="true"></i>
              </NavLink>
            </NavItem>
            <NavItem >
              <NavLink >
              <i className="fa fa-cog nav-icon" aria-hidden="true"></i>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               <span><img src={userLogo} alt="userIcon" className="user-icon"/></span> Name Here
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={(event)=>{this.logout()}}>
                 Logout
                </DropdownItem>
                <DropdownItem>
                  Profile
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

export default connect(mapStateToProps)(Navigation);