import { css } from 'glamor';
import React from 'react';
import Button from 'react-bootstrap/Button';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {},
};

export const RoutineSelector = () => {
  return (
    <div {...css(styles.container)}>
      <span {...css(styles.title)}>Rutina de hoy</span>
      <Button variant={'primary'}>Exercise!</Button>
    </div>
  );
};
