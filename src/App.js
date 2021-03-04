import React from 'react';
import './App.css';
import { Router, Switch, Route} from 'react-router-dom';
//import { Vendor } from './vendors/vendor.component';
//import { AddVendor } from './vendors/addvendor.component'
import  { Login } from './login/';
import { Home } from './home/';
import { history } from './_helpers';
//import { PrivateRoute } from './_components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/custom.css'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import OpenNewTicket from './opennewticket/opennewticket';
import SupportCenterHome from './supportcenterhome/supportcenterhome';
import CheckTicketStatus from './checkticketstatus/checkticketstatus';
import ViewTicketThread from './viewticketthread/viewticketthread';
import ViewSingleTicket from './viewsingleticket/viewsingleticket';
function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('auth')  ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
    return (
      <div className="App">
        <Router history={history}>
          <div>            
              <Switch>
                <PrivateRoute exact path='/home' component={Home} />
                {/* <PrivateRoute exact path='/vendor' component={Vendor} />
                <PrivateRoute exact path='/add-vendor' component={AddVendor} />
                <PrivateRoute exact path='/edit-vendor/:id' component={AddVendor} /> */}
                <Route exact path='/' component={Login} />
                <Route exact path='/opennewticket' component={OpenNewTicket} />
                <Route exact path='/supportcenter' component={SupportCenterHome} />
                <Route exact path='/ticketstatus' component={CheckTicketStatus} />
                <Route exact path='/viewticketthread' component={ViewTicketThread} />
                <Route exact path='/viewsingleticket' component={ViewSingleTicket} />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }

const mapStateToProps = (state) =>{
  const { loggingIn } = state.authentication;
  return {
      loggingIn
  };
}

export default connect(mapStateToProps)(App);
