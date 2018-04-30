import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TimeRemaining from './TimeRemaining';
import { pause, start, nextPeriod } from '../actions/periods';
import { getCurrentTask } from '../selectors/tasks';
import { taskType } from '../selectors/periods';
import TaskNotes from './TaskNotes';

const ShortBreak = (props) => {
  const onTimerToggle = () => {
    const toggleAction = props.timerRunning
      ? pause(props.time)
      : start(props.time);
    props.dispatch(toggleAction);
  };

  const onEndBreakClick = () => {
    props.dispatch(nextPeriod(props.time));
  };

  return (
    <div>
      <h1>{props.periodType == 'short_break' ? 'Short Break' : 'Long Break'}</h1>
      <TimeRemaining />
      <p>
        Next Focus: {props.taskTitle}
      </p>
      <button onClick={onTimerToggle}>
        {props.timerRunning ? 'Pause' : 'Resume'}
      </button>
      <Link to="/timer/tasks">
        <button>
          Edit Task List
        </button>
      </Link>
      <button onClick={onEndBreakClick}>
        End Break
      </button>
      Notes:
      <TaskNotes />

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    time: state.time,
    periodType: taskType(state.periods.last()),
    timerRunning: state.periods.last().get('timerRunning'),
    taskTitle: state.tasks.size > 0 ? getCurrentTask(state.tasks).get('title') : '',
  };
};

export default connect(mapStateToProps)(ShortBreak);