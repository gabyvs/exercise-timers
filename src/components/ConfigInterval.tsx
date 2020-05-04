import { css } from 'glamor';
import React from 'react';
import { theme } from '../theme';
import Button from 'react-bootstrap/Button';

const styles = {
  container: {
    border: `1px solid ${theme.divider}`,
    backgroundColor: theme.secondary,
    padding: '1rem',
    display: 'grid',
    rowGap: '1rem',
  },
  btnsArea: {
    display: 'grid',
    columnGap: '.5rem',
    gridTemplateColumns: 'auto auto auto auto',
  },
  input: {
    border: 'none',
    borderBottom: `1px solid ${theme.divider}`,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  durationArea: {},
  durationBtns: {},
};

export const ConfigInterval = () => {
  return (
    <div {...css(styles.container)}>
      <div {...css(styles.btnsArea)}>
        <Button variant={'outline-secondary'}>00:20</Button>
        <Button variant={'outline-secondary'}>00:30</Button>
        <Button variant={'outline-secondary'}>00:45</Button>
        <Button variant={'outline-secondary'}>01:00</Button>
      </div>
      <input type={'text'} placeholder={'Name'} {...css(styles.input)} />
      <div {...css(styles.durationArea)}>
        <input type={'text'} placeholder={'Duration'} {...css(styles.input)} />
        <div {...css(styles.durationBtns)}>
          <span className='fas fa-plus'></span>
          <span className='fas fa-minus'></span>
        </div>
      </div>
      <Button variant={'outline-primary'}>Add Interval</Button>
    </div>
  );
};
