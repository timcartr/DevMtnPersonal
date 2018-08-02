import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <img src="" alt="Wasatch Woodworking Logo"/>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Membership</li>
                        <li>Tour</li>
                    </ul>
                    <button onClick={this.props.login}>Login</button>
                </nav>
            </div>
        )
    }
}
