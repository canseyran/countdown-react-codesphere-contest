import { RefObject, useCallback, useEffect, useState } from 'react';

export default function useClickedOutside(ref: RefObject<HTMLElement>) {
  const [clickedOutside, setClickedOutside] = useState<boolean>(false);

  const handleDocumentClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setClickedOutside(true);
      } else {
        setClickedOutside(false);
      }
    },
    [ref],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [ref, handleDocumentClick]);

  return {
    clickedOutside,
  };
}
