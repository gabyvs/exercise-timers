import React from 'react';
import { Routine } from '../domain/types';
import { isIntervalGroup } from '../domain/utils';
import { EditIntervalGroup } from './EditIntervalGroup';
import { EditInterval } from './EditInterval';
import Button from 'react-bootstrap/Button';
import { css } from 'glamor';

const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  btn: {
    margin: '0 .5rem',
  },
};

interface Props {
  routine: Routine;
}

export const EditRoutine = (props: Props) => {
  const intervals = props.routine.intervals.map((interval, index: number) => {
    if (isIntervalGroup(interval))
      return <EditIntervalGroup intervalGroup={interval} key={index} />;
    return <EditInterval interval={interval} key={index} />;
  });
  return (
    <div>
      <div {...css(styles.buttonContainer)}>
        <Button
          variant={'outline-secondary'}
          key={'delete'}
          {...css(styles.btn)}
        >
          Delete
        </Button>
        <Button
          variant={'outline-secondary'}
          key={'group'}
          {...css(styles.btn)}
        >
          Group
        </Button>
        <Button
          variant={'outline-secondary'}
          key={'ungroup'}
          {...css(styles.btn)}
        >
          Unroup
        </Button>
        <Button
          variant={'outline-secondary'}
          key={'repeat'}
          {...css(styles.btn)}
        >
          Repeat
        </Button>
      </div>
      <div>{intervals}</div>
    </div>
  );
};
