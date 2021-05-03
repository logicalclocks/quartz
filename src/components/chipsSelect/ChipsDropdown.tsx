import React, { FC, useCallback, useMemo } from 'react';

import { Box } from 'rebass';
import ListItem from '../list/item';

import { Labeling, List } from '../../index';
import useArrowsSelect from '../select/useArrowsSelect';
import { listStyles, messageStyles } from './chips.styles';
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

  const message = useMemo(() => {
    if (value.includes(search)) return 'value already selected';
    if (fullOptions.length === 0) return 'no options available';
    return null;
  }, [value, search, fullOptions]);

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
      {message && (
        <Box sx={messageStyles}>
          <Labeling gray>{message}</Labeling>
        </Box>
      )}
    </List>
  );
};

export default ChipsDropDown;
