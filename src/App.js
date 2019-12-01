import React, { Component } from 'react';
import './App.css';
import { TaskList } from './TaskList';
import { TaskModal } from './TaskModal';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShows: false,
      modalTaskName: '',
      modalTaskPriority: 'High',
      taskList: [],
    }

    this.toggleModal = () => {
      this.setState({
        modalShows: !(this.state.modalShows),
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

    this.updateTaskList = () => {
      // If task exists, update the task
      if (this.state.taskList.some(i => i.name === this.state.modalTaskName)) {
        let thisTaskIndex = this.state.taskList.findIndex(({name}) => name === this.state.modalTaskName);
        let newList = [...this.state.taskList];
        newList[thisTaskIndex] = {
          name: this.state.modalTaskName,
          priority: this.state.modalTaskPriority,
        };
        this.toggleModal();
        return this.setState({
          taskList: newList,
        });
      }
      // If task does not exist, create it
      else {
        this.toggleModal();
        let task = {
          name: this.state.modalTaskName,
          priority: this.state.modalTaskPriority,
        }
        return this.setState((prevState) => ({
          taskList: [...prevState.taskList, task]
        }))
      }
    }

    this.setModalTaskName = (e) => {
      this.setState({
        modalTaskName: e.target.value,
      })
    }

    this.setModalTaskName = this.setModalTaskName.bind(this);

    this.setModalTaskPriority = (e) => {
      this.setState({
        modalTaskPriority: e.target.value,
      })
    }

    this.setModalTaskPriority = this.setModalTaskPriority.bind(this);

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
          <TaskList taskList={this.state.taskList} toggleModal={this.toggleModal} />
          <button onClick={e => { this.toggleModal(); }}>New Task</button>
          <TaskModal modalShows={this.state.modalShows} toggleModal={this.toggleModal} updateTaskList={this.updateTaskList} setModalTaskName={(e) => this.setModalTaskName(e)} setModalTaskPriority={(e) => this.setModalTaskPriority(e)} />
        </main>
      </div>
    );
  };
  componentDidUpdate() {
    this.syncStateToSessionStorage();
  }
};

export default App;
