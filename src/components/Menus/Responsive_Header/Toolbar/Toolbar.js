import React from 'react'
import './Toolbar.css'
import '../SideDrawer/DrawerToggleButton'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import {Link} from 'react-router-dom'

const toolbar = props => {
    let scrollClasses = 'toolbar-scroll'
    if(props.scroll){
        scrollClasses = 'toolbar-top'
    }
    return(
        <header className={scrollClasses}>
            <nav className="toolbar_navigation">
                <div className="toolbar_logo"><a href="">LOGO</a></div>
                <div className="spacer" />
                <div className="toolbar_navigation_items">
                    <ul>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/'><li>Membership</li></Link>
                        <Link to='/'><li>Tour</li></Link>
                        <Link to='/'><li><span>Log In</span></li></Link>
                    </ul>
                </div>
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
            </nav>
        </header>
    )
}

export default toolbar