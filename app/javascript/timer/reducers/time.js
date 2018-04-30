import moment from 'moment';

const timeReducerDefaultState = moment();

export default (state = timeReducerDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_TIME':
      return action.time;
    default:
      return state;
  }
};
