import React, { Component } from 'react';
import './App.css';
import { TaskList } from './TaskList';

export class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Task List</h1>
        </header>
        <main>
          <TaskList />
        </main>
      </div>
    );
  };
};

export default App;
