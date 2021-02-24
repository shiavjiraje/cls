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
  Dropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
const links = [
  { href: '/home', className:"left-border", text: 'Teamwork CRM' },
  { href: '/vendor', text: 'Project Management' },
  { href: '#about', text: 'Document Management' },
  { href: '#cata', text: 'Customer Support' }
];

const createNavItem = ({ href, text, className, i}) => (
  <NavItem key={href}>
    <NavLink href={href} className={className}>{text}</NavLink>
  </NavItem>
);
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
              {links.map(createNavItem)}
            </Nav>
            <div className="col-md-3 text-right" >
            <Nav className="" navbar>
            <NavItem >
              <NavLink onClick={(event)=>{this.logout()}}>
              <NavbarText>Name here</NavbarText>
              </NavLink>
            </NavItem>
            
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