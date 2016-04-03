import React from 'react';
import TodoAction from '../flux_infra/todo_actions';

export default class TodoUI extends React.Component {
  constructor() {
    super();
    this.state = { id: 0 };
  }

  handleClickAddButton() {
    TodoAction.add({
      id: ++this.state.id,
      text: this.refs.todoInput.value
    });
    this.refs.todoInput.value = '';
  }

  render() {
    const todoList = this.props.todoList.toArray().map((todo) => <div key={todo.id}>{todo.text}</div>);
    return(
      <div className="todo">
        <h1>TODO</h1>
        <input ref="todoInput" />
        <button onClick={this.handleClickAddButton.bind(this)}>add</button>
        <div>{todoList}</div>
      </div>
    );
  }
};
