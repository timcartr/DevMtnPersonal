import React, { Component } from 'react'
import './Tools.css'

export default class Tools extends Component {
    render() {
        return (
        <div>
            <img src="" alt={this.props.tool}/>
            <h3>Tool Name</h3>
            <p>Lorem ipsum dolor amet stumptown occupy kinfolk flexitarian, umami pug pok pok cornhole vexillologist kale chips.</p>
            <button>See All Tools</button>
        </div>
        )
    }
}
