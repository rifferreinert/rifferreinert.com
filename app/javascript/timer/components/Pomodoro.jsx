import React from 'react';
import { connect } from 'react-redux';

import TimerRemaining from './TimeRemaining';
import TaskNotes from './TaskNotes';
import { pause, start, nextPeriod } from '../actions/periods';
import { finishTask } from '../actions/tasks';
import { getCurrentTask, unfinishedTasks } from '../selectors/tasks';

const Pomodoro = (props) => {
  const onTimerToggle = () => {
    const toggleAction = props.timerRunning
      ? pause(props.time)
      : start(props.time);
    props.dispatch(toggleAction);
  };

  const onNextPeriod = () => {
    props.dispatch(nextPeriod(props.time))
  };

  const onFinishTaskClick = () => {
    props.dispatch(finishTask(props.taskId));
  };

  if (!props.unfinishedTasks) {
    return <div></div>;
  }

  return (
    <div>
      <h1>{props.taskTitle}</h1>
      <TimerRemaining />
      <button onClick={onTimerToggle}>
        {props.timerRunning ? 'Pause' : 'Resume'}
      </button>
      <br />
      <button
        onClick={onFinishTaskClick}
      >
        Finish Task
      </button>
      <button
        onClick={onNextPeriod}
      >
        Start Break
      </button>
      <br />
      <TaskNotes
        readOnly={false}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  const currentTask = getCurrentTask(state.tasks)
  return {
    time: state.time,
    unfinishedTasks: unfinishedTasks(state.tasks),
    timerRunning: state.periods.last().get('timerRunning'),
    taskId: currentTask ? getCurrentTask(state.tasks).get('id') : null,
    taskTitle: currentTask ? getCurrentTask(state.tasks).get('title') : null,
  };
};

export default connect(mapStateToProps)(Pomodoro);
