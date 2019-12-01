import React, { Component } from 'react';
import './task-modal.css';

export class TaskModal extends Component {
  render() {
    if (!this.props.modalShows) {
      return null;
    }
    return (
      <div id="TaskModal">
        <h2>New Task</h2>
        <div className="form-group">
          <label htmlFor="taskName">Task name</label>
          <input type="text" id="taskName" name="taskName" onChange={this.props.setModalTaskName} value={this.props.modalTaskName} />
          <label htmlFor="priority">Priority</label>
          <select id="priority" name="priorty" onChange={this.props.setModalTaskPriority} value={this.props.modalTaskPriority}>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <button onClick={this.props.updateTaskList}>Save Task</button>
        <button onClick={this.props.toggleModal}>Cancel</button>
      </div>
    )
  }
}

export default TaskModal;