import { css } from 'glamor';
import React, { useState } from 'react';
import { theme } from '../theme';
import Button from 'react-bootstrap/Button';
import { formatDuration } from '../domain/utils';

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
  },
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
        <input type={'text'} placeholder={'Duration'} {...css(styles.input)} />
        <div {...css(styles.durationBtns)}>
          <span className='fas fa-plus' />
          <span className='fas fa-minus' />
        </div>
      </div>
      <Button variant={'secondary'}>{props.btnText}</Button>
    </div>
  );
};
