import React, {Component} from 'react'
import './MemberToolbar.css'
import DrawerToggleButton from '../../DrawerToggleButton';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { showModal } from '../../../Modals/actions/modal';
import { MODAL_TYPE_EDITPROFILE } from '../../../Modals/constants/ModalTypes';

class MemberToolbar extends Component {
    state = {
        memberProfileDropdownHidden: true
    }

    hiddenInfoToggleClickHandler = () => {
        this.setState((prevState)=> {
            return {
                memberProfileDropdownHidden: !prevState.memberProfileDropdownHidden}
        })
        }

    showUpdateProfile = () => {
        this.props.showModal(MODAL_TYPE_EDITPROFILE, {
        });
        this.setState({
            memberProfileDropdownHidden: true
        })
    };
    
    render() {
        const memberProfilePic = 'http://www.comingsoon.net/assets/uploads/2017/04/PrattBar640.jpg'
        const isHidden = this.state.memberProfileDropdownHidden
        let toolbarDropdownClass = 'dropdown'
        isHidden ? toolbarDropdownClass : toolbarDropdownClass = 'dropdown show'
        let toolbarArrowClass = 'toolbarArrow'
        isHidden ? toolbarArrowClass : toolbarArrowClass = 'toolbarArrow selected'
        return(
            <header className='memberToolbar'>
                <nav className="toolbar_navigation">
                    <div className="toolbar_logo"><a href="">LOGO</a></div>
                    <div className="spacer" />
                    <div className="toolbar_navigation_items">
                        <ul>
                            <Link to='/'><li>Peter Quill</li></Link>
                        </ul>
                        <div className='toolbarProfilePic'>
                            <img src={memberProfilePic} alt="" />
                        </div>
                        <div onClick={() => this.hiddenInfoToggleClickHandler()} className={toolbarArrowClass}>
                            <FontAwesomeIcon icon={faSortDown} />
                        </div>
                    </div>
                    <div className="toolbar_toggle-button">
                        <DrawerToggleButton click={this.props.drawerClickHandler}/>
                    </div>
                </nav>
                <div className={toolbarDropdownClass}>
                    <ul>
                        <Link to='/member/tim'><li onClick={this.closeDropdown}>View Profile</li></Link>
                        <li onClick={this.showUpdateProfile}>Edit Profile</li>
                        <hr/>
                        <li>Sign Out</li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default connect(null, { showModal })(MemberToolbar)