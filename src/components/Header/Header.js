import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <h1>Logo</h1>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                    <button>Login</button>
                </nav>
            </div>
        )
    }
}
