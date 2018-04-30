import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store/configureStore';
import { updateTime } from './actions/time';
import { nextPeriod } from './actions/periods'
import { addTask, finishTask } from './actions/tasks';
import AppRouter from './routers/AppRouter';

const store = configureStore();

store.dispatch(updateTime());
setInterval(() => {
  store.dispatch(updateTime());
}, 100);

store.dispatch(addTask({
  title: 'first task',
  details: 'here are the details',
  notes: 'some first notes',
}));
store.dispatch(addTask({
  title: 'second task',
  details: 'second task details',
  notes: 'some second notes',
}));
store.dispatch(addTask({
  title: 'third task',
  details: 'third task details',
  notes: 'some third notes',
}));

// store.dispatch(nextPeriod(store.getState().time));

const jsx = (
<Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));