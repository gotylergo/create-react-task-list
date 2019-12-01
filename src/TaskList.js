import React, { Component } from 'react';
import { Task } from './Task';

export class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.taskList,
    }
  }
  render() {
    let Tasks = [];
    if (this.props.taskList.length === 0) {
      Tasks = ["No tasks! :)"]
    }
    else {
      Tasks = this.props.taskList.map((task, index) =>
        <Task key={index} task={task} toggleModal={this.props.toggleModal} />
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