import React from 'react'
import './Toolbar.css'
import '../SideDrawer/DrawerToggleButton'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

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
                        <li><a href="">Products</a></li>
                        <li><a href="">Users</a></li>
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