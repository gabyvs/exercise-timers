import { css } from 'glamor';
import React, { useState } from 'react';
import { theme } from '../theme';
import Button from 'react-bootstrap/Button';
import {
  add5Seconds,
  formatDuration,
  formatTime,
  isExercise,
  subtract5Seconds,
} from '../domain/utils';
import { Duration, Interval, IntervalType } from '../domain/types';

const styles = {
  container: {
    border: `1px solid ${theme.divider}`,
    backgroundColor: theme.secondary,
    padding: '1rem',
    display: 'grid',
    rowGap: '.5rem',
    gridTemplateRows: '1fr 1fr 1fr 1fr',
    alignItems: 'end',
  },
  btnsArea: {
    display: 'grid',
    columnGap: '.5rem',
    gridTemplateColumns: 'auto auto auto auto',
  },
  input: {
    border: 'none',
    borderBottom: `1px solid ${theme.divider}`,
    backgroundColor: 'transparent',
    textAlign: 'center',
    width: '100%',
    outline: 'none',
    '&:focus': {
      borderBottom: `1px solid ${theme.primary}`,
    },
  },
  durationArea: {
    position: 'relative',
    display: 'flex',
    outline: 'none',
  },
  durationInput: {
    border: 'none',
    borderBottom: `1px solid ${theme.divider}`,
    backgroundColor: 'transparent',
    outline: 'none',
    width: '50%',
  },
  minutes: {
    textAlign: 'right',
  },
  seconds: {},
  durationBtns: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: 0,
    bottom: 0,
    '& .fas': {
      color: theme.onSecondary,
      padding: '.2rem',
      borderRadius: '4px',
      fontSize: '.5rem',
      '&:hover': {
        backgroundColor: 'lightgray',
        cursor: 'pointer',
      },
    },
  },
};

interface Props {
  durations: number[];
  onAddInterval: (interval: Interval) => void;
  type: IntervalType;
  defaultDuration?: number;
}

export const ConfigInterval = (props: Props) => {
  const [name, updateName] = useState('');
  const [minutes, updateMinutes] = useState('00');
  const [seconds, updateSeconds] = useState('00');

  const setDuration = (seconds: number) => {
    updateMinutes(formatTime(seconds / 60));
    updateSeconds(formatTime(seconds % 60));
  };

  const change = (callback: (d: Duration) => Duration) => {
    const newDuration = callback({
      minutes: parseInt(minutes),
      seconds: parseInt(seconds),
    });
    updateMinutes(formatTime(newDuration.minutes));
    updateSeconds(formatTime(newDuration.seconds));
  };

  const addInterval = () => {
    const duration = parseInt(minutes) * 60 + parseInt(seconds);
    props.onAddInterval({
      id: Date.now(),
      name: props.type === 'rest' ? 'Rest' : name,
      type: props.type,
      duration,
    });
    updateName('');
    updateMinutes('00');
    updateSeconds('00');
  };

  const buttons = props.durations.map((duration) => {
    const label = formatDuration(duration);
    return (
      <Button
        variant={'outline-secondary'}
        key={duration}
        onClick={() => setDuration(duration)}
      >
        {label}
      </Button>
    );
  });

  return (
    <div {...css(styles.container)}>
      <div {...css(styles.btnsArea)}>{buttons}</div>
      {isExercise(props.type) ? (
        <input
          type={'text'}
          placeholder={'Name'}
          {...css(styles.input)}
          value={name}
          onChange={(e) => updateName(e.target.value)}
        />
      ) : (
        <div />
      )}
      <div {...css(styles.durationArea)}>
        <input
          type={'number'}
          {...css(styles.durationInput, styles.minutes)}
          min={0}
          max={59}
          value={minutes}
          onChange={(e) => updateMinutes(formatTime(e.target.value))}
        />
        <span>:</span>
        <input
          type={'number'}
          {...css(styles.durationInput, styles.seconds)}
          min={0}
          max={59}
          value={seconds}
          onChange={(e) => updateSeconds(formatTime(e.target.value))}
        />
        <div {...css(styles.durationBtns)}>
          <span className='fas fa-plus' onClick={() => change(add5Seconds)} />
          <span
            className='fas fa-minus'
            onClick={() => change(subtract5Seconds)}
          />
        </div>
      </div>
      <Button variant={'secondary'} onClick={addInterval}>
        {isExercise(props.type) ? 'Add Exercise' : 'Add Rest'}
      </Button>
    </div>
  );
};
