import React from 'react'
import './AdminSideDrawer.css'
import {Link} from 'react-router-dom'
// import DrawerToggleButton from '../../DrawerToggleButton'

const sideDrawer = props => {
    let drawerClasses = 'adminSideDrawer'
    if(props.show){
        drawerClasses = 'adminSideDrawer open'
    }
    return(
        <nav className={drawerClasses}>
        <div className="adminSideDrawer-flex">
            <ul>                    
                <Link to='/admin'><li>Dashboard</li></Link>
                <Link to='/admin/members'><li>Members</li></Link>
                <Link to='/admin/metrics'><li>Metrics</li></Link>
                <Link to='/admin/inbox'><li>Inbox</li></Link>
                <Link to='/admin/activity'><li>Activity</li></Link>
                <Link to='/admin/classes'><li>Classes</li></Link>
                <Link to='/admin/marketplace'><li>Marketplace</li></Link>
            </ul>
            <div className="adminSideDrawer-profile">Profile</div>
        </div>
        </nav>
    )
}

export default sideDrawer