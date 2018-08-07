import React, {Component} from 'react'
import './AdminDashboardMenu.css'
import {Link} from 'react-router-dom'
// import DrawerToggleButton from '../../DrawerToggleButton'
import dashboardIcon from '../../img/SVG/Asset1.svg'
import MembersIcon from '../../img/SVG/Asset2.svg'
import MetricsIcon from '../../img/SVG/Asset3.svg'
import InboxIcon from '../../img/SVG/Asset4.svg'
import ActivityIcon from '../../img/SVG/Asset5.svg'
import ClassesIcon from '../../img/SVG/Asset6.svg'
import MarketplaceIcon from '../../img/SVG/Asset7.svg'

class AdminDashboardMenu extends Component {
    
    render(){
        const memberProfilePic = 'http://www.comingsoon.net/assets/uploads/2017/04/PrattBar640.jpg'
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
                                <img src={memberProfilePic} alt="" />
                        </div>
                        <Link to='/member/tim'>View Profile</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default AdminDashboardMenu