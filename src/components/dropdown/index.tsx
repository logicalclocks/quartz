import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useRef } from 'react';

// Components
import ListItem from '../list/item';
import List, { ListProps } from '../list/container';
// Hooks
import useOnClickOutside from '../../utils/useClickOutside';
// Types
import { DropdownItem } from './types';
import Icon from '../icon';

export interface DropdownProps extends Omit<ListProps, 'css'> {
  items: DropdownItem[];
  isOpen?: boolean;
  onClickOutside?: () => void;
}

const Dropdown: FC<DropdownProps> = ({
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
      {items?.map((item) => {
        const { value, id, icon, hasDivider, onClick } = item;

        return (
          <ListItem
            hasDivider={hasDivider}
            key={id || value}
            onClick={() => onClick(item)}
          >
            {icon && <Icon icon={icon} size="sm"/>}
            {value}
          </ListItem>
        );
      })}
    </List>
  );
};

export default Dropdown;
