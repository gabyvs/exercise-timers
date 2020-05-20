export type IntervalGroup = Interval[];

export type Interval = {
  name: string;
  duration: number;
};

export type Routine = {
  name: string;
  intervals: (Interval | IntervalGroup)[];
};
