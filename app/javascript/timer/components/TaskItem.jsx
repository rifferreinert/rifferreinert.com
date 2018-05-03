import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ListGroupItem, Col, Row } from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faSquare, faCheckSquare } from '@fortawesome/fontawesome-free-regular';

import { deleteTask } from '../actions/tasks';


const TaskItem = (props) => {
  const shortDetails = (
    props.details.length > 56 ?
      `${props.details.substring(0, 53)}...` :
      props.details
  );

  return (
    <Row className="mt-2">
      <Col xs="6">
        <ListGroupItem
          className="justify-content-between d-flex align-items-center"
        >
          <span>
            <span>
              <FontAwesomeIcon icon={props.complete ? faCheckSquare : faSquare} className="mr-3" />
            </span>
            {props.topic} - {shortDetails}
          </span>
          <span>
            <Link to={`/timer/tasks/${props.id}/edit`}
              style={{ color: 'black' }}
            >
              <span className="ml-2">
                <FontAwesomeIcon icon={faEdit} />
              </span>
            </Link>
            <span className="ml-2">
              <FontAwesomeIcon icon={faTrashAlt}
                onClick={() => { props.dispatch(deleteTask(props.id)); }}
              />
            </span>
          </span>
        </ListGroupItem>
      </Col>
    </Row>

  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(TaskItem);
