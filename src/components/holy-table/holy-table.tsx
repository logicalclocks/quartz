import React, { FC, ReactNode } from 'react';
import { Box } from 'rebass';
import HeadCell from './head-cell/head-cell';
import HolyTableContext from './holy-table.context';
import styles from './styles';

export interface Props {
  legend?: string[];
  children: ReactNode;
  bordered?: boolean;
  padded?: boolean;
  hoverable?: boolean;
  middleColumn?: number;
  standalone?: boolean;
  rowHeight?: string;
}

const HolyTable: FC<Props> = ({
  legend,
  children,
  middleColumn,
  bordered = true,
  padded = true,
  hoverable = true,
  standalone = false,
  rowHeight = '50px',
  ...props
}) => (
  <HolyTableContext.Provider
    value={{ bordered, padded, hoverable, middleColumn, rowHeight, standalone }}
  >
    <Box as="table" sx={styles} {...props}>
      {legend ? (
        /* the logic is that if there is a `legend`, then this is a very simple table and we can insert `tbody` and `thead`.//
           otherwise, we want to be able to put our own `thead` and `tbody` with custom children

           so, there are two ways to do this:
        */
        <>
          <Box as="thead">
            <Box as="tr" width="100%">
              {legend.map((name, index) => (
                // there was no other way for generating keys :()
                // eslint-disable-next-line react/no-array-index-key
                <HeadCell key={name + index} fillSpace={middleColumn === index}>
                  {name}
                </HeadCell>
              ))}
            </Box>
          </Box>
          <Box as="tbody">{children}</Box>
        </>
      ) : (
        children
      )}
    </Box>
  </HolyTableContext.Provider>
);

export default HolyTable;
