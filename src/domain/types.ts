export type IntervalGroup = {
  id: number;
  intervals: Interval[];
};

export type IntervalType = 'exercise' | 'rest';

export type Interval = {
  id: number;
  name: string;
  duration: number;
  type: IntervalType;
};

export type Routine = {
  name: string;
  intervals: (Interval | IntervalGroup)[];
};

export type Duration = {
  minutes: number;
  seconds: number;
};
