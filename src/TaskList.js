import React, { Component } from 'react';
import { Task } from './Task';

export class TaskList extends Component {
  render() {
    let Tasks = [];
    if (this.props.taskList.length === 0) {
      Tasks = ["No tasks! :)"]
    }
    else {
      Tasks = this.props.taskList.map((task, index) =>
        <Task key={index} task={task} toggleModal={(e) => this.props.toggleModal(e)} deleteTask={(e) => this.props.deleteTask(e)} />
      )
    }
    return (
      <ul>
        {Tasks}
      </ul>
    )
  }
}

export default TaskList;