import React from 'react';
import { connect } from 'react-redux';

import { nextPeriod } from '../actions/periods';

const StartTimer = (props) => {
  const onStartClick = () => {
    props.dispatch(nextPeriod(props.time));
  };

  return (
    <div>
      <button onClick={onStartClick}>
        Start Timer
      </button>
    </div>
  );
};

const mapStateToProps = state => (
  { time: state.time }
);

export default connect(mapStateToProps)(StartTimer);