import moment from 'moment';

export const updateTime = () => ({
  type: 'UPDATE_TIME',
  time: moment(),
});
