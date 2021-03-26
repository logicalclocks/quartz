import React, { ComponentType, FC, useMemo } from 'react';
import { Box } from 'rebass';
import TableItem from '../item';
import styles from './row-group.styles';
import { Mode } from '../container/types';
import { TableItemPosition } from '../item/types';

export interface RowGroupProps {
  mode?: Mode;
  components: ComponentType<any>[];
  componentsProps: any[];
  middleColumn: number;
  onRowClick?: (event: any, index: number) => void;
  index: number;
}

const RowGroup: FC<RowGroupProps> = ({
  mode = Mode.full,
  components,
  componentsProps,
  middleColumn,
  onRowClick,
  index,
  ...props
}: RowGroupProps) => {
  function getPosition(mc: number, key: number): TableItemPosition {
    return key <= mc ? TableItemPosition.left : TableItemPosition.right;
  }

  const keys = useMemo(
    () => Object.keys(Array.from({ length: components.length })),
    [components],
  );

  return (
    <Box
      onClick={(e) => onRowClick && onRowClick(e, index)}
      as="tr"
      {...props}
      sx={styles({ mode })}
      width="100%"
    >
      {components.map((component, index) => (
        <TableItem
          key={keys[index]}
          mode={mode}
          component={component}
          componentProps={componentsProps[index] || {}}
          position={getPosition(middleColumn, index)}
          fillSpace={middleColumn === index}
        />
      ))}
    </Box>
  );
};
export default RowGroup;
