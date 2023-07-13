import { useRef } from 'react';
import { Flex } from 'rebass';

// Components
import ListItem from '../list/item';
import List, { ListProps } from '../list/container';
// Hooks
import useOnClickOutside from '../../utils/useClickOutside';
// Types
import { DropdownItem } from './types';
import { GetIcon } from '../icon';
import Spinner from '../spinner';
import Tooltip from '../tooltip';
import TooltipPositions from '../tooltip/positions';

export interface DropdownProps extends Omit<ListProps, 'css' | 'children'> {
  items: DropdownItem[];
  isOpen?: boolean;
  onClickOutside?: () => void;
}

const Dropdown = ({
  items,
  isOpen = true,
  onClickOutside = () => {},
  ...props
}: DropdownProps) => {
  const containerRef = useRef(null);
  useOnClickOutside(onClickOutside, [containerRef]);

  if (!isOpen) {
    return null;
  }

  return (
    <List {...props} ref={containerRef}>
      {items?.map((item, idx) => {
        const {
          value,
          id,
          icon,
          onClick,
          isLoading,
          disabled,
          tooltipProps,
          ...restProps
        } = item;

        return (
          <Tooltip position={TooltipPositions.right} {...tooltipProps}>
            <ListItem
              // eslint-disable-next-line react/no-array-index-key
              key={id || typeof value !== 'object' ? (value as string) : idx}
              onClick={() => onClick(item)}
              disabled={disabled}
              {...restProps}
            >
              <Flex width="100%">
                <Flex flexGrow={1} color="black">
                  {icon && (
                    <GetIcon
                      color={disabled ? 'gray' : 'black'}
                      icon={icon}
                      size="sm"
                    />
                  )}
                  {value}
                </Flex>
                {isLoading && (
                  <Spinner
                    size={16}
                    ml="15px"
                    color={disabled ? 'gray' : 'primary'}
                  />
                )}
              </Flex>
            </ListItem>
          </Tooltip>
        );
      })}
    </List>
  );
};

export default Dropdown;
