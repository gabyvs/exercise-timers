import { css } from 'glamor';
import React from 'react';
import { RoutineSelector } from './RoutineSelector';
import { ConfigInterval } from './ConfigInterval';
import { Routine } from '../domain/types';
import { EditRoutine } from './EditRoutine';

const styles = {
  container: {
    width: '100%',
    display: 'grid',
    rowGap: '1rem',
  },
  configArea: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    columnGap: '1rem',
  },
  cycleArea: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const routine: Routine = {
  name: 'Rutina de hoy',
  intervals: [
    [
      { name: 'Run in place', duration: 30 },
      { name: 'Rest', duration: 5 },
      { name: 'Push Ups', duration: 30 },
    ],
    { name: 'Rest', duration: 90 },
    { name: 'Jump rope', duration: 30 },
  ],
};

export const EditView = () => {
  return (
    <div {...css(styles.container)}>
      <RoutineSelector />
      <div {...css(styles.configArea)}>
        <ConfigInterval
          durations={[20, 30, 45, 60]}
          defaultDuration={30}
          btnText={'Add Exercise'}
          showName={true}
        />
        <ConfigInterval
          durations={[5, 10, 60, 90]}
          defaultDuration={5}
          btnText={'Add Rest'}
          showName={false}
        />
      </div>
      <EditRoutine routine={routine} />
    </div>
  );
};
