import React, { Component } from 'react'
import Welcome from './Welcome/Welcome';
import About from './About/About';
import Membership from './Membership/Membership';
import Woodshop from './Woodshop/Woodshop';
import Contact from './Contact/Contact'
import './Home.css'

export default class Home extends Component {

    render() {
        return (
        <div className='home'>
        <Welcome login={this.props.login}/>
        <About/>
        <Woodshop/>
        <Membership/>
        <Contact />
        </div>
        )
    }
}
