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
  '&:hover': {
    padding: '0 !important',
  },
  '&:hover div': {
    display: 'block',
  },
  '&:hover span': {
    display: 'none',
  },
  '& div': {
    display: 'none',
  },
  '& div button': {
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
    width: '30px',
    height: '32px',
  },
};

const RowLeftContent: FC<RowLeftContentProps> = ({
  index,
  onDelete,
}: RowLeftContentProps) => {
  const handleDeleteRow = useCallback(() => onDelete(index), []);

  return (
    <Box as="td" id={String(index + 1)} onClick={handleDeleteRow} sx={styles}>
      <span>{index + 1}</span>
      <IconButton
        tooltipProps={{ position: TooltipPositions.right }}
        tooltip="remove"
        intent="ghost"
        icon={IconName.bin}
      />
    </Box>
  );
};

export default memo(RowLeftContent);
