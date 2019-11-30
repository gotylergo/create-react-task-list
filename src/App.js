import React, { Component } from 'react';
import './App.css';
import { TaskList } from './TaskList';
import { NewTaskModal } from './NewTaskModal';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShows: false,
      taskList: this.props.taskList,
    }
    this.toggleModal = e => {
      this.setState({
        modalShows: !(this.state.modalShows)
      });
    };
  }
  render() {
    console.log(this.state.taskList);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Task List</h1>
        </header>
        <main>
          <TaskList taskList={this.props.taskList} />
          <button onClick={e => { this.toggleModal(); }}>New Task</button>
          <NewTaskModal modalShows={this.state.modalShows} toggleModal={this.toggleModal} />
        </main>
      </div>
    );
  };
};

export default App;
