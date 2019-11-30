import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let taskList = sessionStorage.getItem("taskList");

ReactDOM.render(<App taskList={taskList} />, document.getElementById('root'));

serviceWorker.unregister();
