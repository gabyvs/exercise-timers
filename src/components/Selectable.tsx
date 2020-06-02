import React, { ReactNode, useState } from 'react';
import { Interval, IntervalGroup } from '../domain/types';
import { css } from 'glamor';
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  intervalOrGroup: {
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
  checked: {
    position: 'absolute',
    top: '.5rem',
    right: '.5rem',
  },
};

type Props = {
  intervalOrGroup: Interval | IntervalGroup;
  onToggle: (interval: Interval | IntervalGroup, isSelected: boolean) => void;
  children: ReactNode;
  styles: any;
};

export const Selectable: React.FC<Props> = (props: Props) => {
  const [selected, updateSelected] = useState(false);
  const onClick = () => {
    const newState = !selected;
    updateSelected(newState);
    props.onToggle(props.intervalOrGroup, newState);
  };
  return (
    <div {...css(styles.container)}>
      <div
        {...css(styles.intervalOrGroup, props.styles)}
        onClick={onClick}
        className={selected ? 'selected' : ''}
      >
        {selected ? (
          <span className='fas fa-check-circle' {...css(styles.checked)} />
        ) : (
          <span className='far fa-circle checkIcon' {...css(styles.checked)} />
        )}
        {props.children}
      </div>
    </div>
  );
};
