import { List, Map } from 'immutable';

const periodsReducerDefaultState = List();

const newPeriod = (type, recentStart) => {
  return Map({
    cumTime: 0,
    recentStart,
    hasAlerted: false,
    timerRunning: true,
    type,
  });
};
/**
 * @description Returns the type of the next period
 * @param {List<Map>} periods list of periods so far
 */
const nextPeriodType = (periods) => {
  if (periods.size === 0) {
    return 'pomodoro';
  }
  if (periods.last().get('type') !== 'pomodoro') {
    return 'pomodoro';
  }
  if (periods.reverse()
    .takeUntil(period => period.get('type') === 'long_break')
    .size > 7) {
    return 'long_break';
  }
  return 'short_break';

};

export default (state = periodsReducerDefaultState, action) => {
  switch (action.type) {
    case 'NEXT_PERIOD':
      // if there is a current period, make sure we stop it first
      if (state.size > 0) {
        state = state.set(
          -1,
          state.last()
            .set('timerRunning', false),
        );
      }
      return state.push(newPeriod(nextPeriodType(state), action.time));

    case 'START':
      return state.set(
        -1,
        state.last()
          .set('recentStart', action.time)
          .set('timerRunning', true),
      );
    case 'PAUSE':
      return state.set(
        -1,
        state.last()
          .set(
            'cumTime',
            state.last().get('cumTime') + action.time.diff(state.last().get('recentStart')),
        ).set('timerRunning', false),
      );
    case 'ALERTED':
      return state.set(-1, state.last().set('hasAlerted', true));
    default:
      return state;
  }
};
