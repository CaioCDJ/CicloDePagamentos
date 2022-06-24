import React from "react";
import {Switch, Route,Redirect} from 'react-router';

import AuthOrApp from './authOrApp.jsx';
import BillingCycle from "../billingCycle/BillingCycle";
import Dashboard from "../dashboard/Dashboard";
import Dashboard2 from '../dashboard2/dashboard2.jsx';

export default props=>(
  <div className="content-wrapper">
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/billingCycles' component={BillingCycle}/>
      <Redirect from='*' to='/'/>
    </Switch>
  </div>
)
