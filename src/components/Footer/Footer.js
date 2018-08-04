import React, { Component } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
    render() {
        return (
        <div className='footer'>
        <div className='footer-flex'>
            <a href=""><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
            <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div className='footer-flex'>
            <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        </div>
            <p className="copyright">© 2018 Wasatch Woodworking</p>
        </div>
        )
    }
}
