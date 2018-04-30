import React from 'react';
import { connect } from 'react-redux';

import Pomodoro from './Pomodoro';
import ShortBreak from './ShortBreak';
import StartTimer from './StartTimer';
import { taskType } from '../selectors/periods'

const Timer = (props) => {
  console.log(props.taskType);
  return (
    <div>
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
  }
}

export default connect(mapStateToProps)(Timer);