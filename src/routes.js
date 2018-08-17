import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import MemberProfile from './components/Member/MemberProfile';
import AdminDashboard from './components/Admin/Admin_Dashboard/Admin_Dashboard';
import MembersManager from './components/Admin/Members_Manager/Members_Manager';
import SignUp from './components/SignUp/SignUp';

export default (
    <Switch>
        <Route exact path='/' component={Home} login = {this.login}/>
        {/* <Route path={`/member/${this.props.name}`} component={Member_Profile} /> */}
        <Route exact path={`/member`} component={MemberProfile} />
        <Route path={`/member/:id`} component={MemberProfile} />
        <Route exact path='/admin' component={AdminDashboard} />
        <Route path={`/admin/members`} component={MembersManager} />
        <Route path={`/signup`} component={SignUp} />
        {/* <Route path={`/checkout`} component={CheckoutForm} /> */}
    </Switch> 
)