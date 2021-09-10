import React, { FC, memo, useCallback, useRef } from 'react';
import { Box } from 'rebass';
import useDropdown from '../../utils/useDropdown';
import useOnClickOutside from '../../utils/useClickOutside';
import { dropdownStyles, theadStyles } from './table.styles';
import Tooltip from '../tooltip';
import icons from '../../sources/icons';
import List from '../list/container';
import ListItem from '../list/item';

export interface TheadProps {
  column: string;
  isPrimary?: boolean;
  isPartition?: boolean;
  className?: string;
  actions: Array<{
    label: string;
    handler: (column: string) => void;
  }>;
}

const Thead: FC<TheadProps> = ({
  column,
  className,
  actions,
  isPrimary,
  isPartition,
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
      {column}
      {isPrimary && (
        <Tooltip mainText="primary key">
          <Box
            ml="5px"
            sx={{
              svg: {
                path: {
                  fill: 'labels.green',
                },
              },
            }}
            my="-5px"
          >
            {icons.primary}
          </Box>
        </Tooltip>
      )}
      {isPartition && (
        <Tooltip mainText="partition key">
          <Box
            ml="5px"
            sx={{
              svg: {
                path: {
                  fill: 'labels.green',
                },
              },
            }}
            my="-5px"
          >
            {icons.partition}
          </Box>
        </Tooltip>
      )}
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
