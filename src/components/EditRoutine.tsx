import React, { useState } from 'react';
import { IntervalGroup, Interval, Routine } from '../domain/types';
import { isIntervalGroup } from '../domain/utils';
import { EditIntervalGroup } from './EditIntervalGroup';
import { EditInterval } from './EditInterval';
import Button from 'react-bootstrap/Button';
import { css } from 'glamor';

const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '2rem',
  },
  btn: {
    margin: '0 .5rem',
  },
};

interface Props {
  routine: Routine;
}

export const EditRoutine = (props: Props) => {
  const [isIntervalSelected, updateIsIntervalSelected] = useState(false);
  const [isGroupSelected, updateIsGroupSelected] = useState(false);
  const [selectedIntervals, updateSelectedIntervals] = useState(
    [] as Interval[]
  );
  const [selectedGroups, updateSelectedGroups] = useState(
    [] as IntervalGroup[]
  );

  const onToggleGroup = (group: IntervalGroup, isSelected: boolean) => {
    let updated: IntervalGroup[];
    if (isSelected) {
      updated = [...selectedGroups, group];
    } else {
      updated = selectedGroups.filter((s) => s.id !== group.id);
    }
    updateSelectedGroups(updated);
    updateIsGroupSelected(updated.length > 0);
  };

  const onToggleInterval = (interval: Interval, isSelected: boolean) => {
    let updated: Interval[];
    if (isSelected) {
      updated = [...selectedIntervals, interval];
    } else {
      updated = selectedIntervals.filter((s) => s.id !== interval.id);
    }
    updateSelectedIntervals(updated);
    updateIsIntervalSelected(updated.length > 0);
  };

  const intervals = props.routine.intervals.map((interval, index: number) => {
    if (isIntervalGroup(interval))
      return (
        <EditIntervalGroup
          intervalGroup={interval}
          key={index}
          onToggleGroup={onToggleGroup}
          onToggleInterval={onToggleInterval}
        />
      );
    return (
      <EditInterval
        interval={interval}
        key={index}
        onToggle={onToggleInterval}
      />
    );
  });
  return (
    <div>
      <div {...css(styles.buttonContainer)}>
        {(isGroupSelected || isIntervalSelected) && (
          <Button
            variant={'outline-secondary'}
            key={'delete'}
            {...css(styles.btn)}
          >
            Delete
          </Button>
        )}
        {isIntervalSelected && !isGroupSelected && (
          <Button
            variant={'outline-secondary'}
            key={'group'}
            {...css(styles.btn)}
          >
            Group
          </Button>
        )}
        {isGroupSelected && !isIntervalSelected && (
          <Button
            variant={'outline-secondary'}
            key={'ungroup'}
            {...css(styles.btn)}
          >
            Ungroup
          </Button>
        )}
        {(isIntervalSelected || isGroupSelected) && (
          <Button
            variant={'outline-secondary'}
            key={'repeat'}
            {...css(styles.btn)}
          >
            Repeat
          </Button>
        )}
      </div>
      <div>{intervals}</div>
    </div>
  );
};
