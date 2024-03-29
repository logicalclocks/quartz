import { ComponentType } from 'react';
import { Box } from 'rebass';
import styles from './row-item.styles';
import { TableItemPosition } from './types';
import { Mode } from '../container/types';

export interface RowItemProps {
  mode?: Mode;
  component: ComponentType<any>;
  componentProps: any;
  position?: TableItemPosition;
  fillSpace?: boolean;
}

const RowItem = ({
  mode = Mode.full,
  component: Component,
  componentProps,
  position = TableItemPosition.left,
  fillSpace = false,
  ...props
}: RowItemProps) => (
  <Box as="td" sx={styles({ position, mode, fillSpace })} {...props}>
    <Component {...componentProps} />
  </Box>
);
export default RowItem;
