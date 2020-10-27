import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';
import { Row } from './type';

// Styles
import styles from './table.styles';

export interface TableProps extends Omit<BoxProps, 'css'> {
  variant?: 'read-only' | 'editable';
  values: Array<Row>;
}

const Table: FC<TableProps> = ({
  variant = 'read-only',
  values,
  ...props
}: TableProps) => (
  <Box {...props} tx="table" variant={variant} sx={styles}>
    <Box as="span" />
  </Box>
);
export default Table;
