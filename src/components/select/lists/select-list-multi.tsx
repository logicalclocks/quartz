import React, { FC, useCallback } from 'react';

// Components
import Checkbox from '../../checkbox';
import ListItem from '../../list/item';
// Types
import { SelectListProps } from './list.types';
import { Labeling } from '../../../index';
import useArrowsSelect from '../useArrowsSelect';
import { Box } from 'rebass';

const toggleValue = (value: string[], option: string) =>
  value.includes(option)
    ? value.filter((o) => o !== option)
    : [...value, option];

const SelectListMulti: FC<SelectListProps> = ({
  options,
  value,
  additionalTexts,
  onChange,
  additionalComponents,
}: SelectListProps) => {
  const handleClick = useCallback(
    (option: string) => (event?: React.MouseEvent<HTMLDivElement>) => {
      event?.preventDefault();
      event?.stopPropagation();

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

  const { activeIndex } = useArrowsSelect(options, (value: string) =>
    handleClick(value)(),
  );

  const handleCheck = useCallback(() => {}, []);

  return (
    <React.Fragment>
      {options?.map((option, index) => (
        <ListItem
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
          {option}
          {!!additionalTexts && !!additionalTexts[index] && (
            <Labeling ml="8px" gray>
              {additionalTexts[index]}
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
