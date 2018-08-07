import React, { Component } from 'react'
import './Members_Manager.css'
import axios from 'axios'
import {connect} from 'react-redux'
import { updateUserData, updateMembersData } from '../../../ducks/reducer'
import AdminMember from './AdminMembersComponent/AdminMember';
import AdminDashboardMenu from '../AdminDashboardMenu'

class Members_Manager extends Component {
    componentDidMount() {
        axios.get('/api/user-data').then(res => {
            // invoke action creator to update redux state
            this.props.updateUserData(res.data)
            })
        axios.get('/api/members').then(res=>{
            this.props.updateMembersData(res.data)
        })
    }

    render() {
        console.log(this.props.reducer)
        // let mappedMembers = this.props.reducer
        return (
        <div>
        <AdminDashboardMenu/>
        <div className='membersManager'>
            <div className='adminHeader'>
                <h2>Manage Members</h2>
                <p>Lorem ipsum dolor amet stumptown occupy kinfolk.</p>
            </div>
                    <AdminMember />
                    <AdminMember />
                    <AdminMember />
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

export default connect(mapStateToProps, {updateUserData, updateMembersData})(Members_Manager)
