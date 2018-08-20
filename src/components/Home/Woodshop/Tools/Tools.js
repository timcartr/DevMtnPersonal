import React, { Component } from 'react'
import './Tools.css'
import Jointer from '../../../../img/shutterstock_382064143.jpg'
// import ToolsCarousel from './ToolsCarousel'
import dots from '../../../../img/SVG/dots.svg'

export default class Tools extends Component {
    render() {
        return (
        <div className="tools" style={{background:`url(${Jointer})`,backgroundSize:'cover'}}>
            <div className="tools-grad"/>
            <div className='toolsPositioner'>
                <div className="tools-content">
                    <h2>6” Jointer w/ helical head</h2>
                    <p>Lorem ipsum dolor amet stumptown occupy kinfolk flexitarian, umami pug pok pok cornhole vexillologist kale chips.</p>
                    <img src={dots} alt=""/>
                </div>
            </div>
        </div>
        // <ToolsCarousel/>
        )
    }
}
