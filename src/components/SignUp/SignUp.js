import React, { Component } from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

import {updateUserData} from '../../ducks/reducer'
import Green1 from '../../img/SVG/Asset8.svg'
import Grey2 from '../../img/SVG/Asset9.svg'
import Grey3 from '../../img/SVG/Asset10.svg'
import Green2 from '../../img/SVG/Asset11.svg'
import Green3 from '../../img/SVG/Asset12.svg'
import GreenCheck from '../../img/SVG/Asset13.svg'

class SignUp extends Component {
    state = {
        box: 1,
        first_name: '',
        last_name:'',
        email:'',
        phone:'',
        username:'',
        membership_level:''
    }

    setBoxNum1 = () => {
        this.setState({
            box:1
        })
        this.save()
    }
    setBoxNum2 = () => {
        this.setState({
            box:2
        })
        this.save()
    }
    setBoxNum3 = () => {
        this.setState({
            box:3
        })
        this.save()
    }

    handleFirstName(val){
        this.setState({
            first_name: val
        }) 
    }

    handleLastName(val){
        this.setState({
            last_name: val
        }) 
    }

    handleEmail(val){
        this.setState({
            email: val
        }) 
    }

    handlePhone(val){
        this.setState({
            phone: val
        }) 
    }

    handleUsername(val){
        this.setState({
            username: val
        }) 
    }

    handleMembershipLevel(val){
        this.setState({
            membership_level: val
        }) 
    }

    save(){
        axios.put(`/api/updateMember/${this.state.member_id}`, this.state).then(res=> {
        this.props.updateUserData(res.data[0])
        })
    }

    render() {
        console.log(this.props)
        return (
        <div className='signUpBG'>

        {/* Box 1 */}
            <div className={this.state.box === 1 ? 'signup' : 'signup off'}>
                <div className='steps'>
                    <div className='stepsflex'>
                        <img src={Green1} alt=""/>
                        <p>Member Details</p>
                    </div>
                    <div className='stepsflex'>
                        <img src={Grey2} alt=""/>
                        <p>Membership</p>
                    </div>
                    <div className='stepsflex'>
                        <img src={Grey3} alt=""/>
                        <p>Confirmation</p>
                    </div>
                    <hr/>
                </div>
                <div className='signupinput'>
                    <input type="text" placeholder='First Name' value={this.props.reducer.user.first_name}/>
                    <input type="text" placeholder='Last Name'/>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='Phone'/>
                    <input type="text" placeholder='Username'/>
                    <button onClick={this.setBoxNum2}>Next</button>
                </div>
                <div className='signupfooter'>
                    <h4>Take Me Back</h4>
                    <hr/>
                    <p><Link to='/'>Home</Link> | <Link to='/'>Contact</Link></p>
                </div>
            </div>

            {/* Box 2 */}
            <div className={this.state.box === 2 ? 'signup' : 'signup off'}>
                <div className='steps'>
                    <div className='stepsflex'>
                        <img src={GreenCheck} alt=""/>
                        <p>Member Details</p>
                    </div>
                    <div className='stepsflex'>
                        <img src={Green2} alt=""/>
                        <p>Membership</p>
                    </div>
                    <div className='stepsflex'>
                        <img src={Grey3} alt=""/>
                        <p>Confirmation</p>
                    </div>
                    <hr/>
                </div>
                <div className='signupinput'>
                    <h2 id="selectplantitle">Select a Plan</h2>
                    <button id='membershipbutton'>
                        <div className='insidemembershipbutton'>
                            <p id='monthlycost'>$175</p>
                            <p id='smallmonth'>Month</p>
                        </div>
                        Unlimited Access
                    </button>
                    <button id='membershipbutton'>
                        <div className='insidemembershipbutton'>
                            <p id='monthlycost'>$150</p>
                            <p id='smallmonth'>Month</p>
                        </div>
                        VIP Access
                    </button>
                    <button id='membershipbutton'>
                        <div className='insidemembershipbutton'>
                            <p id='monthlycost'>$125</p>
                            <p id='smallmonth'>Month</p>
                        </div>
                        Standard Access
                    </button>
                    <button onClick={this.setBoxNum3} id='membershipselectnextbutton'>Next</button>
                </div>
                <div className='signupfooter'>
                    <h4 onClick={this.setBoxNum1}>Take Me Back</h4>
                    <hr/>
                    <p><Link to='/'>Home</Link> | <Link to='/'>Contact</Link></p>
                </div>
            </div>

            {/* Box 3 */}
            <div className={this.state.box === 3 ? 'signup' : 'signup off'}>
                <div className='steps'>
                    <div className='stepsflex'>
                        <img src={GreenCheck} alt=""/>
                        <p>Member Details</p>
                    </div>
                    <div className='stepsflex'>
                        <img src={GreenCheck} alt=""/>
                        <p>Membership</p>
                    </div>
                    <div className='stepsflex'>
                        <img src={Green3} alt=""/>
                        <p>Confirmation</p>
                    </div>
                    <hr/>
                </div>
                <div className='signupinput'>
                    <h2>Unlimited Membership</h2>
                    <h3>$175 /mo.</h3>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='Card Number'/>
                    <input type="text" placeholder='MM/YY'/>
                    <input type="text" placeholder='CVC'/>
                    <button id='paybutton'>Pay $175.00</button>
                </div>
                <div className='signupfooter'>
                    <h4 onClick={this.setBoxNum2}>Take Me Back</h4>
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