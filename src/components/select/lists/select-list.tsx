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
      onChange(value.includes(option) ? [] : [option]);
    },
    [value, onChange],
  );

  return (
    <>
      {options?.map((option) => (
        <ListItem
          key={option}
          variant={value.includes(option) ? 'active' : undefined}
          onClick={handleClick(option)}
        >
          {option}
        </ListItem>
      ))}
    </>
  );
};

export default SelectList;
