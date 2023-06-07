import { ReactNode, useMemo } from 'react';
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

const HolyTable = ({
  legend,
  children,
  middleColumn,
  bordered = true,
  padded = true,
  hoverable = true,
  standalone = false,
  rowHeight = '50px',
  ...props
}: Props) => {
  const value = useMemo(
    () => ({
      bordered,
      padded,
      hoverable,
      middleColumn,
      rowHeight,
      standalone,
    }),
    [bordered, hoverable, middleColumn, padded, rowHeight, standalone],
  );

  return (
    <HolyTableContext.Provider value={value}>
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
                  <HeadCell key={name} fillSpace={middleColumn === index}>
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
};

export default HolyTable;
