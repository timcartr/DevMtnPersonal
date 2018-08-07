import React, { Component } from 'react'
import './AdminMember.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { showModal } from '../../../Modals/actions/modal';
import { MODAL_TYPE_ADMINEDITPROFILE, MODAL_TYPE_UPGRADEMEMBERSHIP, MODAL_TYPE_DELETEMEMBER } from '../../../Modals/constants/ModalTypes';

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
        this.props.showModal(MODAL_TYPE_ADMINEDITPROFILE, {
        });
    };

    showUpgradeMembership = () => {
        this.props.showModal(MODAL_TYPE_UPGRADEMEMBERSHIP, {
        });
    };

    showDeleteMember = () => {
        this.props.showModal(MODAL_TYPE_DELETEMEMBER, {
        });
    };

    render() {

        const isHidden = this.state.memberInfoHidden      
        let MoreMemberInfoClass = 'moreMemberInfo Hide'
        isHidden ? MoreMemberInfoClass : MoreMemberInfoClass = 'moreMemberInfo Display'
        
        return (
        <div className='adminMember'>
            <div className='alwaysDisplay'>
                <div className='photoInfo'>
                    <div className='photoWrapper'>
                    <img src="" alt=""/>
                    </div>
                    <div className='nameMembership'>
                        <h2>Bear Grylls</h2>
                        <p>Monthly Member</p>
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
                        <p><span>Member Since:</span> July 24, 2018</p>
                        <p><span>Renewal Date:</span> Aug 24, 2018</p>
                        <p><span>Certifications:</span> Safety, Advanced Safety</p>
                        <p><span>Email:</span> email@example.com</p>
                        <p><span>Phone:</span> 888.888.8888</p>
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