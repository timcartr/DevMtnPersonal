import React, { Component } from 'react'
import './User_Menu.css'

export default class User_Menu extends Component {
    render() {
        return (
        <div className='User_Menu'>
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
