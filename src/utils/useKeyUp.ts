import { useCallback, useEffect } from 'react';

const useKeyUp = (handler: () => void, key = 'Escape') => {
  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === key) {
        handler();
      }
    },
    [handler, key],
  );

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyUp]);
};

export default useKeyUp;
