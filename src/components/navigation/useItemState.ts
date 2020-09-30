import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const useItemState = (
  isInitialActive = false,
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isActive, setActive] = useState<boolean>(isInitialActive);

  useEffect(() => {
    if (isInitialActive !== isActive) {
      setActive(isInitialActive);
    }
  }, [isInitialActive]);

  return [isActive, setActive];
};

export default useItemState;
