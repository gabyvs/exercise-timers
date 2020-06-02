import React, { useState } from 'react';
import { Interval } from '../domain/types';
import { css } from 'glamor';
import { formatDuration } from '../domain/utils';
import { theme } from '../theme';
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  interval: {
    border: `1px solid ${theme.divider}`,
    backgroundColor: theme.secondary,
    display: 'grid',
    gridRowGap: '.5rem',
    justifyContent: 'center',
    padding: '.5rem',
    width: '15rem',
    position: 'relative',
    '&.selected': {
      backgroundColor: 'rgba(108,117,124,0.5)',
    },
    '& .checkIcon': {
      display: 'none',
    },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(108,117,124,0.5)',
      '& > .checkIcon': {
        display: 'block',
      },
    },
  },
  name: {
    textAlign: 'center',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  duration: {
    textAlign: 'center',
  },
  checked: {
    position: 'absolute',
    top: '.5rem',
    right: '.5rem',
  },
};

interface Props {
  interval: Interval;
  onToggle: (interval: Interval, isSelected: boolean) => void;
}

export const EditInterval = (props: Props) => {
  const duration = formatDuration(props.interval.duration);
  const [selected, updateSelected] = useState(false);
  const onClick = () => {
    const newState = !selected;
    updateSelected(newState);
    props.onToggle(props.interval, newState);
  };
  return (
    <div {...css(styles.container)}>
      <div
        {...css(styles.interval)}
        onClick={onClick}
        className={selected ? 'selected' : ''}
      >
        {selected ? (
          <span className='fas fa-check-circle' {...css(styles.checked)} />
        ) : (
          <span className='far fa-circle checkIcon' {...css(styles.checked)} />
        )}
        <div {...css(styles.name)}>{props.interval.name}</div>
        <div {...css(styles.duration)}>{duration}</div>
      </div>
    </div>
  );
};
