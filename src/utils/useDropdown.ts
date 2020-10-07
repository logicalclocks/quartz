import { useCallback, useState } from 'react';

export type UseDropdown = [boolean, (state?: boolean) => void, () => void];

const useDropdown = (isInitialOpen = false): UseDropdown => {
  const [isoOpen, setOpen] = useState(isInitialOpen);

  const handleClickOutside = useCallback(() => {
    setOpen(false);
  }, [setOpen, isoOpen]);

  const handleToggle = useCallback(
    (state?: boolean) => {
      setOpen((currentState) => state ?? !currentState);
    },
    [isoOpen, setOpen],
  );

  return [isoOpen, handleToggle, handleClickOutside];
};

export default useDropdown;
