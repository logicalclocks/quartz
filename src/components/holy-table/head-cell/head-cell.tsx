import React, { ReactNode } from 'react';
import { BoxProps } from 'rebass';
import Labeling from '../../typography/labeling';
import styles from './styles';

interface Props extends Omit<BoxProps, 'css'> {
  fillSpace?: boolean;
  children: ReactNode;
}

const HeadCell = ({ sx, fillSpace = false, children, ...props }: Props) => {
  return (
    <Labeling as="th" gray pb="4px" sx={styles(fillSpace)} {...props}>
      {children}
    </Labeling>
  );
};

export default HeadCell;
