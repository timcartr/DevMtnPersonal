import React, {Component} from 'react'
import './MemberToolbar.css'
import DrawerToggleButton from '../../DrawerToggleButton';
import {Link, Redirect} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { showModal } from '../../../Modals/actions/modal';
import { MODAL_TYPE_EDITPROFILE } from '../../../Modals/constants/ModalTypes';
import axios from 'axios'

class MemberToolbar extends Component {
    constructor(){
        super()
        this.state = {
            memberProfileDropdownHidden: true,
            redirect: false
        }
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

    logout = () => {
        axios.post('/api/logout').then(res => {
            console.log(res)
            this.setState({
                redirect:true
            })
        })
    }
    
    render() {
        const user = this.props.reducer.user
        const isHidden = this.state.memberProfileDropdownHidden
        let toolbarDropdownClass = isHidden ? 'dropdown' : 'dropdown show'
        let toolbarArrowClass = isHidden ? 'toolbarArrow' : 'toolbarArrow selected'
        console.log(this.state.redirect)
        return(
            <header className='memberToolbar'>
            {this.state.redirect? <Redirect to='/'/> : ''}
                <nav className="toolbar_navigation">
                    <div className="toolbar_logo"><a href="">LOGO</a></div>
                    <div className="spacer" />
                    <div className="toolbar_navigation_items">
                        <ul>
                            <Link to='/member'><li>{user.first_name} {user.last_name}</li></Link>
                        </ul>
                        <div className='toolbarProfilePic'>
                            <img src={user.profile_pic} alt="" />
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
                        <Link to='/member'><li onClick={this.closeDropdown}>View Profile</li></Link>
                        <hr/>
                        <li onClick={this.showUpdateProfile}>Edit Profile</li>
                        <hr/>
                        <li onClick={this.logout}>Sign Out</li>
                    </ul>
                </div>
            </header>
        )
    }
}

function mapStateToProps(state) {
    return {
        reducer: state.reducer
    }
}

export default connect(mapStateToProps, { showModal })(MemberToolbar)