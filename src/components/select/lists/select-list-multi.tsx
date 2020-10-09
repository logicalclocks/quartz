import React, { FC, useCallback } from 'react';

// Components
import Checkbox from '../../checkbox';
import ListItem from '../../list/item';
// Types
import { SelectListProps } from './list.types';

const toggleValue = (value: string[], option: string) =>
  value.includes(option)
    ? value.filter((o) => o !== option)
    : [...value, option];

const SelectListMulti: FC<SelectListProps> = ({
  options,
  value,
  onChange,
}: SelectListProps) => {
  const handleClick = useCallback(
    (option: string) => (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      onChange(toggleValue(value, option));
    },
    [value, onChange],
  );

  const handleSelectOnly = useCallback(
    (option: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();

      onChange([option]);
    },
    [],
  );

  const handleCheck = useCallback(() => {}, []);

  return (
    <>
      {options?.map((option) => (
        <ListItem
          key={option}
          onClick={handleClick(option)}
          action={['only', handleSelectOnly(option)]}
        >
          <Checkbox
            mr="10px"
            checked={value.includes(option)}
            onChange={handleCheck}
          />
          {option}
        </ListItem>
      ))}
    </>
  );
};

export default SelectListMulti;
