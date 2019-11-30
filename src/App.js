import React, { Component } from 'react';
import './App.css';
import { TaskList } from './TaskList';
import { NewTaskModal } from './NewTaskModal';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShows: false,
    }
    this.toggleModal = e => {
      this.setState({
        modalShows: !(this.state.modalShows)
      });
    };
    // this.toggleModal = this.toggleModal.bind(this);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Task List</h1>
        </header>
        <main>
          <TaskList />
          <button onClick={e => { this.toggleModal(); }}>New Task</button>
          <NewTaskModal modalShows={this.state.modalShows} toggleModal={this.toggleModal} />
        </main>
      </div>
    );
  };
};

export default App;
