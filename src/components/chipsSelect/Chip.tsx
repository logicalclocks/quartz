import React, { FC, useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Flex, FlexProps } from 'rebass';

import { Labeling } from '../..';
import { chipIconStyles } from './chips.styles';

export interface ChipProps extends Omit<FlexProps, 'css'> {
  value: string;
  variant?: 'primary' | 'white' | 'disabled';
  disabled?: boolean;
  deletable?: boolean;
  onDelete: (value: string) => void;
}

const Chip: FC<ChipProps> = ({
  value,
  disabled,
  deletable = true,
  onDelete,
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

  const showCross = deletable && !disabled && hover;

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      px="5px"
      py="3px"
      mr="5px"
      sx={{ borderRadius: '1px', whiteSpace: 'nowrap' }}
      as="span"
      tx="variants.chipsSelect.chip"
      variant={variant}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      {...props}
    >
      {!showCross && <Box width="7px" />}
      <Labeling as="span">{value}</Labeling>
      {showCross && (
        <FontAwesomeIcon
          icon="times"
          style={chipIconStyles(showCross)}
          onClick={handleDelete}
        />
      )}
      {!showCross && <Box width="7px" />}
    </Flex>
  );
};

export default Chip;
