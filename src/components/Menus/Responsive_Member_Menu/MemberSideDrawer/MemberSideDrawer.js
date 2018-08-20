import React from 'react'
import '../../Responsive_Header/SideDrawer/SideDrawer.css'
import {Link} from 'react-router-dom'
// import DrawerToggleButton from '../../DrawerToggleButton'

const MemberSideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if(props.show){
        drawerClasses = 'side-drawer open'
    }
    return(
        <nav className={drawerClasses}>
        <div className="side-drawer-flex">
            <ul>                    
                <Link to='/admin/activity'><li>Edit Profile</li></Link>
                <Link to='/admin/classes'><li>Classes</li></Link>
                <Link to='/admin/marketplace'><li>Marketplace</li></Link>
            </ul>
            <div className="side-drawer-profile">Profile</div>
        </div>
        </nav>
    )
}

export default MemberSideDrawer