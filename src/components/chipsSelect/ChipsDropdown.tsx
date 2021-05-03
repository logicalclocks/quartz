import React, { FC, useCallback, useMemo } from 'react';

import ListItem from '../list/item';

import { Labeling, List } from '../../index';
import useArrowsSelect from '../select/useArrowsSelect';
import { listStyles } from './chips.styles';

export interface ChipsDropDownProps {
  value: string[];
  width?: string;
  search: string;
  position: number;
  options: string[];
  onChange: (value: string[]) => void;
  onClose: () => void;
}

const ChipsDropDown: FC<ChipsDropDownProps> = ({
  value,
  width,
  search,
  options,
  position,
  onClose,
  onChange,
}) => {
  const handleClick = useCallback(
    (option: string) => () => {
      if (option) onChange([option]);
    },
    [value, onChange],
  );

  const fullOptions = useMemo(() => {
    return search === '' || options.includes(search) || value.includes(search)
      ? options
      : [...options, search];
  }, [search, options]);

  const { activeIndex } = useArrowsSelect(
    fullOptions,
    (val: string) => {
      handleClick(val)();
      onClose();
    },
    0,
  );

  return (
    <List sx={listStyles(position)} width={width}>
      {fullOptions.map((option, index) => (
        <ListItem
          key={option}
          isActive={index === activeIndex}
          variant={value.includes(option) ? 'active' : undefined}
          onClick={handleClick(option)}
        >
          {index === options.length && <Labeling gray>add</Labeling>}
          {option}
        </ListItem>
      ))}
    </List>
  );
};

export default ChipsDropDown;
