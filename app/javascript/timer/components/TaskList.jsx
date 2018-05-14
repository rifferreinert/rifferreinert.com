import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, ListGroup, Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlusSquare, faPlayCircle } from '@fortawesome/fontawesome-free-regular';

import TaskItem from './TaskItem';
import { deleteTask } from '../actions/tasks';
import Help from '../components/Help';

const TaskList = props => (
  <Container>
    <Row>
      <Col xs="1" md="3"></Col>
      <Col xs="10" md="6"
        className="justify-content-center d-flex"
      >
        <h2>Task List</h2>
      </Col>
    </Row>

    <ListGroup>
      {props.tasks.map(task => (

        <div key={task.get('id')}>
          <TaskItem
            id={task.get('id')}
            complete={task.get('complete')}
            topic={task.get('title')}
            details={task.get('details')}
          />
        </div>

      )).toJS()}
    </ListGroup>

    <Row className="mt-2">
      <Col xs="1" md="3"></Col>
      <Col xs="10" md="6"
        className="justify-content-between d-flex"
        style={{ "fontSize": "1.5rem" }}
      >
        <Link to="/timer/tasks/new"
          style={{ color: "black" }}
        >
          <FontAwesomeIcon icon={faPlusSquare} />
        </Link>
        <Help />
        <Link to="/timer"
          style={{ color: "black" }}
        >
          <FontAwesomeIcon icon={faPlayCircle} />

        </Link>
      </Col>
    </Row>
  </Container>
);

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(TaskList);
