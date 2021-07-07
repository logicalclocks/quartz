import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';
import { FGRow } from './type';

export interface TableProps extends Omit<BoxProps, 'css'> {
  variant?: 'read-only' | 'editable';
  values: Array<FGRow>;
}

const Table: FC<TableProps> = ({
  variant = 'read-only',
  values,
  ...props
}: TableProps) => <Box {...props} tx="table" variant={variant} />;
export default Table;
