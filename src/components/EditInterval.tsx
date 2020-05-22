import React from 'react';
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
}

export const EditInterval = (props: Props) => {
  const duration = formatDuration(props.interval.duration);
  const isSelected = false;
  return (
    <div {...css(styles.container)}>
      <div {...css(styles.interval)}>
        {isSelected && (
          <span className='fas fa-check-circle' {...css(styles.checked)} />
        )}
        <div {...css(styles.name)}>{props.interval.name}</div>
        <div {...css(styles.duration)}>{duration}</div>
      </div>
    </div>
  );
};
