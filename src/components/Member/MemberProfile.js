import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import './MemberProfile.css'
import cameraIcon from '../../img/camera.svg'

import { updateUserData } from '../../ducks/reducer'
import { showModal } from '../Modals/actions/modal';
import { MODAL_TYPE_EDITPROFILE, MODAL_TYPE_UPGRADEMEMBERSHIP, MODAL_TYPE_EDITPROFILEPIC, MODAL_TYPE_ADDPHONE } from '../Modals/constants/ModalTypes';

class Member_Profile extends Component {
    state = {
        editPic: false
    }

    componentDidMount() {
        axios.get('/api/user-data').then(res => {
            // invoke action creator to update redux state
            this.props.updateUserData(res.data)
            let allGood = () => 'all good'
            !res.data.phone ? this.showUpdatePhone() : allGood()
            })
    }

    showUpdatePhone = () => {
        this.props.showModal(MODAL_TYPE_ADDPHONE, {
        })
    }

    showUpdateProfile = () => {
        this.props.showModal(MODAL_TYPE_EDITPROFILE, {
        })
    }

    showUpgradeMembership = () => {
        this.props.showModal(MODAL_TYPE_UPGRADEMEMBERSHIP, {
        })
    }
    
    showEditPic = () => {
        this.setState(()=> {
            return{
                editPic: true
            }
        })
    }

    hideEditPic = () => {
        this.setState(()=> {
            return{
                editPic: false
            }
        })
    }
    
    showEditProfilePicModal = () => {
        this.props.showModal(MODAL_TYPE_EDITPROFILEPIC, {
        })
        this.setState({
            editPic: false
        })
    }

    render() {
        const member = this.props.reducer.user
        let memberSince = new Date(member.start_date);
        let endDate = new Date(member.end_date);
        let updateProfilePic = this.state.editPic ? 'updateProfilePic showUpdate' : 'updateProfilePic'
        return (
            <div className='memberProfile'>
                <div className='bgOverflow'>
                    <div className='memberProfileBG' style={{backgroundImage:`url(${member.profile_pic})`}}/>
                </div>
                <div className='memberProfileTop'>
                    <h2>{member.first_name} {member.last_name}</h2>
                    <h3>{member.membership_level}</h3>
                    <div>
                        <div className='profileCircle' style={{backgroundImage:`url(${member.profile_pic})`}} onMouseEnter={this.showEditPic} 
                            onMouseLeave={this.hideEditPic}>

                            {/* Update Profile Pic */}
                            <div className={updateProfilePic} onClick={this.showEditProfilePicModal}>
                                <img src={cameraIcon} alt="" className='cameraIcon'/>
                                Update Profile Pic
                            </div>

                        </div>
                    </div>
                </div>
                <div className='memberLower'>


                    <p><span>Member Since:</span> {memberSince.toDateString()}</p>
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

export default withRouter(connect(mapStateToProps, { showModal,updateUserData })(Member_Profile))