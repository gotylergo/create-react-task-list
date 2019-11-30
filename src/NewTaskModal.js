import React, { Component } from 'react';
import './new-task-modal.css';

export class NewTaskModal extends Component {
  render() {
    if (!this.props.modalShows) {
      return null;
    }
    return (
      <div id="NewTaskModal">
        <h2>New Task</h2>
        <div className="form-group">
          <label htmlFor="taskName">Task name</label>
          <input type="text" id="taskName" name="taskName" />
          <label htmlFor="priority">Priority</label>
          <select id="priority" name="priorty">
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <button onClick={e => this.props.toggleModal()}>Save Task</button>
        <button onClick={e => this.props.toggleModal()}>Cancel</button>
      </div>
    )
  }
}

export default NewTaskModal;