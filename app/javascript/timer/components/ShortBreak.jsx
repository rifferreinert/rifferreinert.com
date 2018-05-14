import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Row, Col, Container, Button } from 'reactstrap';

import TimeRemaining from './TimeRemaining';
import { pause, start, nextPeriod } from '../actions/periods';
import { getCurrentTask } from '../selectors/tasks';
import { taskType } from '../selectors/periods';
import TaskNotes from './TaskNotes';
import Help from '../components/Help';

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
    <Container>
      <Row>
        <Col xs="1"></Col>
        <Col xs="10">
          <h1>{props.periodType == 'short_break' ? 'Short Break' : 'Long Break'}</h1>
        </Col>
      </Row>
      <Row>
        <Col xs="1"></Col>
        <Col xs="10">
          <TimeRemaining />
        </Col>
      </Row>
      <Row>
        <Col xs="1"></Col>
        <Col xs="10">
          <p>
            Next Focus: {props.taskTitle}
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs="1"></Col>
        <Col xs="10" className="d-flex justify-content-between">
          <span>
            <Button
              color="secondary"
              onClick={onTimerToggle}
            >
              {props.timerRunning ? 'Pause' : 'Resume'}
            </Button>
            <Link to="/timer/tasks">
              <Button
                className="ml-2"
                color="secondary"
              >
                Edit Task List
              </Button>
            </Link>
            <Button
              className="ml-2"
              color="primary"
              onClick={onEndBreakClick}>
              End Break
            </Button>
          </span>
          <Help />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs="1"></Col>
        <Col xs="10">
          Notes:
          <TaskNotes />
        </Col>
      </Row>

    </Container>
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