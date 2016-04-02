import { ReduceStore } from 'flux/utils';
import Dispatcher from './dispatcher';

class CounterStore extends ReduceStore {
  getInitialState() { return 0; }

  reduce(state, action) {
    switch (action.type) {
    case 'increment':
      return state + 1;

    case 'square':
      return state * state;

    default:
      return state;
    }
  }
}

const instance = new CounterStore(Dispatcher);
export default instance;
