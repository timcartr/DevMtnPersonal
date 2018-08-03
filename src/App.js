import React, { Component } from 'react'
import './App.css';
import './reset.css';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Member_Profile from './components/Member_Profile/Member_Profile';
import Admin_Dashboard from './components/Admin/Admin_Dashboard/Admin_Dashboard';
import Members_Manager from './components/Admin/Members_Manager/Members_Manager';
import AdminMenu from './components/Menus/Admin_Menu/Admin_Menu';
import UserMenu from './components/Menus/User_Menu/User_Menu';
import { connect } from 'react-redux';
import Toolbar from './components/Menus/Responsive_Header/Toolbar/Toolbar'
import SideDrawer from './components/Menus/Responsive_Header/SideDrawer/SideDrawer'
import Backdrop from './components/Menus/Responsive_Header/Backdrop/Backdrop'

class App extends Component {
  state= {
    sideDrawerOpen: false,
    isTop: true,
    width: 0,
    height: 0
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < window.innerHeight-50;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    })
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState)=> {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false})
  }

  login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env

    let url = `${window.location.origin}/auth/callback`

    window.location = 
    `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_url=${url}&response_type=code`
  }
  

  render() {
    console.log(this.state.height)
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    let { user } = this.props
    return (
      <div className="App" style={{height:'100%'}}>
        {
          user.username ? (
            user.permissions === 'admin' ? <AdminMenu/> : <UserMenu/>
          ) : (
            <div>
            <Toolbar 
              login = {this.login} 
              drawerClickHandler={this.drawerToggleClickHandler}
              scroll = {this.state.isTop}/>
            <SideDrawer 
              show={this.state.sideDrawerOpen}/>
            {backdrop}
            </div>
          )
        }
          <Switch>
            <Route exact path='/' component={Home} login = {this.login}/>
            <Route path={`/member/${this.props.name}`} component={Member_Profile} />
            <Route exact path='/admin' component={Admin_Dashboard} />
            <Route path={`/admin/members`} component={Members_Manager} />
          </Switch>
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
