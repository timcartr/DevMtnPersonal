import React, { Component } from 'react'
import './Members_Manager.css'
import axios from 'axios'
import {connect} from 'react-redux'
import { updateUserData } from '../../../ducks/reducer'

class Members_Manager extends Component {
    componentDidMount() {
        axios.get('/api/user-data').then(res => {
            // invoke action creator to update redux state
            this.props.updateUserData(res.data)
        })
    }

    render() {
        return (
        <div className='Members_Manager'>
            <h1>Members Manager</h1>
        </div>
        )
    }
}

export default connect(null, {updateUserData})(Members_Manager)
