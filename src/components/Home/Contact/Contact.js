import React, { Component } from 'react'
import './Contact.css'
import map from '../../../img/map.jpg'

export default class Contact extends Component {
    render() {
        return (
        <div className="contact">
            <div className="contact-left">
                <h2>Contact Us</h2>
                <h4>Lorem ipsum dolor amet stumptown</h4>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="email@example.com"/>
                <input type="text" placeholder="Message"/>
                <button>Send It</button>
                <div className='contact-info'>
                    <div>
                        <p>Address</p>
                        <address>
                            100 N 200 W <br/>
                            Lehi, UT<br/>
                            84043
                        </address>
                    </div>
                    <div>
                        <p>Phone</p>
                        <a href="tel:801-888-8888">801.888.8989</a>
                        <p>Email</p>
                        <a href="mailto:info@email.com">info@email.com</a>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <img src={map} alt=""/>
            </div>
        </div>
        )
    }
}
