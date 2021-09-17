import React, { FC, memo, useCallback, useRef } from 'react';
import { Box } from 'rebass';
import useDropdown from '../../utils/useDropdown';
import useOnClickOutside from '../../utils/useClickOutside';
import { theadStyles } from './table.styles';
import List from '../list/container';
import ListItem from '../list/item';

export interface TheadProps {
  column: string;
  headerRender: (isOpen: boolean) => React.ReactElement<any>;
  className?: string;
  actions: Array<{
    label: string;
    handler: (column: string) => void;
  }>;
}

const Thead: FC<TheadProps> = ({
  column,
  className,
  headerRender,
  actions,
}: TheadProps) => {
  const containerRef = useRef(null);
  const [isOpen, handleToggle, handleClickOutside] = useDropdown();
  useOnClickOutside<HTMLDivElement>(containerRef, handleClickOutside);

  const dropdownStyles = {
    position: 'absolute',
    width: '100% !important',
    left: '0',
    top: '37px',
    zIndex: '200',
  };

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
      {isOpen && (
        <List sx={dropdownStyles}>
          {actions.map((action) => (
            <ListItem
              key={action.label}
              onClick={() => {
                action.handler(column);
              }}
            >
              {action.label}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default memo(Thead);
