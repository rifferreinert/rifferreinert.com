import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Col, Row, Button } from 'reactstrap';

import { nextPeriod } from '../actions/periods';

const StartTimer = (props) => {
  const onStartClick = () => {
    props.dispatch(nextPeriod(props.time));
  };

  return (
    <Container>
      <Row
        className="d-flex justify-content-center"
      >

        <h1>Begin Your Tasks</h1>
      </Row>
      <Row style={{ height: "200px" }}></Row>
      <Row>
        <Col xs="5"></Col>
        <Col xs="2"
          className="d-flex justify-content-center"
        >
          <Link to="/timer/tasks">
            <Button
              size="lg"
              color="secondary"
            >
              Edit Tasks
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs="5"></Col>
        <Col xs="2"
          className="d-flex justify-content-center"
        >
          <Button onClick={onStartClick}
            size="lg"
            color="primary"
          >
            Start Timer
          </Button>
        </Col>
      </Row>
    </Container >
  );
};

const mapStateToProps = state => (
  { time: state.time }
);

export default connect(mapStateToProps)(StartTimer);