import React, { Component } from 'react'

// CSS
import './App.css';

// Route Components
import Routes from './routes'
import MenusSwitcher from './components/Menus/MenusSwitcher';
import Footer from './components/Footer/Footer';

// Modals
import ModalRoot from './components/Modals/containers/ModalRoot'

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
          <Routes/>
          <ModalRoot />
          <Footer/>
      </div>
    );
  }
}
