import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import HomepageLayout from '../Components/View/LandingPage/LandingPage';
import AuthRoute from '../Components/Container/ProtectedRoute/ProtectedRoute';
import Dashboard from '../Components/Container/Dashboard/Dashboard';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={HomepageLayout} exact />
      <AuthRoute path="/dashboard" component={Dashboard} exact />
    </Switch>
  </Router>
);

export default Routes;
