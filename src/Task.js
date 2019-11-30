import React, { Component } from 'react';

export class Task extends Component {
  render() {
    return (
      <li>{this.props.task.name}  ({this.props.task.priority})</li>
    )
  };
};

export default Task;
