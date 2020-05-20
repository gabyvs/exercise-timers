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
  },
};

interface Props {
  intervalGroup: IntervalGroup;
}

export const EditIntervalGroup = (props: Props) => {
  const intervals = props.intervalGroup.map((interval, index) => (
    <EditInterval interval={interval} key={index} />
  ));
  return (
    <div {...css(styles.container)}>
      <div {...css(styles.group)}>{intervals}</div>
    </div>
  );
};
