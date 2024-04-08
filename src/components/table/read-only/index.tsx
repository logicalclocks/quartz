import { useMemo, useState } from 'react';
import { Box, SxStyleProp } from 'rebass';

import { TableProps } from '../index';
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
  sx: SxStyleProp;
}

const ReadOnlyTable = ({
  initialStaticColumn,
  values,
  columnHeaders,
  actions,
  sx = {},
}: ReadOnlyTableProps) => {
  const [hoverColumn, setHoverColumn] = useState<{
    column: string;
    rowIdx: number;
  }>();

  const [staticColumn, setStaticColumn] = useState<string | undefined>(
    initialStaticColumn,
  );

  const sortedValues = useMemo(
    () =>
      values.map((row) =>
        columnHeaders.map((header) => ({
          ...row.find(
            (cell) => cell.identifierName === header.identifier.name,
          )!,
          render: header.cellRender,
        })),
      ) as TableCell[][],
    [columnHeaders, values],
  );

  const renderCell = ({ value, render }: TableCell, isHovered: boolean) => {
    if (render) return render({ value, isHovered });
    return value;
  };

  return (
    <Box sx={{ ...containerStyles, ...sx } as SxStyleProp}>
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
                  hoverColumn?.column === staticColumn && 'hover-column'
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
                    hoverColumn?.column === header.identifier.name &&
                    'hover-column'
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
          {sortedValues.map((row, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Box key={index} as="tr" sx={trowStyles}>
              <Box as="td" id={String(index + 1)}>
                <span>{index + 1}</span>
              </Box>

              {staticColumn && (
                <Box
                  as="td"
                  className={`static-column ${
                    hoverColumn?.column === staticColumn && 'hover-column'
                  }`}
                  onMouseEnter={() =>
                    setHoverColumn({ column: staticColumn, rowIdx: index })
                  }
                  onMouseLeave={() => setHoverColumn(undefined)}
                  sx={{
                    ...(row.find((cell) => cell.identifierName === staticColumn)
                      ?.render && { p: '0px !important' }),
                  }}
                >
                  {renderCell(
                    row.find((cell) => cell.identifierName === staticColumn)!,
                    hoverColumn?.rowIdx === index,
                  )}
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
                      hoverColumn?.column === cell.identifierName
                        ? 'hover-column'
                        : ''
                    }
                    onMouseEnter={() =>
                      setHoverColumn({
                        column: cell.identifierName,
                        rowIdx: index,
                      })
                    }
                    onMouseLeave={() => setHoverColumn(undefined)}
                    sx={{ ...(cell.render && { p: '0px !important' }) }}
                  >
                    {renderCell(cell, hoverColumn?.rowIdx === index)}
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
