import React from "react";
import {Router, Route, Redirect,IndexRoute, hashHistory} from  'react-router';

import App from './App.jsx';
import BillingCycle from "../billingCycle/BillingCycle";
import Dashboard from "../dashboard/Dashboard";
import Dashboard2 from '../dashboard2/dashboard2.jsx';

export default props=>(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="dashboard2" component={Dashboard2}/>
            <Route path='billingCycles' component={BillingCycle}/>
        </Route>
        <Redirect from='*' to="/"/>
    </Router>
)
