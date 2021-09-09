import React, { FC, memo, useCallback, useState } from 'react';
import { Box } from 'rebass';
import { IconButton } from '../../../index';
import { IconName } from '../../icon/list';
import TooltipPositions from '../../tooltip/positions';

export interface RowLeftContentProps {
  index: number;
  onDelete: (ind: number) => void;
}

const styles = {
  minWidth: '32px',
  boxSizing: 'content-box',
  '> div': {
    display: 'none',
    height: '15px',
    marginTop: '-9px',
    '> button': {
      width: '30px',
      height: '32px',
      paddingTop: '16px',
      paddingRight: '13px',
      paddingLeft: '14px',
      maxHeight: '35px',
    },
    svg: {
      fontSize: '13px',
    },
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
      id={String(index + 1)}
      sx={styles}
      height="14px"
      onClick={handleDeleteRow}
    >
      <span>{index + 1}</span>
      <IconButton
        py="9px !import"
        pt="12px !important"
        pr="20px"
        tooltipProps={{ position: TooltipPositions.right }}
        tooltip="remove"
        intent="ghost"
        icon={IconName.bin}
      />
    </Box>
  );
};

export default memo(RowLeftContent);
