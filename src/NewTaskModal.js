import React, { Component } from 'react';
import './new-task-modal.css';

export class NewTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state ={
      taskName: '',
      taskPriority: 'High',
    }
    this.setTaskName = (e) => {
      this.setState({
        taskName: e.target.value,
      })
    }
    this.setTaskPriority = (e) => {
      this.setState({
        taskPriority: e.target.value,
      })
    }
  }
  render() {
    if (!this.props.modalShows) {
      return null;
    }
    return (
      <div id="NewTaskModal">
        <h2>New Task</h2>
        <div className="form-group">
          <label htmlFor="taskName">Task name</label>
          <input type="text" id="taskName" name="taskName" onChange={this.setTaskName} value={this.state.taskName} />
          <label htmlFor="priority">Priority</label>
          <select id="priority" name="priorty" onChange={this.setTaskPriority} value={this.state.taskPriority}>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <button onClick={e => this.props.updateTaskList('create', {'name': this.state.taskName, 'priority': this.state.taskPriority})}>Save Task</button>
        <button onClick={e => this.props.toggleModal()}>Cancel</button>
      </div>
    )
  }
}

export default NewTaskModal;