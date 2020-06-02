import React from 'react';
import { Interval, IntervalGroup } from '../domain/types';
import { css } from 'glamor';
import { formatDuration } from '../domain/utils';
import { theme } from '../theme';
import { Selectable } from './Selectable';

const styles = {
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
  onToggle: (
    intervalOrGroup: Interval | IntervalGroup,
    isSelected: boolean
  ) => void;
}

export const EditInterval = (props: Props) => {
  const duration = formatDuration(props.interval.duration);
  return (
    <Selectable
      onToggle={props.onToggle}
      intervalOrGroup={props.interval}
      styles={styles.interval}
    >
      <div {...css(styles.name)}>{props.interval.name}</div>
      <div {...css(styles.duration)}>{duration}</div>
    </Selectable>
  );
};
