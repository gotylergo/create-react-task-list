import React, { Component } from 'react';
import './App.css';
import { TaskList } from './TaskList';
import { NewTaskModal } from './NewTaskModal';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShows: false,
      taskList: [],
    }

    this.toggleModal = e => {
      this.setState({
        modalShows: !(this.state.modalShows)
      });
    };

    this.syncStateFromSessionStorage = () => {
      let taskList = JSON.parse(window.sessionStorage.getItem('taskList'));
      // Check if sessionStorage matches state
      if (taskList !== this.state.taskList) {
        // If task list in SessionStorage is not set, set it to be a blank array
        if (taskList === null | taskList === undefined) {
          let newTaskList = [];
          sessionStorage.setItem('taskList', JSON.stringify(newTaskList));
          return this.setState({
            taskList: newTaskList,
          });
          // If task list exists in session storage, sync it to state
        } else if (Array.isArray(taskList)) {
          return this.setState({
            taskList,
          });
        } else {
          return console.error('Application error. Task list is not an array. taskList:', taskList);
        }
      }
    }

    this.syncStateToSessionStorage = () => {
      sessionStorage.setItem('taskList', JSON.stringify(this.state.taskList));
    }

    this.updateTaskList = (action, task) => {
      switch (action) {
        case 'create':
          if (this.state.taskList.some(i => i.name === task.name)) {
            alert(`Task '${task.name}' already exists! Choose another task name or edit the existing task.`);
            return;
          }
          this.toggleModal();
          return this.setState((prevState) => ({
            taskList: [...prevState.taskList, task]
          }))
        case 'update':
          return console.log('update hit');
        case 'delete':
          return console.log('delete hit');
        default:
          console.error('Invalid action set. Action:', action);
          console.error('Task:', task);
      }
    }
  }
  componentDidMount() {
    this.syncStateFromSessionStorage();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Task List</h1>
        </header>
        <main>
          <TaskList taskList={this.state.taskList} />
          <button onClick={e => { this.toggleModal(); }}>New Task</button>
          <NewTaskModal modalShows={this.state.modalShows} toggleModal={this.toggleModal} updateTaskList={this.updateTaskList} />
        </main>
      </div>
    );
  };
  componentWillUnmount() {
    this.syncStateToSessionStorage();
  }
};

export default App;
