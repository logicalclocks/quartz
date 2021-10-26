import React, { FC, useRef } from 'react';

// Components
import ListItem from '../list/item';
import List, { ListProps } from '../list/container';
// Hooks
import useOnClickOutside from '../../utils/useClickOutside';
// Types
import IconButton from '../icon-button';
import { IconName } from '../icon/list';

export interface DropdownItem<Metadata = {}> {
  value: string | number;
  icon?: IconName;
  id?: string | number;
  hasDivider?: boolean;
  metadata?: Metadata;
  onClick: (item: DropdownItem) => void;
}

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
            {icon && <IconButton icon={icon} />}
            {value}
          </ListItem>
        );
      })}
    </List>
  );
};

export default Dropdown;
