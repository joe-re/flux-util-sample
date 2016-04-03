import { Component } from 'react';
import { Container } from 'flux/utils';
import TodoStore from './../flux_infra/todo_store';
import TodoUI from './../components/todo_ui';

class CounterContainer extends Component {
  static getStores() {
    return [ TodoStore ];
  }

  static calculateState(prevState) {
    return {
      todoList: TodoStore.getState()
    };
  }

  render() {
    return <TodoUI {...this.state} />;
  }
}

export default Container.create(CounterContainer);
