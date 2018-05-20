import moment from 'moment';

export const secondsRemaining = (period, time) => {
  let elapsedTime = period.get('cumTime');
  if (period.get('timerRunning')) {
    elapsedTime += time.diff(period.get('recentStart'));
  }
  const maxTime = {
    'pomodoro': 25 * 60 * 1000,
    'short_break': 5 * 60 * 1000,
    'long_break': 15 * 60 * 1000,
  };

  let seconds = Math.round((maxTime[period.get('type')] - elapsedTime) / 1000);
  return seconds > 0 ? seconds : 0;
};

export const shouldAlert = (period, time) => {
  if (secondsRemaining(period, time) == 0 && !period.get('hasAlerted')) {
    return true;
  }
  return false;
};

export const taskType = period => period ? period.get('type') : 'no_period';

