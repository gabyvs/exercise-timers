import React from 'react';
import { Routine } from '../domain/types';

interface Props {
  routine: Routine;
}

export const EditRoutine = (props: Props) => {
  return (
    <div>
      <div>Display routine edit actions</div>
      <div>Display intervals here</div>
    </div>
  );
};
