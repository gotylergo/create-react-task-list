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
    const Tasks = this.state.tasks.map((task, index) =>
      <Task key={index} task={task} />
    )
    return (
      <ul>
        {Tasks}
      </ul>
    )
  }
}

export default TaskList;