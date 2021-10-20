import React, { FC, useCallback } from 'react';
// Components
import { Box } from 'rebass';
import ListItem from '../../list/item';
import Labeling from '../../typography/labeling';
// Hook
import useArrowsSelect from '../useArrowsSelect';
// Types
import { SelectListProps } from './list.types';
import { SelectOpt } from '../types';

const SelectList: FC<SelectListProps> = ({
  options,
  value,
  onClose,
  onChange,
  additionalComponents,
}: SelectListProps) => {
  const handleClick = useCallback(
    (option: SelectOpt) => () => onChange([option]),
    [onChange],
  );

  const { activeIndex } = useArrowsSelect(options, (val: SelectOpt) => {
    handleClick(val)();
    onClose();
  });

  return (
    <React.Fragment>
      {options?.map((option, index) => (
        <ListItem
          key={option.key}
          isActive={index === activeIndex}
          variant={value.includes(option) ? 'active' : undefined}
          onClick={handleClick(option)}
        >
          {option.label}
          {options[index]?.additionalText && (
            <Labeling ml="8px" gray>
              {options[index].additionalText}
            </Labeling>
          )}
          {!!additionalComponents && !!additionalComponents[index] && (
            <Box ml="auto">{additionalComponents[index]}</Box>
          )}
        </ListItem>
      ))}
    </React.Fragment>
  );
};

export default SelectList;
