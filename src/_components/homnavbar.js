import React from 'react';
//import { userActions } from '../_actions';
import { connect } from 'react-redux';
import Logo from '../assets/img/cls-logo-white.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap';
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
class HomeNavbar extends React.Component {

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
            <div className="col-md-3 text-right" >
            <Nav className="" navbar>
            {/* <NavItem >
              <NavLink href="/">
              <NavbarText>Sign In</NavbarText>
              </NavLink>
            </NavItem> */}
            
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

export default connect(mapStateToProps)(HomeNavbar);