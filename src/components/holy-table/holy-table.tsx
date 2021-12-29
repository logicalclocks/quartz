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
}

const HolyTable: FC<Props> = ({
  legend,
  children,
  middleColumn,
  bordered = true,
  padded = true,
  hoverable = true,
  ...props
}) => (
  <HolyTableContext.Provider
    value={{ bordered, padded, hoverable, middleColumn }}
  >
    <Box as="table" sx={styles} {...props}>
      <Box as="thead">
        {legend && (
          <Box as="tr" width="100%">
            {legend.map((name, index) => (
              // there was no other way for generating keys :()
              // eslint-disable-next-line react/no-array-index-key
              <HeadCell key={name + index} index={index}>
                {name}
              </HeadCell>
            ))}
          </Box>
        )}
      </Box>
      <Box as="tbody">{children}</Box>
    </Box>
  </HolyTableContext.Provider>
);

export default HolyTable;
