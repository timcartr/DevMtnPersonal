import React, { Component } from 'react'
import './Members_Manager.css'
import axios from 'axios'
import {connect} from 'react-redux'
import { updateUserData, updateMembersData, createMembersData } from '../../../ducks/reducer'
import AdminMember from './AdminMembersComponent/AdminMember';
import AdminDashboardMenu from '../AdminDashboardMenu';
import {withRouter} from 'react-router-dom'

class Members_Manager extends Component {
    componentDidMount() {
        axios.get('/api/user-data').then(res => {
            // invoke action creator to update redux state
            this.props.updateUserData(res.data)
            })
        axios.get('/api/members').then(res=>{
            this.props.createMembersData(res.data)
        })
    }

    render() {
        let mappedMembers = this.props.reducer.members.map( (member,i) => {
            return(<AdminMember key={i} member={member}/>)
        })
        return (
        <div className='dashboardFlex'>
            <AdminDashboardMenu/>
            <div className='membersManager'>
                <div className='adminHeader'>
                    <h2>Manage Members</h2>
                    <p>Lorem ipsum dolor amet stumptown occupy kinfolk.</p>
                </div>
                {mappedMembers}
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

export default withRouter(connect(mapStateToProps, {updateUserData, updateMembersData, createMembersData})(Members_Manager))
