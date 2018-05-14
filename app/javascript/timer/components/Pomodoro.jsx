import React from 'react';
import { connect } from 'react-redux';

import { Col, Row, Container, Button } from 'reactstrap';

import TimerRemaining from './TimeRemaining';
import TaskNotes from './TaskNotes';
import { pause, start, nextPeriod } from '../actions/periods';
import { finishTask } from '../actions/tasks';
import { getCurrentTask, unfinishedTasks } from '../selectors/tasks';
import Help from '../components/Help';

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
    <Container>
      <Row>
        <Col xs="1"
        >
        </Col>
        <Col xs="10">
          <h1>{props.taskTitle}</h1>
        </Col>
      </Row>
      <Row>
        <Col xs="1"
        >
        </Col>
        <Col xs="10">
          <TimerRemaining />
        </Col>
      </Row>
      <Row>
        <Col xs="1"
        >
        </Col>
        <Col xs="10">
          <Button
            color="secondary"
            onClick={onTimerToggle}>
            {props.timerRunning ? 'Pause' : 'Resume'}
          </Button>
        </Col>
      </Row>
      <Row
        className="mt-2"
      >
        <Col xs="1"
        >
        </Col>
        <Col xs="10" className="d-flex justify-content-between">
          <span>
            <Button
              onClick={onFinishTaskClick}
              color="secondary"
            >
              Finish Task
            </Button>
            <Button
              className="ml-2"
              onClick={onNextPeriod}
              color="primary"
            >
              Start Break
            </Button>
          </span>
          <Help />
        </Col>
      </Row>
      <Row
        className="mt-2"
      >
        <Col xs="1"
        >
        </Col>
        <Col xs="10">
          <TaskNotes
            readOnly={false}
          />
        </Col>
      </Row>
    </Container >
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
