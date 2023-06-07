import { FC, useCallback } from 'react';
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
}: SelectListProps) => {
  const handleClick = useCallback(
    (option: SelectOpt) => () => {
      const selection = { key: option.key, label: option.label };
      onChange(selection);
    },
    [onChange],
  );

  const { activeIndex } = useArrowsSelect(options, (val: SelectOpt) => {
    handleClick(val)();
    onClose();
  });

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
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
          {option.additionalComponent && (
            <Box ml="auto">{option.additionalComponent}</Box>
          )}
        </ListItem>
      ))}
    </>
  );
};

export default SelectList;
