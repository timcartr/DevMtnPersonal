import React, { Component } from 'react'
import './Members_Manager.css'
import axios from 'axios'
import {connect} from 'react-redux'
import { updateUserData } from '../../../ducks/reducer'
import AdminMember from './AdminMembersComponent/AdminMember';

class Members_Manager extends Component {
    componentDidMount() {
        axios.get('/api/user-data').then(res => {
            // invoke action creator to update redux state
            this.props.updateUserData(res.data)
        })
    }

    render() {
        return (
        <div className='membersManager'>
            <div className='adminHeader'>
                <h2>Manage Members</h2>
                <p>Lorem ipsum dolor amet stumptown occupy kinfolk.</p>
            </div>
                    <AdminMember />
                    <AdminMember />
                    <AdminMember />
        </div>
        )
    }
}

export default connect(null, {updateUserData})(Members_Manager)
