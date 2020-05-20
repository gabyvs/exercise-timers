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
};

interface Props {
  interval: Interval;
}

export const EditInterval = (props: Props) => {
  const duration = formatDuration(props.interval.duration);
  return (
    <div {...css(styles.container)}>
      <div {...css(styles.interval)}>
        <div {...css(styles.name)}>{props.interval.name}</div>
        <div {...css(styles.duration)}>{duration}</div>
      </div>
    </div>
  );
};
