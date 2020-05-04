import { css } from 'glamor';
import React from 'react';
import { RoutineSelector } from './RoutineSelector';
import { ConfigInterval } from './ConfigInterval';
import Button from 'react-bootstrap/Button';

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

export const EditView = () => {
  return (
    <div {...css(styles.container)}>
      <RoutineSelector />
      <div {...css(styles.configArea)}>
        <ConfigInterval />
        <ConfigInterval />
      </div>
      <div {...css(styles.cycleArea)}>
        <Button variant={'outline-secondary'}>Add Cycle</Button>
      </div>
    </div>
  );
};
