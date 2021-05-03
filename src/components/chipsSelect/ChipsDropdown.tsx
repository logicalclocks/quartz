import React, { FC, useCallback, useMemo } from 'react';

import ListItem from '../list/item';

import { Labeling, List } from '../../index';
import useArrowsSelect from '../select/useArrowsSelect';
import { listStyles } from './chips.styles';
import { ChipsSelectTypes } from './types';

export interface ChipsDropDownProps {
  value: string[];
  width?: string;
  search: string;
  position: number;
  options: string[];
  type?: ChipsSelectTypes;
  onChange: (value: string[]) => void;
  onClose: () => void;
}

const ChipsDropDown: FC<ChipsDropDownProps> = ({
  type,
  value,
  width,
  search,
  options,
  onClose,
  position,
  onChange,
}) => {
  const handleClick = useCallback(
    (option: string) => () => {
      if (option) onChange([option]);
    },
    [value, onChange],
  );

  const fullOptions = useMemo(() => {
    if (type !== 'editable') return options;
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
