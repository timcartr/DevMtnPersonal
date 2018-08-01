import React, { Component } from 'react'
import './Admin_Menu.css'

export default class Admin_Menu extends Component {
    render() {
        return (
        <div className='Admin_Menu'>
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
                <button>Log Out</button>
            </nav>
        </div>
        )
    }
}
