import React, { FC, useCallback, useMemo } from 'react';

import { Box } from 'rebass';
import ListItem from '../list/item';

import { Labeling, List } from '../../index';
import useArrowsSelect from '../select/useArrowsSelect';
import { listStyles, messageStyles } from './editableSelect.styles';
import { EditableSelectTypes } from './types';

export interface EditableSelectDropdownProps {
  value: string[];
  width?: string;
  search: string;
  position: number;
  options: string[];
  maxHeight: string;
  type?: EditableSelectTypes;
  isMulti: boolean;
  onChange: (value: string[]) => void;
  onClose: () => void;
}

const EditableSelectDropdown: FC<EditableSelectDropdownProps> = ({
  type,
  value,
  width,
  search,
  isMulti,
  options,
  onClose,
  position,
  onChange,
  maxHeight,
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
    if (isMulti && value.includes(search)) return 'value already selected';
    if (fullOptions.length === 0) return 'no options available';
    return null;
  }, [value, search, fullOptions]);

  const { activeIndex } = useArrowsSelect(fullOptions, (val: string) => {
    handleClick(val)();
    onClose();
  });

  return (
    <List
      sx={listStyles(position)}
      minWidth={width}
      width="max-content"
      maxHeight={maxHeight}
    >
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

export default EditableSelectDropdown;
