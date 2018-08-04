import React, { Component } from 'react'
import './Plans.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToolbox } from '@fortawesome/free-solid-svg-icons'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { faUserClock } from '@fortawesome/free-solid-svg-icons'

export default class Plans extends Component {
    render() {
        return (
        <div className='plans'>
            <h3>Unlimited</h3>
            <p>Lorem ipsum dolor amet stumptown occupy kinfolk flexitarian, umami pug pok pok cornhole vexillologist kale.</p>
            <ul>
                <li className="fontAwesome">
                    <FontAwesomeIcon icon={faWrench}/> Full Shop Access
                </li>
                <li className="fontAwesome">
                    <FontAwesomeIcon icon={faToolbox}/> Dedicated 4x8 workbench
                </li>
                <li className="fontAwesome">
                    <FontAwesomeIcon icon={faUserClock}/> 24/7 Access to Shop
                </li>
            </ul>
            <p><span>$150</span>/mo</p>
            <button>Sign Up</button>
        </div>
        )
    }
}
