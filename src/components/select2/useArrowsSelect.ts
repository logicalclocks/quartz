import { useCallback, useEffect, useState } from 'react';

const useArrowsSelect = (
  options: string[],
  callback: Function,
  startingIndex = -1,
) => {
  const [activeIndex, setActiveIndex] = useState(startingIndex);

  const handleSelect = useCallback(
    (e) => {
      if (['ArrowDown', 'ArrowUp'].includes(e.key)) {
        e.preventDefault();

        const maxLength = options.length;

        if (e.key === 'ArrowDown') {
          setActiveIndex((index) =>
            index === -1 ? 0 : index > maxLength - 2 ? 0 : index + 1,
          );
        } else {
          setActiveIndex((index) =>
            index === -1
              ? maxLength - 1
              : index === 0
              ? maxLength - 1
              : index - 1,
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
