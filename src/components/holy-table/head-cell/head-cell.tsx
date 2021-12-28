import React, { ReactNode, useContext } from 'react';
import { BoxProps } from 'rebass';
import Labeling from '../../typography/labeling';
import styles from './styles';
import HolyTableContext from '../holy-table.context';

interface Props extends Omit<BoxProps, 'css'> {
  index: number;
  children: ReactNode;
}

const HeadCell = ({ sx, index, children, ...props }: Props) => {
  const { middleColumn } = useContext(HolyTableContext);

  return (
    <Labeling
      sx={styles(index === middleColumn)}
      gray
      pb="4px"
      as="th"
      {...props}
    >
      {children}
    </Labeling>
  );
};
export default HeadCell;
