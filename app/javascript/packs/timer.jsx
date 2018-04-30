import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap';

import configureStore from '../timer/store/configureStore';
import { updateTime } from '../timer/actions/time';
import { nextPeriod } from '../timer/actions/periods'
import { addTask, finishTask } from '../timer/actions/tasks';
import AppRouter from '../timer/routers/AppRouter';

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

ReactDOM.render(jsx, document.getElementById('timerapp'));