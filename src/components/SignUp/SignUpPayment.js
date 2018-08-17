import React, { Component } from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'
// import axios from 'axios'
import {connect} from 'react-redux'
import {Elements} from 'react-stripe-elements'

import {updateUserData} from '../../ducks/reducer'
import Grey3 from '../../img/SVG/Asset10.svg'
import Green2 from '../../img/SVG/Asset11.svg'
import GreenCheck from '../../img/SVG/Asset13.svg'
import InjectedCheckoutForm from '../Stripe/CheckoutForm'

class SignUp extends Component {

    render() {
        return (
            <div className='signup'>
                <div className='steps'>
                    <div className='stepsflex clickable' onClick={this.props.setBoxNum1}>
                        <img src={GreenCheck} alt=""/>
                        <p>Membership</p>
                    </div>
                    <div className='stepsflex' >
                        <img src={Green2} alt=""/>
                        <p>Payment</p>
                    </div>
                    <div className='stepsflex' >
                        <img src={Grey3} alt=""/>
                        <p>Confirmation</p>
                    </div>
                    <hr/>
                </div>
                <div className='signupinput'>
                    <h2>{this.props.membershiplevel}</h2>
                    <h3>${this.props.cost} /mo.</h3>
                    <Elements>
                        <InjectedCheckoutForm 
                            setBoxNum3 = {this.props.setBoxNum3} 
                            cost = {this.props.cost}/>
                    </Elements>
                </div>
                <div className='signupfooter'>
                    <h4 onClick={this.props.setBoxNum1}>Back</h4>
                    <hr/>
                    <p><Link to='/'>Home</Link> | <Link to='/'>Contact</Link></p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reducer: state.reducer
    }
}

export default connect(mapStateToProps, { updateUserData })(SignUp);