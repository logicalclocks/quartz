import { RefObject, useEffect } from 'react';

/**
 * Triggers the handler on on-click on any element diferent from those defined
 * either inside the refs or the ids arrays.
 */
const useOnClickOutside = <T extends HTMLElement>(
  handler: () => void,
  refs: RefObject<T>[],
  ids?: string[],
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      // Do nothing if click happens on an  element contained in the ids array.
      if (
        (ids || []).some((id) => {
          const el = document.getElementById(id);
          return el?.contains(event.target as Node);
        })
      ) {
        return;
      }
      // Do nothing if click happens on an  element contained in the refs array.
      if (refs.some((r) => r?.current?.contains(event.target as Node))) {
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
  }, [refs, ids, handler]);
};

export default useOnClickOutside;
