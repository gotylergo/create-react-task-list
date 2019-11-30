import React, { Component } from 'react';
import { Task } from './Task';

export class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ['Wash the dishes', 'Do the laundry', 'Sweep the floors'],
    }
  }
  render() {
    let Tasks = [];
    if (this.state.tasks.length === 0) {
      Tasks = ["No tasks! :)"]
    }
    else {
      Tasks = this.state.tasks.map((task, index) =>
        <Task key={index} task={task} />
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