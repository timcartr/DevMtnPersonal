import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import MemberProfile from './components/Member/MemberProfile';
import AdminDashboard from './components/Admin/Admin_Dashboard/Admin_Dashboard';
import MembersManager from './components/Admin/Members_Manager/Members_Manager';

export default class Router extends Component {

    login() {
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env
    
        let url = `${window.location.origin}/auth/callback`
    
        window.location = 
        `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_url=${url}&response_type=code`
        }
    
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} login = {this.login}/>
                {/* <Route path={`/member/${this.props.name}`} component={Member_Profile} /> */}
                <Route path={`/member/tim`} component={MemberProfile} />
                <Route exact path='/admin' component={AdminDashboard} />
                <Route path={`/admin/members`} component={MembersManager} />
                {/* <Route path={`/checkout`} component={CheckoutForm} /> */}
            </Switch> 
        )
    }
}