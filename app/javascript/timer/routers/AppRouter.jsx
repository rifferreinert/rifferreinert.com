import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Timer from '../components/Timer';
import TaskList from '../components/TaskList';
import TaskItemForm from '../components/TaskItemForm';

const AppRouter = props => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/timer/tasks/new" component={TaskItemForm} exact />
        <Route path="/timer/tasks/:id/edit" component={TaskItemForm} exact />
        <Route path="/timer/tasks" component={TaskList} exact />
        <Route path="/timer" component={Timer} />
      </Switch>
    </div>
  </BrowserRouter>
);

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps)(AppRouter);
