import { useState } from 'react';
export type Size = 'xs' | 's' | 'm' | 'l';
export type Tone = 'gray' | 'green' | 'red' | 'blue' | 'orange' | 'purple';
export type Validation = 'none' | 'warning' | 'error' | 'success';
export type VisualState = 'default' | 'hover' | 'pressed' | 'focused' | 'active';
export const cx = (...values: (string | false | null | undefined)[]) => values.filter(Boolean).join(' ');
export function useControllable<T>(value: T | undefined, defaultValue: T, onChange?: (value: T) => void) {
  const [internal, setInternal] = useState(defaultValue);
  return [value === undefined ? internal : value, (next: T) => { if (value === undefined) setInternal(next); onChange?.(next); }] as const;
}
