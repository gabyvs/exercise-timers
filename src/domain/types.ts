export type IntervalGroup = Interval[];

export type IntervalType = 'exercise' | 'rest';

export type Interval = {
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
