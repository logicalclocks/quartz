import React, { FC, memo, useCallback } from 'react';
import { Box } from 'rebass';
import { IconButton } from '../../../index';

export interface RowLeftContentProps {
  index: number;
  onDelete: (ind: number) => void;
}

const styles = {
  minWidth: '32px',
  maxWidth: '32px',
  boxSizing: 'content-box',

  '> div': {
    display: 'none',
    svg: {
      fontSize: '13px',
    },
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
    <Box as="th" p="0 !important" sx={styles} onClick={handleDeleteRow}>
      <span>{index + 1}</span>
      <IconButton
        pr="14px"
        tooltip=""
        intent="ghost"
        icon={['far', 'trash-alt']}
      />
    </Box>
  );
};

export default memo(RowLeftContent);
