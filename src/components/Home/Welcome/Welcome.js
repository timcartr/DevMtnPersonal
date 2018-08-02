import React, { Component } from 'react'
import './Welcome.css'

export default class Welcome extends Component {

  render() {
    return (
      <div className='Welcome'>
        <h1>Community Craftsmanship</h1>
        <h2>while building the community</h2>
        <button onClick={this.props.login}>Join</button>
      </div>
    )
  }
}
