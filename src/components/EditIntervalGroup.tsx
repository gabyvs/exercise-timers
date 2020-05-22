import React from 'react';
import { IntervalGroup } from '../domain/types';
import { css } from 'glamor';
import { EditInterval } from './EditInterval';
import { theme } from '../theme';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  group: {
    border: `1px solid ${theme.divider}`,
    backgroundColor: '#6c757c4d',
    padding: '2rem',
    margin: '1rem',
    position: 'relative',
  },
  checked: {
    position: 'absolute',
    top: '.5rem',
    right: '.5rem',
  },
};

interface Props {
  intervalGroup: IntervalGroup;
}

export const EditIntervalGroup = (props: Props) => {
  const intervals = props.intervalGroup.map((interval, index) => (
    <EditInterval interval={interval} key={index} />
  ));
  const isSelected = true;
  return (
    <div {...css(styles.container)}>
      <div {...css(styles.group)}>
        {isSelected && (
          <span className='fas fa-check-circle' {...css(styles.checked)} />
        )}
        {intervals}
      </div>
    </div>
  );
};
