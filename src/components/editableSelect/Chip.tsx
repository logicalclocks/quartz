import { Tag, TagCloseButton } from '@chakra-ui/react';
import { useCallback } from 'react';
import { Flex, FlexProps, Labeling } from '../../index';
import { GetIcon, IconName } from '../icon';

import { ChipsVariants } from './types';

export interface ChipProps extends Omit<FlexProps, 'css'> {
  value: string;
  variant?: ChipsVariants;
  disabled?: boolean;
  deletable?: boolean;
  onDelete: (value: string) => void;
}

const Chip = ({
  value,
  onDelete,
  disabled,
  variant = 'primary',
  ...props
}: ChipProps) => {
  const handleDelete = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onDelete(value);
    },
    [onDelete, value],
  );
  // todo: handle disabled
  return (
    <Tag borderRadius="1px" size="sm" variant="outline">
      <Labeling>{value}</Labeling>

      <TagCloseButton onClick={handleDelete} />
    </Tag>
  );

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      py="3px"
      mr="5px"
      sx={chipStyles}
      as="span"
      tx="variants.editableSelect.chip"
      variant={variant}
      {...props}
    >
      <Labeling as="span">{value}</Labeling>
      <GetIcon
        icon={IconName.cross}
        size="xs"
        onClick={handleDelete}
        style={crossStyle}
        className="shit"
      />
    </Flex>
  );
};

export default Chip;

export const chipStyles = {
  borderRadius: '1px',
  whiteSpace: 'nowrap',
  cursor: 'default',
  pl: '8px',
  pr: '8px',

  '.shit': {
    display: 'none',
  },

  '&:hover': {
    pr: '0px',
  },

  '&:hover .shit': {
    display: 'block',
  },
};

export const crossStyle = {
  // display: 'none',
  marginLeft: '4px',
  marginTop: '2px',
  cursor: 'pointer',
};
