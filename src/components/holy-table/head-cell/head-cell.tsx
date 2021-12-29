import React, { ReactNode, useContext } from 'react';
import { BoxProps } from 'rebass';
import Labeling from '../../typography/labeling';
import HolyTableContext from '../holy-table.context';
import styles from './styles';

interface Props extends Omit<BoxProps, 'css'> {
  index: number;
  children: ReactNode;
}

const HeadCell = ({ sx, index, children, ...props }: Props) => {
  const { middleColumn } = useContext(HolyTableContext);
  const shouldCellFillSpace = index === middleColumn;

  return (
    <Labeling as="th" gray pb="4px" sx={styles(shouldCellFillSpace)} {...props}>
      {children}
    </Labeling>
  );
};

export default HeadCell;
