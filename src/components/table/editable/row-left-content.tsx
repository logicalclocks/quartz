import React, { FC, memo, useCallback } from 'react';
import { Box } from 'rebass';
import { IconButton } from '../../../index';
import TooltipPositions from '../../tooltip/positions';

export interface RowLeftContentProps {
  index: number;
  onDelete: (ind: number) => void;
}

const styles = {
  minWidth: '40px',
  boxSizing: 'content-box',

  '> div': {
    display: 'none',
    '> button': {
      width: '40px',
      height: 'auto',
    },
    svg: {
      fontSize: '13px',
    },
  },

  ':hover': {
    padding: '0 !important',
  },

  ':hover > span': {
    display: 'none',
  },

  ':hover > div': {
    display: 'block',
  },
};

const RowLeftContent: FC<RowLeftContentProps> = ({
  index,
  onDelete,
}: RowLeftContentProps) => {
  const handleDeleteRow = useCallback(() => onDelete(index), []);

  return (
    <Box
      as="th"
      p="0 !important"
      py="9px !important"
      sx={styles}
      onClick={handleDeleteRow}
    >
      <span>{index + 1}</span>
      <IconButton
        pr="14px"
        tooltipProps={{ position: TooltipPositions.right }}
        tooltip="remove"
        intent="ghost"
        icon={['far', 'trash-alt']}
      />
    </Box>
  );
};

export default memo(RowLeftContent);
