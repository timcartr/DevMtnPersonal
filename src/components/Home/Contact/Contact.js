import React, { Component } from 'react'
import './Contact.css'
import map from '../../../img/map.jpg'

export default class Contact extends Component {
    render() {
        return (
        <div className="Contact">
            <div className="Contact-Left">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor amet stumptown</p>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="email@example.com"/>
                <input type="text" placeholder="Message"/>
                <button>Send It</button>
                <p>Address</p>
                <address>
                    100 N 200 W <br/>
                    Lehi, UT<br/>
                    84043
                </address>
                <p>Phone</p>
                <a href="tel:801-888-8888">801.888.8989</a>
                <p>Email</p>
                <a href="mailto:info@email.com">info@email.com</a>
            </div>
            <div className="Contact-Right">
                <img src={map} alt=""/>
            </div>
        </div>
        )
    }
}
