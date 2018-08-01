import React, { Component } from 'react'
import './App.css';
// import './reset.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Member_Profile from './components/Member_Profile/Member_Profile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Members_Manager from './components/Admin/Members_Manager/Members_Manager';
import AdminMenu from './components/Menus/Admin_Menu/Admin_Menu';
import UserMenu from './components/Menus/User_Menu/User_Menu';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    let { user } = this.props
    return (
      <div className="App">
        {
          user.username ? (
            user.permissions === 'admin' ? <AdminMenu/> : <UserMenu/>
          ) : <Header/>
        }
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path={`/member/${this.props.name}`} component={Member_Profile} />
            <Route exact path='/admin' component={Dashboard} />
            <Route path={`/admin/members`} component={Members_Manager} />
          </Switch>
        </HashRouter>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(App);
