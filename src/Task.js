import React, { Component } from 'react';
import './task.css';

export class Task extends Component {
  render() {
    return (
      <li><button className="button-link" onClick={this.props.toggleModal}>{this.props.task.name}</button>  ({this.props.task.priority})</li>
    )
  };
};

export default Task;
