import React, { Component } from 'react'
import './Home.css'
import Welcome from './Welcome/Welcome';
import About from './About/About';
import Membership from './Membership/Membership';
import Woodshop from './Woodshop/Woodshop';
import Contact from './Contact/Contact'

export default class Home extends Component {

    render() {
        return (
        <div className='Home'>
        <Welcome login = {this.props.login}/>
        <About/>
        <Woodshop/>
        <Membership/>
        <Contact />
        </div>
        )
    }
}
