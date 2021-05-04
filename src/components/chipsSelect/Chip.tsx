import React, { FC, useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Flex, FlexProps } from 'rebass';

import { Labeling } from '../..';
import { chipIconStyles, chipStyles } from './chips.styles';
import { ChipsVariants } from './types';

export interface ChipProps extends Omit<FlexProps, 'css'> {
  value: string;
  boxed: boolean;
  variant?: ChipsVariants;
  disabled?: boolean;
  deletable?: boolean;
  onDelete: (value: string) => void;
}

const Chip: FC<ChipProps> = ({
  value,
  onDelete,
  disabled,
  boxed = true,
  deletable = true,
  variant = 'primary',
  ...props
}) => {
  const [hover, setHover] = useState(false);

  const handleHover = useCallback(
    (val: boolean) => !disabled && deletable && setHover(val),
    [disabled, deletable],
  );

  const handleDelete = useCallback(
    (e) => {
      e.stopPropagation();
      onDelete(value);
    },
    [onDelete, value],
  );

  const showCross = deletable && boxed && !disabled && hover;

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      px={boxed ? '5px' : '3px'}
      py="3px"
      mr="5px"
      sx={chipStyles}
      as="span"
      tx="variants.chipsSelect.chip"
      variant={boxed ? variant : ''}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      {!showCross && boxed && <Box width="7px" />}
      <Labeling as="span">{value}</Labeling>
      {showCross && (
        <FontAwesomeIcon
          icon="times"
          style={chipIconStyles}
          onClick={handleDelete}
        />
      )}
      {!showCross && boxed && <Box width="7px" />}
    </Flex>
  );
};

export default Chip;
