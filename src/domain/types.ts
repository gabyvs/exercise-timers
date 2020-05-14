type IntervalGroup = Interval[];

type Interval = {
  name: string;
  duration: number;
};

export type Routine = {
  name: string;
  intervals: (Interval | IntervalGroup)[];
};
