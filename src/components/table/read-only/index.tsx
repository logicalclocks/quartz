import React, { FC, useState } from 'react';
import { Box } from 'rebass';

// Components
import { TableProps } from '../index';

// Utils
import { getColumns, getRows } from '../utils';

// Styles
import {
  containerStyles,
  tableStyles,
  theadStyles,
  trowStyles,
} from '../table.styles';

import Thead from '../thead';

export interface ReadOnlyTableProps extends Omit<TableProps, 'value'> {
  staticColumn?: string;
  onFreeze: (column?: string) => void;
  actions: Array<{
    label: string;
    handler: (column: string) => void;
  }>;
}

const ReadOnlyTable: FC<ReadOnlyTableProps> = ({
  staticColumn,
  onFreeze,
  actions,
  ...props
}: ReadOnlyTableProps) => {
  const [hoverColumn, setHoverColumn] = useState<string>();

  return (
    <Box sx={containerStyles}>
      <Box as="table" sx={tableStyles}>
        <Box as="thead" sx={theadStyles}>
          <Box as="tr">
            <Box as="th" className="table-corner" />
            {staticColumn && (
              <Thead
                column={staticColumn}
                isPrimary={
                  props.values[0].row.find((r) => r.columnName === staticColumn)
                    ?.isPrimary
                }
                isPartition={
                  props.values[0].row.find((r) => r.columnName === staticColumn)
                    ?.isPartition
                }
                className={`static-column ${
                  hoverColumn === staticColumn && 'hover-column'
                }`}
                actions={[
                  {
                    label: 'unfreeze',
                    handler: () => {
                      onFreeze();
                    },
                  },
                  ...actions,
                ]}
              />
            )}

            {getColumns(props.values).map((column: string) => column !== staticColumn && (
                  <Thead
                    key={column}
                    column={column}
                    isPrimary={
                      props.values[0].row.find((r) => r.columnName === column)
                        ?.isPrimary
                    }
                    isPartition={
                      props.values[0].row.find((r) => r.columnName === column)
                        ?.isPartition
                    }
                    className={`${hoverColumn === column && 'hover-column'}`}
                    actions={[
                      {
                        label: 'freeze',
                        handler: (column) => {
                          onFreeze(column);
                        },
                      },
                      ...actions,
                    ]}
                  />
                  ))}
          </Box>
        </Box>
        <Box
          as="tbody"
          sx={{
            backgroundColor: 'white',
          }}
        >
          {getRows(props.values).map((row, i) => (
            <Box key={i} as="tr" sx={trowStyles}>
              <Box as="td" id={String(i + 1)}>
                <span>{i + 1}</span>
              </Box>

              {staticColumn && (
                <Box
                  as="td"
                  className={`static-column ${
                    hoverColumn === staticColumn && 'hover-column'
                  }`}
                  onMouseEnter={() => setHoverColumn(staticColumn)}
                  onMouseLeave={() => setHoverColumn('')}
                >
                  {row[staticColumn]}
                </Box>
              )}
              {getColumns(props.values).map(
                (column: string) =>
                  column !== staticColumn && (
                    <Box
                      key={column}
                      as="td"
                      className={`${hoverColumn === column && 'hover-column'}`}
                      onMouseEnter={() => setHoverColumn(column)}
                      onMouseLeave={() => setHoverColumn('')}
                    >
                      {row[column]}
                    </Box>
                  ),
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ReadOnlyTable;
