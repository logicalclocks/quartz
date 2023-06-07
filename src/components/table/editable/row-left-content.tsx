import { memo } from 'react';
import { Box } from 'rebass';
import { IconButton } from '../../icon-button';
import { IconName } from '../../icon/list';
import TooltipPositions from '../../tooltip/positions';

export interface RowLeftContentProps {
  index: number;
  onDelete: () => void;
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

const RowLeftContent = ({ index, onDelete }: RowLeftContentProps) => (
  <Box as="td" id={String(index + 1)} onClick={onDelete} sx={styles}>
    <span>{index + 1}</span>
    <IconButton
      tooltipProps={{ position: TooltipPositions.right }}
      tooltip="remove"
      intent="ghost"
      icon={IconName.bin}
    />
  </Box>
);

export default memo(RowLeftContent);
