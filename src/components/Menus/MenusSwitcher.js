import React, { Component } from 'react'
import { connect } from 'react-redux';

// IMPORT MENUS
import Backdrop from './Backdrop/Backdrop'
import Toolbar from './Responsive_Header/Toolbar/Toolbar'
import SideDrawer from './Responsive_Header/SideDrawer/SideDrawer'
import AdminToolbar from './Responsive_Admin_Menu/AdminToolbar/AdminToolbar'
import AdminSideDrawer from './Responsive_Admin_Menu/AdminSideDrawer/AdminSideDrawer'
import MemberToolbar from './Responsive_Member_Menu/MemberToolbar/MemberToolbar'
import MemberSideDrawer from './Responsive_Member_Menu/MemberSideDrawer/MemberSideDrawer'

class MenusSwitcher extends Component {
    state= {
        sideDrawerOpen: true,
        backdropOpen:false,
        isTop: true,
        width: 0,
        height: 0
    }
    
    componentDidMount() {
    document.addEventListener('scroll', () => {
        const isTop = window.scrollY < window.innerHeight-50;

        if (isTop !== this.state.isTop) {
            this.setState({ isTop })
        }
    })
    }

    drawerToggleClickHandler = () => {
    this.setState((prevState)=> {
        return {
            sideDrawerOpen: !prevState.sideDrawerOpen,
            backdropOpen: !prevState.backdropOpen}
    })
    }

    backdropClickHandler = () => {
    this.setState({
        sideDrawerOpen:false,
        backdropOpen:false})
    }

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
        backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        let backdropClasses = 'backdrop'
        if(this.state.backdropOpen){
            backdropClasses = 'backdrop open'
        }

        let { user } = this.props

        return (
            // Bar Building Purposes
            <div>
                <MemberToolbar 
                    drawerClickHandler={this.drawerToggleClickHandler} />
            </div>

            //Uncomment this out when ready for build

            // <div>
            //     {
            //     user.username ? (
            //     user.permissions === 'admin' ? 
            //         <div>
            //             <AdminToolbar 
            //                 drawerClickHandler={this.drawerToggleClickHandler} />
            //             <AdminSideDrawer 
            //                 login = {this.props.login}
            //                 show={this.state.sideDrawerOpen}/>
            //                 <div className={backdropClasses}>
            //                 {backdrop}
            //                 </div>
            //         </div> : 
            //             <UserMenu/>
            //     ) : (
            //         <div>
            //             <Toolbar 
            //                 login = {this.props.login} 
            //                 drawerClickHandler={this.drawerToggleClickHandler}
            //                 scroll = {this.state.isTop}/>
            //             <SideDrawer 
            //                 login = {this.props.login}
            //                 show={this.state.sideDrawerOpen}/>
            //                 <div className={backdropClasses}>
            //                 {backdrop}
            //                 </div>
            //         </div>
            //     )
            //     }
            // </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
  }
  
  export default connect(mapStateToProps)(MenusSwitcher);
