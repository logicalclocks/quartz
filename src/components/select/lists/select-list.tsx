import { useCallback } from 'react';
import { Box } from 'rebass';

import ListItem from '../../list/item';
import { SelectListProps } from './list.types';
import Labeling from '../../typography/labeling';
import useArrowsSelect from '../../select2/useArrowsSelect';

const SelectList = ({
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
    [onChange],
  );

  const { activeIndex } = useArrowsSelect(options, (value: string) => {
    handleClick(value)();
    onClose();
  });

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {options?.map((option, index) => (
        <ListItem
          // eslint-disable-next-line react/no-array-index-key
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
    </>
  );
};

export default SelectList;
