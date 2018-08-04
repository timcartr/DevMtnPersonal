import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

// CSS
import './App.css';

// Route Components
import Home from './components/Home/Home';
import Member_Profile from './components/Member_Profile/Member_Profile';
import Admin_Dashboard from './components/Admin/Admin_Dashboard/Admin_Dashboard';
import Members_Manager from './components/Admin/Members_Manager/Members_Manager';
import Footer from './components/Footer/Footer';
import MenusSwitcher from './components/Menus/MenusSwitcher';

export default class App extends Component {

  login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env

    let url = `${window.location.origin}/auth/callback`

    window.location = 
    `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_url=${url}&response_type=code`
  }
  

  render() {
    return (
      <div className="App" style={{height:'100%'}}>
          <MenusSwitcher login={this.login}/>
          <Switch>
            <Route exact path='/' component={Home} login = {this.login}/>
            <Route path={`/member/${this.props.name}`} component={Member_Profile} />
            <Route exact path='/admin' component={Admin_Dashboard} />
            <Route path={`/admin/members`} component={Members_Manager} />
            {/* <Route path={`/checkout`} component={CheckoutForm} /> */}
          </Switch>
        <Footer/>
      </div>
    );
  }
}
