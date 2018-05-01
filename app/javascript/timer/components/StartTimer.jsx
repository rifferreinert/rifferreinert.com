import React from 'react';
import { connect } from 'react-redux';

import { Container, Col, Row } from 'reactstrap';

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
          <button onClick={onStartClick}
            size="lg"
            className="btn btn-lg btn-primary"
          >
            Start Timer
          </button>
        </Col>
      </Row>
    </Container >
  );
};

const mapStateToProps = state => (
  { time: state.time }
);

export default connect(mapStateToProps)(StartTimer);