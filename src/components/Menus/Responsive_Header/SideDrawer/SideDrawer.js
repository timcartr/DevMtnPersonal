import React from 'react'
import './SideDrawer.css'
import {Link} from 'react-router-dom'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if(props.show){
        drawerClasses = 'side-drawer open'
    }
    return(
        <nav className={drawerClasses}>
        <div className="side-drawer-flex">
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/'><li>Membership</li></Link>
                <Link to='/'><li>Tour</li></Link>
            </ul>
            <div className="side-drawer-button">Log In</div>
        </div>
        </nav>
    )
}

export default sideDrawer