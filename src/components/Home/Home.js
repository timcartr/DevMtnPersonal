import React, { Component } from 'react'
import './Home.css'
import Welcome from '../Welcome/Welcome';
import About from '../About/About';
import Membership from '../Membership/Membership';

export default class Home extends Component {
    render() {
        return (
        <div className='Home'>
        <Welcome/>
        <About/>
        <Membership/>
        </div>
        )
    }
}
