import { createStore, combineReducers } from "redux";

import timeReducer from '../reducers/time';
import periodsReducer from '../reducers/periods';
import tasksReducer from '../reducers/tasks';

export default () => {
  const store = createStore(combineReducers({
    time: timeReducer,
    periods: periodsReducer,
    tasks: tasksReducer,
  }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return store;
};
