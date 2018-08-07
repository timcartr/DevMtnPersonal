import React, {Component} from 'react'
import './Toolbar.css'
import DrawerToggleButton from '../../DrawerToggleButton';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { showModal } from '../../../Modals/actions/modal';
import { MODAL_TYPE_LOGIN } from '../../../Modals/constants/ModalTypes'


class Toolbar extends Component {

    showLogin = () => {
        this.props.showModal(MODAL_TYPE_LOGIN, {
        });
    };
    
    render(){
    let scrollClasses = 'toolbar-scroll'
    if(this.props.scroll){
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
                        <li onClick={this.props.login}><span>Log In</span></li>
                    </ul>
                </div>
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={this.props.drawerClickHandler}/>
                </div>
            </nav>
        </header>
    )}
}

export default connect(null, { showModal })(Toolbar)