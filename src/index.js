import React from 'react';
import ReactDOM from 'react-dom';
import CounterContainer from './container/counter';

window.React = React;

ReactDOM.render(<CounterContainer />, document.getElementById('content'));
