import React from 'react';
import ReactDOM from 'react-dom';
import CounterContainer from './container/counter';
import TodoContainer from './container/todo';

window.React = React;

ReactDOM.render(<CounterContainer />, document.getElementById('content'));
ReactDOM.render(<TodoContainer />, document.getElementById('todo'));
