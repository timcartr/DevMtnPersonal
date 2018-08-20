import React, { Component } from 'react'
import './About.css'
import logo from '../../../img/SVG/logo.svg'

export default class About extends Component {
    render() {
        return (
            <div className='about'>
                <img src={logo} alt="Wasatch Woodworking Logo"/>
                <h2>About</h2>
                <p>Lorem ipsum dolor amet stumptown occupy kinfolk flexitarian, umami pug pok pok cornhole vexillologist kale chips. Poutine ethical viral cred, brunch af hot chicken. Bicycle rights health goth forage, food truck VHS plaid cray small batch tofu. 
                </p>
                <button>Learn More</button>
            </div>
        )
    }
}
