import React, { Component } from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

import {updateUserData} from '../../ducks/reducer'
import Green1 from '../../img/SVG/Asset8.svg'
import Grey2 from '../../img/SVG/Asset9.svg'
import Grey3 from '../../img/SVG/Asset10.svg'

class SignupStep1 extends Component {
    state = {
        box: 1,
        first_name: this.props.reducer.user.first_name,
        last_name:this.props.reducer.user.last_name,
        email:this.props.reducer.user.email,
        phone:this.props.reducer.user.phone,
        username:this.props.reducer.user.username,
    }

    componentDidMount() {
        axios.get('/api/user-data').then(res => {
            // invoke action creator to update redux state
            this.props.updateUserData(res.data)
            })
    }

    setBoxNum2 = () => {
        this.setState({
            box:2
        })
        this.updateUserData()
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

    updateUserData(){
        axios.put(`/api/updateMember/${this.props.reducer.user.member_id}`, {
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            email: this.state.email,
            phone: this.state.phone,
            username: this.state.username
        }).then(res=> {
        this.props.updateUserData(res.data[0])
        })
    }

    render() {
        console.log(this.props.reducer.user)
        return (
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
                    <h2>A little More Info</h2>
                    {/* <input type="text" placeholder='First Name' defaultValue={this.props.reducer.user.first_name} />
                    <input type="text" placeholder='Last Name' defaultValue={this.props.reducer.user.last_name} onChange={e => this.handleLastName(e.target.value)}/>
                    <input type="text" placeholder='Email' defaultValue={this.props.reducer.user.email} onChange={e => this.handleEmail(e.target.value)}/> */}
                    <input type="text" placeholder='Phone' onChange={e => this.handlePhone(e.target.value)}/>
                    <input type="text" placeholder='Username' onChange={e => this.handleUsername(e.target.value)}/>
                    <button onClick={this.setBoxNum2}>Next</button>
                </div>
                <div className='signupfooter'>
                    <h4>Take Me Back</h4>
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

export default connect(mapStateToProps, { updateUserData })(SignupStep1);