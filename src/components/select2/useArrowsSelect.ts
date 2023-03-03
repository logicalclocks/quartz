import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';

const useArrowsSelect = (
  options: any[],
  callback: Function,
  startingIndex = -1,
) => {
  const [activeIndex, setActiveIndex] = useState(startingIndex);

  const handleSelect = useCallback(
    (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowUp'].includes(e.key)) {
        e.preventDefault();

        const maxLength = options.length;

        if (e.key === 'ArrowDown') {
          setActiveIndex(
            R.cond([
              [R.either(R.equals(-1), R.lt(maxLength - 2)), R.always(0)],
              [R.T, R.inc],
            ]),
          );
        } else {
          setActiveIndex(
            R.cond([
              [R.either(R.equals(-1), R.equals(0)), R.always(maxLength - 1)],
              [R.T, R.dec],
            ]),
          );
        }
      }

      if (e.key === 'Enter') {
        e.preventDefault();
        callback(options[activeIndex]);
      }
    },
    [options, activeIndex, callback],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleSelect);

    return () => {
      window.removeEventListener('keydown', handleSelect);
    };
  }, [handleSelect]);

  return { activeIndex };
};

export default useArrowsSelect;
