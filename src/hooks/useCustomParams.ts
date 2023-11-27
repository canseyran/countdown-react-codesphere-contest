import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useCustomParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const setParam = useCallback(
    (param: string, value: string) => {
      searchParams.set(param, value);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  const getParam = useCallback(
    (param: string) => {
      return searchParams.get(param);
    },
    [searchParams],
  );

  return { setParam, getParam };
}
