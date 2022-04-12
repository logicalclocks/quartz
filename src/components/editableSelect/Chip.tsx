import React, { FC, useCallback, useState } from 'react';
import { Box, Flex, FlexProps } from 'rebass';
import { GetIcon, IconName } from '../icon';

import Labeling from '../typography/labeling';
import { chipIconStyles, chipStyles } from './editableSelect.styles';
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
      tx="variants.editableSelect.chip"
      variant={boxed ? variant : ''}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      {...props}
    >
      {!showCross && boxed && <Box width="7px" />}
      <Labeling as="span">{value}</Labeling>
      {showCross && (
        <GetIcon
          icon={IconName.cross}
          size="xs"
          onClick={handleDelete}
          style={chipIconStyles}
        />
      )}
      {!showCross && boxed && <Box width="7px" />}
    </Flex>
  );
};

export default Chip;
