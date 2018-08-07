import React, { Component } from 'react'
import './Welcome.css'

export default class Welcome extends Component {
  login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env

    let url = `${window.location.origin}/auth/callback`

    window.location = 
    `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_url=${url}&response_type=code`
  }
  render() {
    return (
      <div className='Welcome'>
        <div className='WelcomeGradient'/>
        <div className='WelcomePositioner'>
          <div className='WelcomeContent'>
            <h1>Community Craftsmanship</h1>
            <h2>while building the community</h2>
            <button onClick={this.login}>Join</button>
          </div>
        </div>
      </div>
    )
  }
}
