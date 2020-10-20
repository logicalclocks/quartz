import React, { ComponentType, FC, useMemo } from 'react';
import { Box } from 'rebass';
import TableRow from '../group';
import { Mode } from './types';
import styles from './container.styles';

export interface RowProps {
  mode?: Mode;
  groupComponents: ComponentType<any>[][];
  groupProps: Record<string, any>[][];
  middleColumn: number;
}

const Row: FC<RowProps> = ({
  mode = Mode.full,
  groupComponents,
  groupProps,
  middleColumn,
  ...props
}: RowProps) => {
  const keys = useMemo(
    () => Object.keys(Array.from({ length: groupComponents.length })),
    [groupComponents],
  );

  return (
    <Box as="table" sx={styles} {...props}>
      <Box as="tbody">
        {groupComponents.map((row, index) => (
          <TableRow
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
