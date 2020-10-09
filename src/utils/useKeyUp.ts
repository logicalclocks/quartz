import { useEffect } from 'react';

const useKeyUp = (handler: () => void, key = 'Escape') => {
  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === key) {
      handler();
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
};

export default useKeyUp;
