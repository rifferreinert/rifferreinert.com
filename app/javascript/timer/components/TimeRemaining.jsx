import React from 'react';
import { connect } from 'react-redux';

import { secondsRemaining } from '../selectors/periods';

const TimeRemaining = (props) => {
  const positive = Math.sign(props.totalSeconds);
  const minutes = positive >= 0 ?
    Math.floor(props.totalSeconds / 60)
      .toString()
      .padStart(2, '0')
      .padStart(3, '\u00a0') :
    Math.abs(Math.ceil(props.totalSeconds / 60))
      .toString()
      .padStart(2, '0')
      .padStart(3, '-');
  const seconds = Math.abs(props.totalSeconds % 60).toString().padStart(2, '0');
  const displayTime = `${minutes}:${seconds}`;
  return (
    <p>Time Left: {displayTime}</p>
  );
};

const mapStateToProps = (state) => {
  return {
    totalSeconds: secondsRemaining(state.periods.last(), state.time),
  };
};

export default connect(mapStateToProps)(TimeRemaining)

