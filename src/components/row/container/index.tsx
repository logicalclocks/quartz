import React, { ComponentType, FC, useMemo } from 'react';
import { Box } from 'rebass';
import TableRow from '../group';
import { Mode } from './types';
import styles from './container.styles';
import Labeling from '../../typography/labeling';
import rowStyles from '../item/row-item.styles';
import { TableItemPosition } from '../item/types';

export interface RowProps {
  mode?: Mode;
  groupComponents: ComponentType<any>[][];
  groupProps: Record<string, any>[][];
  middleColumn: number;
  legend?: String[];
  onRowClick?: (event: any, index: number) => void;
}

const Row: FC<RowProps> = ({
  mode = Mode.full,
  groupComponents,
  groupProps,
  legend,
  middleColumn,
  onRowClick,
  ...props
}: RowProps) => {
  const keys = useMemo(
    () => Object.keys(Array.from({ length: groupComponents.length })),
    [groupComponents],
  );

  return (
    <Box as="table" sx={styles} {...props}>
      <Box as="tbody">
        {!!legend && (
          <Box as="tr" width="100%">
            {legend.map((name, index) => (
              <Labeling
                key={`${name}${index}`}
                sx={rowStyles({
                  position: TableItemPosition.left,
                  mode,
                  fillSpace: false,
                })}
                gray
                pb="4px"
                as="td"
              >
                {name}
              </Labeling>
            ))}
          </Box>
        )}
        {groupComponents.map((row, index) => (
          <TableRow
            index={index}
            onRowClick={onRowClick}
            key={keys[index]}
            mode={mode}
            components={row}
            componentsProps={groupProps[index]}
            middleColumn={middleColumn}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Row;
