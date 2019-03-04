import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import HomepageLayout from '../Components/View/LandingPage/LandingPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={HomepageLayout} exact />
    </Switch>
  </Router>
);

export default Routes;
