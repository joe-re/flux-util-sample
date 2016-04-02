import { dispatch } from './dispatcher';

export const INCREMENT = 'counter/increment';
export const DECREMENT = 'counter/decrement';

const CounterAction = {
  increment() { dispatch({ type: INCREMENT }); },
  decrement() { dispatch({ type: DECREMENT }); }
};

export default CounterAction;
