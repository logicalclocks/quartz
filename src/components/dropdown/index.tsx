import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useRef } from 'react';

// Components
import ListItem from '../list/item';
import List, { ListProps } from '../list/container';
// Hooks
import useOnClickOutside from '../../utils/useClickOutside';
// Types
import { DropdownItem } from './types';

export interface DropdownProps extends ListProps {
  items: DropdownItem[];
  isOpen?: boolean;
  onClickOutside: () => void;
}

const Dropdown: FC<DropdownProps> = ({
  items,
  isOpen = true,
  onClickOutside,
  ...props
}: DropdownProps) => {
  const containerRef = useRef(null);
  useOnClickOutside(containerRef, onClickOutside);

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
            {icon && <FontAwesomeIcon icon={icon} />}
            {value}
          </ListItem>
        );
      })}
    </List>
  );
};

export default Dropdown;
