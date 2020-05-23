import { IntervalGroup, Interval, Duration } from './types';
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

export function formatTime(time: string | number | undefined): string {
  if (time === undefined) return '00';
  const num = typeof time === 'number' ? time : parseInt(time);
  if (isFinite(num)) {
    if (num < 0) return '00';
    if (num < 10) return '0' + num;
    if (num > 59) return '59';
    return num.toString();
  }
  return '00';
}

export function add5Seconds(current: Duration): Duration {
  const s = current.seconds;
  if (s < 55) return { ...current, seconds: current.seconds + 5 };
  return { minutes: current.minutes + 1, seconds: current.seconds + 5 - 60 };
}

export function subtract5Seconds(current: Duration): Duration {
  const s = current.seconds;
  if (s > 5) return { ...current, seconds: current.seconds - 5 };
  else {
    const m = current.minutes;
    if (m > 0) {
      return {
        minutes: current.minutes - 1,
        seconds: current.seconds - 5 + 60,
      };
    }
    return { minutes: 0, seconds: 0 };
  }
}
