import { useCallback, useState } from 'react';

export type UseDropdown = [boolean, (state?: boolean) => void, () => void];

const useDropdown = (isInitialOpen = false): UseDropdown => {
  const [isOpen, setOpen] = useState(isInitialOpen);

  const handleClickOutside = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleToggle = useCallback(
    (state?: boolean) => {
      setOpen((currentState) => state ?? !currentState);
    },
    [setOpen],
  );

  return [isOpen, handleToggle, handleClickOutside];
};

export default useDropdown;
