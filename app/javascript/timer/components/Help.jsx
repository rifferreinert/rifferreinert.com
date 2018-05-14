import React from 'react';

import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Row, Col
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/fontawesome-free-solid';


class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log('toggle');
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    return (
      <div>
        <FontAwesomeIcon
          onClick={this.toggle}
          icon={faQuestion}
        />
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Timer Instructions</ModalHeader>
          <ModalBody>
            <p>
              This timer was made to help you implement the Pomodoro Teqnique. The first step is to
              create a list of tasks you want to work on. You will be able to come back to this
              list during your breaks to make modifications.
            </p>
            <h2>Task</h2>
            <p>
              A task is made of a title, details, and notes. The title and details describe the
              task you want to complete. The notes describe your thoughts on the task as you plan
              to complete it.
            </p>
            <h2>Focus Session</h2>
            <p>
              These are 25-minute sessions where you are encouraged to do nothing but focus on the
              task at the top of your queue. You may take notes on the task, pause the timer, or
              manually start a break in this session.
            </p>
            <h2>Break</h2>
            <p>
              There are 5-minute breaks and 15-minute breaks. You will get four 5-minute breaks,
              followed by a 15-minute break, and then the cycle will repeat. During these breaks
              you can jot down any ideas that pop into your head for the current task, mark the
              current task as finished, edit your task list, or start a new focus session
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Back</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Help;