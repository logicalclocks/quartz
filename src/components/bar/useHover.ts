import { RefObject, useEffect, useState } from 'react';

export type UseHover = [boolean];

const useHover = <T extends HTMLElement>(
  ref: RefObject<T>,
  handleUpdate: (value: number, pos: number) => void,
) => {
  const [isHover, setHover] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleMouseMove = (event: MouseEvent) => {
    handleUpdate(
      event.offsetX / (event.target?.offsetWidth || 1),
      event.offsetX,
    );
  };

  useEffect(() => {
    ref.current?.addEventListener('mouseenter', handleMouseEnter);
    ref.current?.addEventListener('mouseleave', handleMouseLeave);
    ref.current?.addEventListener('mousemove', handleMouseMove);

    return () => {
      ref.current?.removeEventListener('mouseenter', handleMouseEnter);
      ref.current?.removeEventListener('mouseleave', handleMouseLeave);
      ref.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return [isHover];
};

export default useHover;
