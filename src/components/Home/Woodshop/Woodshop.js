import React, { Component } from 'react'
import './Woodshop.css'
import Tools from './Tools/Tools';


export default class Woodshop extends Component {
    render() {
        return (
        <div className="woodshop">
            {/* <h2>The Shop</h2>
            <p>Lorem ipsum dolor amet stumptown occupy kinfolk flexitarian, umami pug pok pok cornhole vexillologist kale chips. Poutine ethical hot.</p>
            <div className="Woodshop-spacer" /> */}
            <Tools/>
            {/* {mappedTools} */}
        </div>
        )
    }
}
