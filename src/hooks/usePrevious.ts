import { useEffect, useRef } from 'react';

export default function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>(value);
  useEffect(() => {
    if (value !== ref.current) {
      ref.current = value;
    }
  }, [value]);
  return ref.current;
}
