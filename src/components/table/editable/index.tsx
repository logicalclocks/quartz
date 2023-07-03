import { memo, useCallback, useEffect, useState } from 'react';
import { Box } from 'rebass';

import { TableProps } from '../index';
import KeysCollection from '../../../utils/KeysCollection';
import {
  containerStyles,
  tableStyles,
  theadStyles,
  trowStyles,
} from '../table.styles';
import RowLeftContent from './row-left-content';
import { TableCell, TableHeader, TableRowComponent } from '../type';
import Thead from '../thead';
import Label from '../../label';

export interface EditableTableProps extends Omit<TableProps, 'value'> {
  initialStaticColumn?: string;
  values: TableCell[][];
  columnHeaders: TableHeader[];
  rowComponents: TableRowComponent[];
  onChangeData: (
    rowIndex: number,
    columnName: string,
    value: string | string[] | boolean,
  ) => void;
  onDeleteRow: (ind: number) => void;
  actions?: Array<{
    label: string;
    handler: (column: string) => void;
  }>;
  hasFreezeButton?: boolean;
}

const EditableTable = ({
  onChangeData,
  onDeleteRow,
  initialStaticColumn,
  values,
  columnHeaders,
  rowComponents,
  actions = [],
  hasFreezeButton = true,
  ...props
}: EditableTableProps) => {
  const [staticColumn, setStaticColumn] = useState<string | undefined>(
    initialStaticColumn,
  );

  const handleChangeData = useCallback(
    (rowIndex: number, columnName: string) =>
      (value: string | string[] | boolean) => {
        onChangeData(rowIndex, columnName, value);
      },
    [onChangeData],
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

  const componentifyCell = (
    cell: TableCell,
    rowIndex: number,
    row: TableCell[],
  ): React.ReactNode | any => {
    const component: TableRowComponent | undefined = rowComponents.find(
      (cpt) => cpt.identifier.name === cell.identifierName,
    );

    const onChange = handleChangeData(rowIndex, cell.identifierName);
    return component
      ? component.render({
          value: cell.value,
          onChange,
          readOnly: cell.readOnly || false,
          row,
        } as any)
      : cell.value;
  };

  useEffect(() => {
    KeysCollection.generateKeys(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.length]);

  // @ts-ignore
  return (
    <Box {...props} sx={{ ...containerStyles }}>
      <Box {...props} as="table" sx={tableStyles}>
        <Box as="thead" sx={theadStyles}>
          <Box as="tr">
            <Box as="th" className="table-corner" />
            {/* Static column */}
            {staticColumn && (
              <Thead
                column={staticColumn}
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
                actions={
                  hasFreezeButton
                    ? [
                        {
                          label: 'unfreeze',
                          handler: () => {
                            setStaticColumn(undefined);
                          },
                        },
                        ...actions,
                      ]
                    : actions
                }
              />
            )}

            {columnHeaders
              .filter((header) => header.identifier.name !== staticColumn)
              .map((header) => (
                <Thead
                  key={header.identifier.name}
                  column={header.identifier.name}
                  headerRender={
                    header.headerRender ??
                    // eslint-disable-next-line react/no-unstable-nested-components
                    (() => <Label>{header.identifier.name}</Label>)
                  }
                  actions={
                    hasFreezeButton
                      ? [
                          {
                            label: 'freeze',
                            handler: (column) => {
                              setStaticColumn(column);
                            },
                          },
                          ...actions,
                        ]
                      : actions
                  }
                />
              ))}
          </Box>
        </Box>

        <Box as="tbody">
          {sortValues(values, columnHeaders).map(
            (row: TableCell[], rowIndex: number) => (
              <Box key={KeysCollection.getKey(row)} as="tr" sx={trowStyles}>
                <RowLeftContent
                  onDelete={() => onDeleteRow(rowIndex)}
                  index={rowIndex}
                />

                {/* Static column */}
                {staticColumn && (
                  <Box
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${rowIndex}-${staticColumn}`}
                    as="td"
                    p="0px !important"
                  >
                    {
                      componentifyCell(
                        row.find((c) => c.identifierName === staticColumn)!,
                        rowIndex,
                        row,
                      ) as any
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
                      key={`${KeysCollection.getKey(row)}-${
                        cell.identifierName
                      }`}
                      as="td"
                      sx={{ bg: 'grayShade3' }}
                      p="0px !important"
                    >
                      {componentifyCell(cell, rowIndex, row)}
                    </Box>
                  ))}
              </Box>
            ),
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default memo(EditableTable);
