import React, { useState } from 'react';
import { IntervalGroup, Interval } from '../domain/types';
import { css } from 'glamor';
import { EditInterval } from './EditInterval';
import { theme } from '../theme';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  group: {
    border: `1px solid ${theme.divider}`,
    backgroundColor: 'rgba(108,117,124,0.3)',
    padding: '2rem',
    margin: '1rem',
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
  members: {
    pointerEvents: 'none',
  },
  checked: {
    position: 'absolute',
    top: '.5rem',
    right: '.5rem',
  },
};

interface Props {
  intervalGroup: IntervalGroup;
  onToggleInterval: (interval: Interval, isSelected: boolean) => void;
  onToggleGroup: (group: IntervalGroup, isSelected: boolean) => void;
}

export const EditIntervalGroup = (props: Props) => {
  const [selected, updateSelected] = useState(false);
  const intervals = props.intervalGroup.intervals.map((interval) => (
    <EditInterval
      interval={interval}
      key={interval.id}
      onToggle={props.onToggleInterval}
    />
  ));

  const onClick = () => {
    const newState = !selected;
    updateSelected(newState);
    props.onToggleGroup(props.intervalGroup, newState);
  };

  return (
    <div {...css(styles.container)}>
      <div
        {...css(styles.group)}
        onClick={onClick}
        className={selected ? 'selected' : ''}
      >
        {selected ? (
          <span className='fas fa-check-circle' {...css(styles.checked)} />
        ) : (
          <span className='far fa-circle checkIcon' {...css(styles.checked)} />
        )}
        <div {...css(styles.members)}>{intervals}</div>
      </div>
    </div>
  );
};
