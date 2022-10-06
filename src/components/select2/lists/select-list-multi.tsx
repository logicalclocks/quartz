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
  let result;
  const exists = value.find((x) => x.key === option.key);
  if (exists) {
    result = value.filter((x) => x.key !== option.key);
  } else {
    result = [...value, option];
  }
  return result.map((x) => ({ key: x.key, label: x.label }));
};

const SelectListMulti: FC<SelectListProps> = ({
  options,
  value,
  onChange,
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

  const { activeIndex } = useArrowsSelect(options, (val: SelectOpt) =>
    handleClick(val)(),
  );

  const handleCheck = useCallback(() => {}, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <React.Fragment>
      {options?.map((option, index) => (
        <ListItem
          key={option.key}
          isActive={index === activeIndex}
          onClick={handleClick(option)}
          action={
            !option.additionalComponent
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
          {option.additionalComponent && (
            <Box
              sx={{
                position: 'absolute',
                right: '10px',
              }}
            >
              {option.additionalComponent}
            </Box>
          )}
        </ListItem>
      ))}
    </React.Fragment>
  );
};

export default SelectListMulti;
