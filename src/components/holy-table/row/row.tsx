import React, { FC, ReactNode, useContext } from 'react';
import { Box, BoxProps } from 'rebass';
import HolyTableContext from '../holy-table.context';
import styles from './styles';

interface Props extends Omit<BoxProps, 'css'> {
  children: ReactNode;
}

const Row: FC<Props> = ({ sx, children, ...props }: Props) => {
  const { bordered, hoverable, rowHeight, standalone } =
    useContext(HolyTableContext);

  const style = {
    ...styles(bordered, hoverable, standalone),
    ...sx,
  };

  return (
    <Box as="tr" sx={style} width="100%" height={rowHeight} {...props}>
      {children}
    </Box>
  );
};

export default Row;
