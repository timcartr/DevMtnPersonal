import React, { Component } from 'react'
import './Member_Profile.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'

library.add(faIdBadge)

export default class Member_Profile extends Component {
    render() {
        return (
            <div className='Member_Profile'>
                <h2>Username</h2>
                <p>Email</p>
                <p><FontAwesomeIcon icon={faIdBadge} />Current Membership</p>
            </div>
        )
    }
}
