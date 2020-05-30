import { css } from 'glamor';
import React, { useState } from 'react';
import { RoutineSelector } from './RoutineSelector';
import { ConfigInterval } from './ConfigInterval';
import { Routine, Interval } from '../domain/types';
import { EditRoutine } from './EditRoutine';
import { addIntervalToRoutine } from '../domain/utils';

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

const initialRoutine: Routine = {
  name: 'Rutina de hoy',
  intervals: [
    {
      id: 1,
      intervals: [
        { name: 'Run in place', duration: 30, type: 'exercise', id: 1 },
        { name: 'Rest', duration: 5, type: 'rest', id: 2 },
        { name: 'Push Ups', duration: 30, type: 'exercise', id: 3 },
      ],
    },
    { name: 'Rest', duration: 90, type: 'rest', id: 4 },
    { name: 'Jump rope', duration: 30, type: 'exercise', id: 5 },
  ],
};

export const EditView = () => {
  const [routine, updateRoutine] = useState(initialRoutine);

  const addInterval = (interval: Interval) => {
    updateRoutine(addIntervalToRoutine(routine, interval));
  };

  return (
    <div {...css(styles.container)}>
      <RoutineSelector />
      <div {...css(styles.configArea)}>
        <ConfigInterval
          durations={[20, 30, 45, 60]}
          defaultDuration={30}
          type={'exercise'}
          onAddInterval={addInterval}
        />
        <ConfigInterval
          durations={[5, 10, 60, 90]}
          defaultDuration={5}
          type={'rest'}
          onAddInterval={addInterval}
        />
      </div>
      <EditRoutine routine={routine} />
    </div>
  );
};
