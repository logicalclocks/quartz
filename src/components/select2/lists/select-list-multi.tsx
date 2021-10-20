import React, { FC, useCallback } from 'react';

// Components
import { Box } from 'rebass';
import Checkbox from '../../checkbox';
import ListItem from '../../list/item';
// Hook
import Labeling from '../../typography/labeling';
import useArrowsSelect from '../useArrowsSelect';
// Types
import { SelectListProps } from './list.types';
import { SelectOpt } from '../types';

const toggleValue = (value: SelectOpt[], option: SelectOpt) => {
  if (value.includes(option)) return value.filter((o) => o !== option);
  return [...value, option];
};

const SelectListMulti: FC<SelectListProps> = ({
  options,
  value,
  onChange,
  additionalComponents,
}: SelectListProps) => {
  const handleClick = useCallback(
    (option: SelectOpt) => (event?: React.MouseEvent<HTMLDivElement>) => {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      onChange(toggleValue(value, option));
    },
    [value, onChange],
  );

  const handleSelectOnly = useCallback(
    (option: SelectOpt) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      onChange([option]);
    },
    [onChange],
  );

  // eslint-disable-next-line arrow-body-style
  const { activeIndex } = useArrowsSelect(options, (val: SelectOpt) => {
    return handleClick(val)();
  });

  const handleCheck = useCallback(() => {}, []);

  return (
    <React.Fragment>
      {options?.map((option, index) => (
        <ListItem
          // eslint-disable-next-line react/no-array-index-key
          key={`${option} - ${index}`}
          isActive={index === activeIndex}
          onClick={handleClick(option)}
          action={
            !additionalComponents?.length
              ? ['only', handleSelectOnly(option)]
              : undefined
          }
        >
          <Checkbox
            mr="10px"
            checked={value.includes(option)}
            onChange={handleCheck}
          />
          {option.label}
          {options[index]?.additionalText && (
            <Labeling ml="8px" gray>
              {options[index].additionalText}
            </Labeling>
          )}
          {!!additionalComponents && !!additionalComponents[index] && (
            <Box
              sx={{
                position: 'absolute',
                right: '10px',
              }}
            >
              {additionalComponents[index]}
            </Box>
          )}
        </ListItem>
      ))}
    </React.Fragment>
  );
};

export default SelectListMulti;
