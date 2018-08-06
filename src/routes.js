import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Member_Profile from './components/Member_Profile/Member_Profile';
import Admin_Dashboard from './components/Admin/Admin_Dashboard/Admin_Dashboard';
import Members_Manager from './components/Admin/Members_Manager/Members_Manager';

const router = (
    <Switch>
        <Route exact path='/' component={Home} login = {this.login}/>
        {/* <Route path={`/member/${this.props.name}`} component={Member_Profile} /> */}
        <Route path={`/member/tim`} component={Member_Profile} />
        <Route exact path='/admin' component={Admin_Dashboard} />
        <Route path={`/admin/members`} component={Members_Manager} />
        {/* <Route path={`/checkout`} component={CheckoutForm} /> */}
    </Switch> 
)

export default router;