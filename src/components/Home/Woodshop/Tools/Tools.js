import React, { Component } from 'react'
import './Tools.css'
import Background from '../../../../img/welcome_bg.jpg'

export default class Tools extends Component {
    render() {
        return (
        <div className="tools" style={{background:`url(${Background})`,backgroundSize:'cover'}}>
            <div className="tools-grad"/>
            <div className='toolsPositioner'>
                <div className="tools-content">
                    <h3>Tool Name</h3>
                    <p>Lorem ipsum dolor amet stumptown occupy kinfolk flexitarian, umami pug pok pok cornhole vexillologist kale chips.</p>
                    <button>See All Tools</button>
                </div>
            </div>
        </div>
        )
    }
}
