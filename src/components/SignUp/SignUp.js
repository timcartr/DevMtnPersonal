import React, { Component } from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

import {updateUserData} from '../../ducks/reducer'
import Green1 from '../../img/SVG/Asset8.svg'
import Grey2 from '../../img/SVG/Asset9.svg'
import Grey3 from '../../img/SVG/Asset10.svg'
import GreenCheck from '../../img/SVG/Asset13.svg'
import Confirmation from '../../img/SVG/Asset14.svg'
import SignUpPayment from './SignUpPayment';

class SignUp extends Component {
    state = {
        box: 1,
        member_id:this.props.reducer.user.member_id,
        membershipSelection:'Unlimited Access',
        cost:'175',
        start_date: '',
        end_date: '',
        member_since: ''
    }

    componentDidMount() {
        axios.get('/api/user-data').then(res => {
            // invoke action creator to update redux state
            this.props.updateUserData(res.data)
            this.setState({
                member_id: res.data.member_id
            })
            })
        this.handleDate()
    }

    handleDate = () => {
        let today = new Date()
        let start_date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
        let thirtyDays = `${today.getFullYear()}-${today.getMonth()+2}-${today.getDate()}`
    
        this.setState({
            start_date: start_date,
            end_date: thirtyDays,
            member_since: start_date
        })
        }

    updateMembershipData(){
        axios.put(`/api/updateMemberSince/${this.props.reducer.user.member_id}`, {
            membershipSelection: this.state.membershipSelection,
            cost: this.state.cost,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            member_since: this.state.member_since
        }).then(res=> {
        this.props.updateUserData(res.data[0])
        })
    }

    setBoxNum1 = () => {
        this.setState({
            box:1
        })
    }

    setBoxNum2 = () => {
        this.setState({
            box:2
        })
    }

    setBoxNum3 = () => {
        this.setState({
            box:3
        })
    }

    handleMembershipLevel(membership, cost){
        this.setState({
            membership_level: membership,
            cost: cost
        }) 
    }

    render() {
        console.log(this.state)
        return (
        <div className='signUpBG'>
            {/* Box 1 */}
            <div className={this.state.box === 1 ? 'signup' : 'signup off'}>
                <div className='steps'>
                    <div className='stepsflex'>
                        <img src={Green1} alt=""/>
                        <p>Membership</p>
                    </div>
                    <div className='stepsflex'>
                        <img src={Grey2} alt=""/>
                        <p>Payment</p>
                    </div>
                    <div className='stepsflex'>
                        <img src={Grey3} alt=""/>
                        <p>Confirmation</p>
                    </div>
                    <hr/>
                </div>
                <div className='signupinput'>
                    <h2 id="selectplantitle">Select a Plan</h2>
                    <button id='membershipbutton' onClick={() => this.handleMembershipLevel('Unlimited Membership','175')}>
                        <div className='insidemembershipbutton'>
                            <p id='monthlycost'>$175</p>
                            <p id='smallmonth'>Month</p>
                        </div>
                        Unlimited Access
                    </button>
                    <button id='membershipbutton' onClick={() => this.handleMembershipLevel('Vip Access','150')}>
                        <div className='insidemembershipbutton'>
                            <p id='monthlycost'>$150</p>
                            <p id='smallmonth'>Month</p>
                        </div>
                        VIP Access
                    </button>
                    <button id='membershipbutton' onClick={() => this.handleMembershipLevel('Standard Access','125')}>
                        <div className='insidemembershipbutton'>
                            <p id='monthlycost'>$125</p>
                            <p id='smallmonth'>Month</p>
                        </div>
                        Standard Access
                    </button>
                    <button onClick={this.setBoxNum2} id='membershipselectnextbutton'>Next</button>
                </div>
                <div className='signupfooter'>
                    <Link to='/'><h4>Nevermind</h4></Link>
                    <hr/>
                    <p><Link to='/'>Home</Link> | <Link to='/'>Contact</Link></p>
                </div>
            </div>

            {/* Box 2 */}
            <div className={this.state.box === 2 ? 'signup' : 'signup off'}>
                <SignUpPayment 
                    membershiplevel = {this.state.membership_level}
                    cost = {this.state.cost}
                    setBoxNum1 = {this.setBoxNum1}
                    setBoxNum2 = {this.setBoxNum2}
                    setBoxNum3 = {this.setBoxNum3}
                />
            </div>

            {/* Box 3 */}
            <div className={this.state.box === 3 ? 'signup' : 'signup off'}>
                <div className='steps'>
                    <div className='stepsflex'>
                        <img src={GreenCheck} alt=""/>
                        <p>Membership</p>
                    </div>
                    <div className='stepsflex'>
                        <img src={GreenCheck} alt=""/>
                        <p>Payment</p>
                    </div>
                    <div className='stepsflex'>
                        <img src={GreenCheck} alt=""/>
                        <p>Confirmation</p>
                    </div>
                    <hr/>
                </div>
                <div className='signupinput'>
                    <h2>Welcome.</h2>
                    <h3 id='paymentSuccessful'>Your Payment Was Successful</h3>
                    <img src={Confirmation} alt="" className='confirmation'/>
                    <Link to={`/member/${this.props.reducer.user.member_id}`}><button id='gotoprofilebutton' onClick={() => this.updateMembershipData()}>Go to your Profile</button></Link>
                </div>
                <div className='signupfooter'>
                    <Link to={`/member/${this.props.reducer.user.member_id}`}><h4 onClick={() => this.updateMembershipData()}>Visit Your Profile</h4></Link>
                    <hr/>
                    <p><Link to='/'>Home</Link> | <Link to='/'>Contact</Link></p>
                </div>
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