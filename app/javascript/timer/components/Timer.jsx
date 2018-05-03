import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import Pomodoro from './Pomodoro';
import ShortBreak from './ShortBreak';
import StartTimer from './StartTimer';
import { taskType } from '../selectors/periods';
import { unfinishedTasks } from '../selectors/tasks';


const Timer = (props) => {
  return (
    <div>
      {!props.taskAvailable && <Redirect to="/timer/tasks" from="/timer" />}
      {props.taskType === 'no_period' ? <StartTimer /> : null}
      {props.taskType === 'pomodoro' ? <Pomodoro /> : null}
      {props.taskType === 'short_break'
        || props.taskType == 'long_break' ? <ShortBreak /> : null}

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    taskType: taskType(state.periods.last()),
    taskAvailable: unfinishedTasks(state.tasks),
  }
}

export default withRouter(connect(mapStateToProps)(Timer));