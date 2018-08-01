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
        <h1>Cool Tagline, Bro</h1>
        <button onClick={this.login}>Join</button>
      </div>
    )
  }
}
