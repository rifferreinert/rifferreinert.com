export const start = time => ({
  type: 'START',
  time,
});

export const pause = time => ({
  type: 'PAUSE',
  time,
});

export const nextPeriod = time => ({
  type: 'NEXT_PERIOD',
  time,
});
