import React, { Component } from 'react'
import './SignUp.css'

export default class SignUp extends Component {
    render() {
        return (
        <div className='signUp'>
            <h1>Please give us some more Info</h1>
            <input type="text" placeholder='Username'/>
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Phone'/>
            <input type="text" placeholder='Phone'/>
        </div>
        )
    }
}
