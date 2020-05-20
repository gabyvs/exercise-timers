import { IntervalGroup, Interval } from './types';
import startOfDay from 'date-fns/startOfDay';
import format from 'date-fns/format';
import add from 'date-fns/add';

const today = startOfDay(new Date());

export function isInterval(value: Interval | IntervalGroup): value is Interval {
  return !isIntervalGroup(value);
}

export function isIntervalGroup(
  value: Interval | IntervalGroup
): value is IntervalGroup {
  return Array.isArray(value);
}

export function formatDuration(seconds: number): string {
  return format(add(today, { seconds }), 'mm:ss');
}
