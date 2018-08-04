import React from 'react'
import './AdminToolbar.css'
import DrawerToggleButton from '../../DrawerToggleButton';
import {Link} from 'react-router-dom'

const toolbar = props => {
    return(
        <header className='adminToolbar'>
            <nav className="toolbar_navigation">
                <div className="toolbar_logo"><a href="">LOGO</a></div>
                <div className="spacer" />
                <div className="toolbar_navigation_items">
                    <ul>
                    <Link to='/'><li><span>Firstname Lastname</span></li></Link>
                    <img src="" alt=""/>
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