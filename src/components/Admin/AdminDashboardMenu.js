import React, {Component} from 'react'
import './AdminDashboardMenu.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import dashboardIcon from '../../img/SVG/Asset1.svg'
import MembersIcon from '../../img/SVG/Asset2.svg'
import MetricsIcon from '../../img/SVG/Asset3.svg'
import InboxIcon from '../../img/SVG/Asset4.svg'
import ActivityIcon from '../../img/SVG/Asset5.svg'
import ClassesIcon from '../../img/SVG/Asset6.svg'
import MarketplaceIcon from '../../img/SVG/Asset7.svg'

class AdminDashboardMenu extends Component {
    
    render(){
        const user = this.props.reducer.user
        let drawerClasses = 'adminDashboardMenu'
        if(this.props.sideDrawerOpen){
            drawerClasses = 'adminDashboardMenu open'
        }
        return(
            <nav className={drawerClasses}>
                <div className="adminDashboardMenu-flex">
                    <ul>                    
                        <Link to='/admin'><li><img src={dashboardIcon} alt="Dashboard"/>Dashboard</li></Link>
                        <Link to='/admin/members'><li><img src={MembersIcon} alt="Dashboard"/>Members</li></Link>
                        <Link to='/admin/metrics'><li><img src={MetricsIcon} alt="Dashboard"/>Metrics</li></Link>
                        <Link to='/admin/inbox'><li><img src={InboxIcon} alt="Dashboard"/>Inbox</li></Link>
                        <Link to='/admin/activity'><li><img src={ActivityIcon} alt="Dashboard"/>Activity</li></Link>
                        <Link to='/admin/classes'><li><img src={ClassesIcon} alt="Dashboard"/>Classes</li></Link>
                        <Link to='/admin/marketplace'><li><img src={MarketplaceIcon} alt="Dashboard"/>Marketplace</li></Link>
                    </ul>
                    <div className="adminDashboardMenu-profile">
                        <div className='toolbarProfilePic'>
                                <img src={user.profile_pic} alt="" />
                        </div>
                        <Link to={`/member/${user.first_name}`}>View Profile</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        reducer: state.reducer
    }
}

export default connect(mapStateToProps)(AdminDashboardMenu)