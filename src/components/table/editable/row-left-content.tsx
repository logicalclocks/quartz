import React, { FC, memo, useCallback } from 'react';
import { Box } from 'rebass';
import IconButton from '../../icon-button';
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
    '> button': {
      width: '31px',
      height: 'auto',
      padding: '9px 12px 9px 15px',
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
      onClick={handleDeleteRow}
    >
      <span>{index + 1}</span>
      <IconButton
        py="9px !import"
        px="12px !important"
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
