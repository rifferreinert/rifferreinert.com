import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap';
import { Howl } from 'howler';

import configureStore from '../timer/store/configureStore';
import { updateTime } from '../timer/actions/time';
import { nextPeriod } from '../timer/actions/periods'
import { addTask, finishTask } from '../timer/actions/tasks';
import AppRouter from '../timer/routers/AppRouter';
import { getTimeUp$ } from '../timer/observables/state';
import dingmp3 from '../timer/assets/sounds/ding.mp3';
import dingwebm from '../timer/assets/sounds/ding.webm';
import { alerted } from '../timer/actions/periods';

const store = configureStore();

store.dispatch(updateTime());
setInterval(() => {
  store.dispatch(updateTime());
}, 100);

const timeUp$ = getTimeUp$(store);
timeUp$.subscribe((state) => {
  store.dispatch(alerted());
  const sound = new Howl({ src: [dingwebm, dingmp3] });
  sound.play();
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('timerapp'));