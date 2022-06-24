import React from "react";
import {Router, Route, Redirect,IndexRoute, hashHistory} from  'react-router';

import AuthOrApp from './authOrApp.jsx';
import BillingCycle from "../billingCycle/BillingCycle";
import Dashboard from "../dashboard/Dashboard";
import Dashboard2 from '../dashboard2/dashboard2.jsx';

export default props=>(
    <Router history={hashHistory}>
        <Route path="/" component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path="dashboard2" component={Dashboard2}/>
            <Route path='billingCycles' component={BillingCycle}/>
        </Route>
        <Redirect from='*' to="/"/>
    </Router>
)
