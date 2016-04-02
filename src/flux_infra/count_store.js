import { ReduceStore } from 'flux/utils';
import Dispatcher from './dispatcher';
import * as CounterAction from './actions';

class CounterStore extends ReduceStore {
  getInitialState() { return 0; }

  reduce(state, action) {
    switch (action.type) {
    case CounterAction.INCREMENT:
      return state + 1;

    case CounterAction.DECREMENT:
      return state - 1;

    default:
      return state;
    }
  }
}

const instance = new CounterStore(Dispatcher);
export default instance;
