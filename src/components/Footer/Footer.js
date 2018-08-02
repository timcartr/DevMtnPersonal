import React, { Component } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
    render() {
        return (
        <div className='Footer'>
        <p>About Us</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <FontAwesomeIcon icon={faFacebookSquare} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <p>© 2018 Wasatch Woodworking</p>

        </div>
        )
    }
}
