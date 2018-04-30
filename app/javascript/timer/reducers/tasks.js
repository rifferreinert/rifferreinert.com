import { List, Map } from 'immutable';

const tasksReducerDefaultState = List();

export default (state = tasksReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      const { id, title, details, notes } = action.task;
      return state.push(Map({
        id,
        title,
        details,
        notes,
        complete: false,
      }));
    } 
    case 'FINISH_TASK': {
      const taskIndex = state.findIndex(task => task.get('id') === action.id);
      const task = state.get(taskIndex);
            
      return state.set(
        taskIndex,
        task.set('complete', true),
      );
    }
    case 'EDIT_TASK': {
      const taskIndex = state.findIndex(task => task.get('id') === action.id);
      const task = state.get(taskIndex);
      return state.set(
        taskIndex,
        task.merge(action.task),
      );
    }
    case 'DELETE_TASK': {
      const taskIndex = state.findIndex(task => task.get('id') === action.id);
      return state.delete(taskIndex);
    }
    default:
      return state;
  }
};
