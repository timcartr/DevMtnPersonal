import React, { Component } from 'react'

// CSS
import './App.css';

// Route Components
import routes from './routes'
import MenusSwitcher from './components/Menus/MenusSwitcher';
import Footer from './components/Footer/Footer';
import {HashRouter} from 'react-router-dom'

// Modals
import ModalRoot from './components/Modals/containers/ModalRoot'

class App extends Component {

  login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env

    let url = `${window.location.origin}/auth/callback`

    window.location = 
    `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
  }
  
  render() {
    return (
      <HashRouter>
          <div className="App" style={{height:'100%'}}>
              <MenusSwitcher login={this.login}/>
              {routes}
              <ModalRoot />
              <Footer/>
          </div>
      </HashRouter>
    );
  }
}

export default (App)