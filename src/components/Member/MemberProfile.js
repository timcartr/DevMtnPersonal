import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';

import './MemberProfile.css'

import { updateUserData } from '../../ducks/reducer'
import { showModal } from '../Modals/actions/modal';
import { MODAL_TYPE_EDITPROFILE, MODAL_TYPE_UPGRADEMEMBERSHIP } from '../Modals/constants/ModalTypes';

class Member_Profile extends Component {

    componentDidMount() {
        axios.get('/api/user-data').then(res => {
            // invoke action creator to update redux state
            this.props.updateUserData(res.data)
            })
    }

    showUpdateProfile = () => {
        this.props.showModal(MODAL_TYPE_EDITPROFILE, {
        });
        };

    showUpgradeMembership = () => {
        this.props.showModal(MODAL_TYPE_UPGRADEMEMBERSHIP, {
        });
        };
    
    render() {
        const member = this.props.reducer.user
        let startDate = new Date(member.start_date);
        let endDate = new Date(member.end_date);
        return (
            <div className='memberProfile'>
                <div className='bgOverflow'>
                    <div className='memberProfileBG' style={{backgroundImage:`url(${member.profile_pic})`}}/>
                </div>
                <div className='memberProfileTop'>
                    <h2>{member.first_name} {member.last_name}</h2>
                    <h3>{member.membership_level}</h3>
                    <div>
                        <div className='profileCircle' style={{backgroundImage:`url(${member.profile_pic})`}}/>
                    </div>
                </div>
                <div className='memberLower'>
                    <p><span>Member Since:</span> {startDate.toDateString()}</p>
                    <p><span>Membership Expires:</span> {endDate.toDateString()}</p>
                    <p><span>Certifications:</span> Safety, Advanced Safety</p>
                    <p><span>Email:</span> {member.email}</p>
                    <p><span>Phone:</span> {member.phone}</p>
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

function mapStateToProps(state) {
    return {
        reducer: state.reducer
    }
}

export default connect(mapStateToProps, { showModal,updateUserData })(Member_Profile)