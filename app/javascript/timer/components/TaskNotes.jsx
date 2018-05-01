import React from 'react';
import { connect } from 'react-redux';

import { Input } from 'reactstrap';

import { getCurrentTask } from '../selectors/tasks';
import { editTask } from '../actions/tasks';

const TextNotes = (props) => {
  const onNoteChange = (e) => {
    const notes = e.target.value;
    props.dispatch(editTask(props.taskId, { notes }));
  };

  return (
    <div>
      <Input
        type="textarea"
        cols="80"
        rows="8"
        readOnly={props.readOnly}
        value={props.notes} 
        onChange={onNoteChange}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  const currentTask = getCurrentTask(state.tasks);
  return {
    notes: currentTask.get('notes'),
    taskId: currentTask.get('id'),
  };
};

export default connect(mapStateToProps)(TextNotes);
