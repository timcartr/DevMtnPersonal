import React, { Component } from 'react'
import './AdminMember.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

export default class AdminMembers extends Component {
    state = {
        memberInfoHidden: true
    }

    hiddenInfoToggleClickHandler = () => {
        this.setState((prevState)=> {
            return {
                memberInfoHidden: !prevState.memberInfoHidden}
        })
        }

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
                        <button>Edit Member Information</button>
                        <button>Change Membership Level</button>
                        <button>Delete Member</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
