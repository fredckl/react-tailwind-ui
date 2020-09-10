import React from 'react';
import { BrowserRouter as R, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Grid from './pages/Grid';

const Routes = () => {
  return (
    <R>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/grid" component={Grid}/>
      </Switch>
    </R>
  );
};

export default Routes;
