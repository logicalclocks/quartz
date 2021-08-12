import React, { FC, useCallback } from 'react';

// Components
import { Box } from 'rebass';
import ListItem from '../../list/item';
// Types
import { SelectListProps } from './list.types';
import Labeling from '../../typography/labeling';
import useArrowsSelect from '../useArrowsSelect';

const SelectList: FC<SelectListProps> = ({
  options,
  value,
  onClose,
  onChange,
  additionalTexts,
  additionalComponents,
}: SelectListProps) => {
  const handleClick = useCallback(
    (option: string) => () => {
      onChange([option]);
    },
    [value, onChange],
  );

  const { activeIndex } = useArrowsSelect(options, (value: string) => {
    handleClick(value)();
    onClose();
  });

  return (
    <React.Fragment>
      {options?.map((option, index) => (
        <ListItem
          key={`${option} - ${index}`}
          isActive={index === activeIndex}
          variant={value.includes(option) ? 'active' : undefined}
          onClick={handleClick(option)}
        >
          {option}
          {!!additionalTexts && !!additionalTexts[index] && (
            <Labeling ml="8px" gray>
              {additionalTexts[index]}
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
