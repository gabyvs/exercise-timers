import { css } from 'glamor';
import React, { useState } from 'react';
import { theme } from '../theme';
import Button from 'react-bootstrap/Button';
import { formatDuration, formatTime } from '../domain/utils';

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
      },
    },
  },
};

interface Props {
  durations: number[];
  btnText?: string;
  defaultDuration?: number;
  showName?: boolean;
}

export const ConfigInterval = (props: Props) => {
  const [name, updateName] = useState('');
  const [minutes, updateMinutes] = useState('00');
  const [seconds, updateSeconds] = useState('00');

  const buttons = props.durations.map((duration) => {
    const label = formatDuration(duration);
    return (
      <Button variant={'outline-secondary'} key={duration}>
        {label}
      </Button>
    );
  });
  return (
    <div {...css(styles.container)}>
      <div {...css(styles.btnsArea)}>{buttons}</div>
      {props.showName ? (
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
          <span className='fas fa-plus' />
          <span className='fas fa-minus' />
        </div>
      </div>
      <Button variant={'secondary'}>{props.btnText}</Button>
    </div>
  );
};
