import React, { FC, useCallback } from 'react';

// Components
import ListItem from '../../list/item';
// Types
import { SelectListProps } from './list.types';

const SelectList: FC<SelectListProps> = ({
  options,
  value,
  onChange,
}: SelectListProps) => {
  const handleClick = useCallback(
    (option: string) => () => {
      onChange([option]);
    },
    [value, onChange],
  );

  return (
    <React.Fragment>
      {options?.map((option) => (
        <ListItem
          key={option}
          variant={value.includes(option) ? 'active' : undefined}
          onClick={handleClick(option)}
        >
          {option}
        </ListItem>
      ))}
    </React.Fragment>
  );
};

export default SelectList;
