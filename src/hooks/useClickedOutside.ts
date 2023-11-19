import { RefObject, useEffect, useState } from 'react';

export default function useClickedOutside(ref: RefObject<Node>) {
  const [clickedOutside, setClickedOutside] = useState<boolean>(false);

  useEffect(() => {
    function handleDocumentClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setClickedOutside(true);
      } else {
        setClickedOutside(false);
      }
    }
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [ref]);

  return {
    clickedOutside,
  };
}
