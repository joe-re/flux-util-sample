import { MapStore } from 'flux/utils';
import Dispatcher from './dispatcher';
import * as TodoAction from './todo_actions';

class TodoStore extends MapStore {
  reduce(state, action) {
    switch (action.type) {
    case TodoAction.ADD:
      return state.set(action.id, {
        id: action.id, text: action.text
      });

    default:
      return state;
    }
  }
}

const instance = new TodoStore(Dispatcher);
export default instance;
