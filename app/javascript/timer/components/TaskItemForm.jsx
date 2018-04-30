import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addTask, editTask } from '../actions/tasks';
import { getTask } from '../selectors/tasks';


class TaskItemForm extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDetailsChange = this.onDetailsChange.bind(this);
    this.onNotesChange = this.onNotesChange.bind(this);
    this.viewMode = this.viewMode.bind(this);
    this.getEditTask = this.getEditTask.bind(this);
    this.validTask = this.validTask.bind(this);

    // If we are in edit then prefill the state
    let title = '';
    let details = '';
    let notes = '';
    if (this.viewMode() === 'edit') {
      const task = this.getEditTask();
      if (task) {
        title = task.get('title');
        details = task.get('details');
        notes = task.get('notes');
      }
    }

    this.state = {
      title,
      details,
      notes,
    };
  }

  onSubmit(e) {
    e.preventDefault();
    switch (this.viewMode()) {
      case 'edit':
        this.props.dispatch(
          editTask(
            this.props.match.params.id,
            {
              title: this.state.title,
              details: this.state.details,
              notes: this.state.notes,
            },
          ));
        break;
      case 'new':
        this.props.dispatch(addTask({
          title: this.state.title,
          details: this.state.details,
          notes: this.state.notes,
        }));
        break;
      default:
    }

    this.props.history.push('/timer/tasks');
  }

  onTitleChange(e) {
    const title = e.target.value;
    this.setState(() => ({ title }));
  }

  onDetailsChange(e) {
    const details = e.target.value;
    this.setState(() => ({ details }));
  }

  onNotesChange(e) {
    const notes = e.target.value;
    this.setState(() => ({ notes }));
  }

  getEditTask() {
    const id = this.props.match.params.id;
    const task = getTask(this.props.tasks, id);
    return task;
  }

  viewMode() {
    switch (this.props.match.path) {
      case '/tasks/:id/edit':
        return 'edit';
      default:
        return 'new';
    }
  }

  validTask() {
    if (this.viewMode() === 'edit' && !this.getEditTask()) {
      return false;
    }

    return true;
  }

  render() {
    if (!this.validTask()) {
      return (
        <div>
          Task with ID {this.props.match.params.id} not found
        </div>
      );
    }

    return (
      <div className="container">
        <h1>New Task</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="Title">
              Title
            </label>
            <input
              id="Title"
              name="Title"
              type="text"
              className="form-control"
              onChange={this.onTitleChange}
              value={this.state.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="details">
              Details
            </label>
            <input
              name="details"
              id="details"
              type="text"
              className="form-control"
              onChange={this.onDetailsChange}
              value={this.state.details}
            />
          </div>
          <div className="form-group">
            <label htmlFor="notes">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              cols="80"
              rows="8"
              className="form-control"
              value={this.state.notes}
              onChange={this.onNotesChange}
            />
          </div>
          <button className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(withRouter(TaskItemForm));
