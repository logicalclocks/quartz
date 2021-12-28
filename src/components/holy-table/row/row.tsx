import React, { FC, ReactNode, useContext } from 'react';
import { Box, BoxProps } from 'rebass';
import styles from './styles';
import HolyTableContext from '../holy-table.context';

interface Props extends Omit<BoxProps, 'css'> {
  children: ReactNode;
}

const Row: FC<Props> = ({ sx, children, ...props }: Props) => {
  const { bordered, hoverable } = useContext(HolyTableContext);

  const style = {
    ...styles(bordered, hoverable),
    ...sx,
  };
  return (
    <Box as="tr" sx={style} width="100%" {...props}>
      {children}
    </Box>
  );
};
export default Row;
