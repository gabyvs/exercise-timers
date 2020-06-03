import React from 'react';
import { IntervalGroup, Interval } from '../domain/types';
import { css } from 'glamor';
import { EditInterval } from './EditInterval';
import { theme } from '../theme';
import { Selectable } from './Selectable';

const styles = {
  group: {
    border: `1px solid ${theme.divider}`,
    backgroundColor: 'rgba(108,117,124,0.3)',
    padding: '2rem',
  },
  members: {
    pointerEvents: 'none',
  },
};

interface Props {
  intervalGroup: IntervalGroup;
  onToggle: (
    intervalOrGroup: Interval | IntervalGroup,
    isSelected: boolean
  ) => void;
}

export const EditIntervalGroup = (props: Props) => {
  const intervals = props.intervalGroup.intervals.map((interval) => (
    <EditInterval
      interval={interval}
      key={interval.id}
      onToggle={props.onToggle}
    />
  ));

  return (
    <Selectable
      onToggle={props.onToggle}
      intervalOrGroup={props.intervalGroup}
      styles={styles.group}
    >
      <div {...css(styles.members)}>{intervals}</div>
    </Selectable>
  );
};
