import { css } from 'glamor';
import React from 'react';
import { RoutineSelector } from './RoutineSelector';
import { ConfigInterval } from './ConfigInterval';

const styles = {
  container: {
    width: '100%',
    display: 'grid',
  },
};

export const EditView = () => {
  return (
    <div {...css(styles.container)}>
      <RoutineSelector />
      <div>
        <ConfigInterval />
        <ConfigInterval />
      </div>
    </div>
  );
};
