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

export function formatTime(time: string | undefined): string {
  if (time === undefined) return '00';
  const num = parseInt(time);
  if (isFinite(num)) {
    if (num < 10) return '0' + num;
    if (num > 59) return '59';
    if (num < 0) return '00';
    return num.toString();
  }
  return '00';
}
