import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Timer from '../components/Timer';
import TaskList from '../components/TaskList';
import TaskItemForm from '../components/TaskItemForm';
import { unfinishedTasks } from '../selectors/tasks';

const AppRouter = props => (
  <BrowserRouter>

    <div>
      <Switch>
        {!props.taskAvailable && <Redirect to="/timers/tasks" from="/timer" />}
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
    taskAvailable: unfinishedTasks(state.tasks),
  };
}

export default connect(mapStateToProps)(AppRouter);
