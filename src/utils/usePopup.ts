import { useCallback, useState } from 'react';

export type UsePopup = [boolean, () => void, (state: boolean) => void];

const usePopup = (isInitialOpen = false): UsePopup => {
  const [isOpen, setOpen] = useState<boolean>(isInitialOpen);

  const handleToggle = useCallback(() => {
    setOpen((open) => !open);
  }, [setOpen]);

  return [isOpen, handleToggle, setOpen];
};

export default usePopup;
