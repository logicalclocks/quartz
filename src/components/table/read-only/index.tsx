import { FC, useState } from 'react';
import { Box } from 'rebass';

// Components
import { TableProps } from '../index';

// Styles
import {
  containerStyles,
  tableStyles,
  theadStyles,
  trowStyles,
} from '../table.styles';

import Thead from '../thead';
import { TableCell, TableHeader } from '../type';
import Label from '../../label';

export interface ReadOnlyTableProps extends Omit<TableProps, 'value'> {
  initialStaticColumn?: string;
  values: TableCell[][];
  columnHeaders: TableHeader[];
  actions: Array<{
    label: string;
    handler: (column: string) => void;
  }>;
}

/* eslint-disable arrow-body-style */

const ReadOnlyTable: FC<ReadOnlyTableProps> = ({
  initialStaticColumn,
  values,
  columnHeaders,
  actions,
}: ReadOnlyTableProps) => {
  const [hoverColumn, setHoverColumn] = useState<string>();

  const [staticColumn, setStaticColumn] = useState<string | undefined>(
    initialStaticColumn,
  );
  const sortValues = (
    cells: TableCell[][],
    headers: TableHeader[],
  ): TableCell[][] => {
    return cells.map((row) => {
      return headers.map((header) => {
        return row.find(
          (cell) => cell.identifierName === header.identifier.name,
        )!;
      });
    });
  };

  return (
    <Box sx={containerStyles}>
      <Box as="table" sx={tableStyles}>
        <Box as="thead" sx={theadStyles}>
          <Box as="tr">
            <Box as="th" className="table-corner" />
            {staticColumn && (
              <Thead
                column={staticColumn}
                actions={[
                  {
                    label: 'unfreeze',
                    handler: () => {
                      setStaticColumn(undefined);
                    },
                  },
                  ...actions,
                ]}
                headerRender={(() => {
                  const staticHeader = columnHeaders.find(
                    (header) => header.identifier.name === staticColumn,
                  )!;
                  return (
                    staticHeader.headerRender ??
                    // eslint-disable-next-line react/no-unstable-nested-components
                    (() => <Label>{staticHeader.identifier.name}</Label>)
                  );
                })()}
                className={`static-column ${
                  hoverColumn === staticColumn && 'hover-column'
                }`}
              />
            )}

            {columnHeaders
              .filter((header) => header.identifier.name !== staticColumn)
              .map((header: TableHeader) => (
                <Thead
                  key={header.identifier.name}
                  column={header.identifier.name}
                  headerRender={
                    header.headerRender ??
                    // eslint-disable-next-line react/no-unstable-nested-components
                    (() => <Label>{header.identifier.name}</Label>)
                  }
                  actions={[
                    {
                      label: 'freeze',
                      handler: (column) => {
                        setStaticColumn(column);
                      },
                    },
                    ...actions,
                  ]}
                  className={`${
                    hoverColumn === header.identifier.name && 'hover-column'
                  }`}
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
          {sortValues(values, columnHeaders).map((row, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Box key={index} as="tr" sx={trowStyles}>
              <Box as="td" id={String(index + 1)}>
                <span>{index + 1}</span>
              </Box>

              {staticColumn && (
                <Box
                  as="td"
                  className={`static-column ${
                    hoverColumn === staticColumn && 'hover-column'
                  }`}
                  onMouseEnter={() => setHoverColumn(staticColumn)}
                  onMouseLeave={() => setHoverColumn(undefined)}
                >
                  {
                    row.find((cell) => cell.identifierName === staticColumn)
                      ?.value
                  }
                </Box>
              )}
              {row
                .filter((cell: TableCell) => {
                  return staticColumn
                    ? cell.identifierName !== staticColumn
                    : true;
                })
                .map((cell: TableCell) => (
                  <Box
                    key={cell.identifierName}
                    as="td"
                    className={
                      hoverColumn === cell.identifierName ? 'hover-column' : ''
                    }
                    onMouseEnter={() => setHoverColumn(cell.identifierName)}
                    onMouseLeave={() => setHoverColumn(undefined)}
                  >
                    {cell.value}
                  </Box>
                ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ReadOnlyTable;
