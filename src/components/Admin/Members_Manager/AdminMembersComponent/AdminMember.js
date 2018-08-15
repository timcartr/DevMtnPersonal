import React, { Component } from 'react'
import './AdminMember.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { showModal } from '../../../Modals/actions/modal';
import { MODAL_TYPE_ADMINEDITPROFILE, MODAL_TYPE_ADMINUPGRADEMEMBERSHIP, MODAL_TYPE_DELETEMEMBER } from '../../../Modals/constants/ModalTypes';

class AdminMember extends Component {
    state = {
        memberInfoHidden: true
    }

    hiddenInfoToggleClickHandler = () => {
        this.setState((prevState)=> {
            return {
                memberInfoHidden: !prevState.memberInfoHidden}
        })
        }

    showUpdateProfile = () => {
        const member = this.props.member
        this.props.showModal(MODAL_TYPE_ADMINEDITPROFILE, {
            first_name: member.first_name,
            last_name: member.last_name,
            email: member.email,
            phone: member.phone,
            start_date: member.start_date,
            end_date: member.end_date,
            member_id:member.member_id
        });
    };

    showUpgradeMembership = () => {
        this.props.showModal(MODAL_TYPE_ADMINUPGRADEMEMBERSHIP, {
            membership_level:this.props.member.membership_level,
            member_id:this.props.member.member_id
        });
    };

    showDeleteMember = () => {
        this.props.showModal(MODAL_TYPE_DELETEMEMBER, {
            member_id:this.props.member.member_id
        });
    };

    render() {
        const member = this.props.member
        const isHidden = this.state.memberInfoHidden      
        let MoreMemberInfoClass = isHidden ? 'moreMemberInfo Hide' : 'moreMemberInfo Display'
        let startDate = new Date(member.start_date);
        let endDate = new Date(member.end_date);
        return (
        <div className='adminMember'>
            <div className='alwaysDisplay'>
                <div className='photoInfo'>
                    <div className='photoWrapper'>
                    <img src={member.profile_pic} alt=""/>
                    </div>
                    <div className='nameMembership'>
                        <h2>{member.first_name} {member.last_name}</h2>
                        <p>{member.membership_level}</p>
                    </div>
                </div>
                <div onClick={() => this.hiddenInfoToggleClickHandler()} className='moreInfoToggle'>
                    {isHidden ? <FontAwesomeIcon icon={faSortDown} /> : <FontAwesomeIcon icon={faSortUp} />}
                </div>
            </div>
            <div className={MoreMemberInfoClass}>
                <hr/>
                <div className='MoreMemberInfoFlex'>
                    <div className='hiddenMemberInfo'>
                        <p><span>Member Since:</span> {startDate.toDateString()}</p>
                        <p><span>Renewal Date:</span> {endDate.toDateString()}</p>
                        <p><span>Certifications:</span> Safety, Advanced Safety</p>
                        <p><span>Email:</span> {member.email}</p>
                        <p><span>Phone:</span> {member.phone}</p>
                    </div>
                    <div className='hiddenMembersButtons'>
                        <button onClick={this.showUpdateProfile}>Edit Member Information</button>
                        <button onClick={this.showUpgradeMembership}>Change Membership Level</button>
                        <button onClick={this.showDeleteMember}>Delete Member</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default connect(null, { showModal })(AdminMember)