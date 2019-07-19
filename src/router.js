import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import List from './routes/ListFather'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={List} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
