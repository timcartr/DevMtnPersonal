import React, { Component } from 'react'
import './Admin_Dashboard.css'
import AdminDashboardMenu from '../AdminDashboardMenu'

export default class Dashboard extends Component {
    render() {
        return (
        <div className='Dashboard'>
        <AdminDashboardMenu/>
            <h1>Dashboard</h1>
        </div>
        )
    }
}