import { RefObject, useEffect } from 'react';

const useOnClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: () => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      // @ts-ignore
      if (!ref?.current || ref?.current.contains(event.target)) {
        return;
      }

      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
