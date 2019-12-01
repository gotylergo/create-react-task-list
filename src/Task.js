import React, { Component } from 'react';
import './task.css';

export class Task extends Component {
  render() {
    return (
      <li><button className="button-link" id={this.props.task.ID} onClick={this.props.toggleModal}>{this.props.task.name}</button><span className="task-priority">{this.props.task.priority}</span></li>
    )
  };
};

export default Task;
