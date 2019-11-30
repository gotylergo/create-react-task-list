import React, { Component } from 'react';
import './new-task-modal.css';

export class NewTaskModal extends Component {
  render() {
    if(!this.props.modalShows) {
      return null;
    }
    return (
      <div id="NewTaskModal">
        <h2>New Task</h2>
        <button onClick={e => this.props.toggleModal()}>Cancel</button>
      </div>
    )
  }
}

export default NewTaskModal;