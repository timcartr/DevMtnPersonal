import React, { Component } from 'react'
import './MemberProfile.css'
import { connect } from 'react-redux';
import { showModal } from '../Modals/actions/modal';
import { MODAL_TYPE_EDITPROFILE, MODAL_TYPE_UPGRADEMEMBERSHIP } from '../Modals/constants/ModalTypes';

class Member_Profile extends Component {

    showUpdateProfile = () => {
        this.props.showModal(MODAL_TYPE_EDITPROFILE, {
        });
        };

    showUpgradeMembership = () => {
        this.props.showModal(MODAL_TYPE_UPGRADEMEMBERSHIP, {
        });
        };
    
    render() {
        let Background = 'http://www.comingsoon.net/assets/uploads/2017/04/PrattBar640.jpg'
        return (
            <div className='memberProfile'>
                <div className='bgOverflow'>
                    <div className='memberProfileBG' style={{backgroundImage:`url(${Background})`}}/>
                </div>
                <div className='memberProfileTop'>
                    <h2>Peter Quill</h2>
                    <h3>Monthly Membership</h3>
                    <div>
                        <div className='profileCircle' style={{backgroundImage:`url(${Background})`}}/>
                    </div>
                </div>
                <div className='memberLower'>
                    <p><span>Member Since:</span> July 24, 2018</p>
                    <p><span>Membership Expires:</span> August 24, 2018</p>
                    <p><span>Certifications:</span> Safety, Advanced Safety</p>
                    <p><span>Email:</span> email@example.com</p>
                    <p><span>Phone:</span> 801.888.9898</p>
                </div>
                <div className='memberButtons'>
                    <button onClick={this.showUpdateProfile}>Edit Profile</button>
                    <button onClick={this.showUpgradeMembership}>Upgrade Membership</button>
                    <p>To Cancel, <a href="/cancel">Click Here.</a></p>
                </div>
            </div>
        )
    }
}

export default connect(null, { showModal })(Member_Profile)