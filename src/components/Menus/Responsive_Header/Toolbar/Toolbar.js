import React from 'react'
import './Toolbar.css'
import DrawerToggleButton from '../../DrawerToggleButton';
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
                        <Link to='/'><li onClick={props.login}><span>Log In</span></li></Link>
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