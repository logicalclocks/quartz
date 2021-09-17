import React, { FC, memo, useCallback, useRef } from 'react';
import { Box } from 'rebass';
import useDropdown from '../../utils/useDropdown';
import useOnClickOutside from '../../utils/useClickOutside';
import { theadStyles } from './table.styles';

export interface TheadProps {
  column: string;
  headerRender: (isOpen: boolean) => React.ReactElement<any>;
  className?: string;
}

const Thead: FC<TheadProps> = ({
  column,
  className,
  headerRender,
}: TheadProps) => {
  const containerRef = useRef(null);
  const [isOpen, handleToggle, handleClickOutside] = useDropdown();
  useOnClickOutside<HTMLDivElement>(containerRef, handleClickOutside);

  const handleToggleList = useCallback(() => {
    handleToggle();
  }, [handleToggle]);

  return (
    <Box
      key={`thead-th-${column}`}
      as="th"
      sx={theadStyles}
      className={className}
      onClick={handleToggleList}
      ref={containerRef}
    >
      {headerRender(isOpen)}
    </Box>
  );
};

export default memo(Thead);
