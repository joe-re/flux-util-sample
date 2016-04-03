import { dispatch } from './dispatcher';

export const ADD = 'todo/add';
export const DESTROY = 'todo/destroy';

const TodoAction = {
  add(params) { dispatch({ type: ADD, id: params.id, text: params.text }); },
  destroy(params) { dispatch({ type: DESTROY, id: params.id, text: params.text }); }
};

export default TodoAction;
