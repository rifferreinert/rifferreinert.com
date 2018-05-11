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

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('timerapp'));