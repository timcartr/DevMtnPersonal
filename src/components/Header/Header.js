import React, { Component } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default class Header extends Component {
    constructor(){
        super()

        this.state = {
            mobileMenu: ''
        }
    }

    toggleMenu(){
        if (this.state.mobileMenu === 'MobileNavclosed'){
            this.setState({
                mobileMenu: 'MobileNavOpen'
            })
        } else {
            this.setState({
                mobileMenu: 'MobileNavClosed'
            })
        }
    }

    render() {
        // console.log(this.state.mobileMenu)
        return (
            <div className='Header'>
                <img src="" alt="Wasatch Woodworking Logo"/>
                <div onClick={() => this.toggleMenu()}><FontAwesomeIcon icon={faBars} className="FontAwesome" /></div>
                <nav className={this.state.mobileMenu}>
                    <ul>
                        <li>Home</li>
                        <li>Membership</li>
                        <li>Tour</li>
                    </ul>
                    <button onClick={this.props.login}>Login</button>
                </nav>
            </div>
        )
    }
}
