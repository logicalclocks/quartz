import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { Box } from 'rebass';

// Components
import { TableProps } from '../index';
// Utils
import KeysCollection from '../../../utils/KeysCollection';
// Styles
import {
  containerStyles,
  tableStyles,
  theadStyles,
  trowStyles,
} from '../table.styles';
// Components
import RowLeftContent from './row-left-content';
// types
import {
  ColumnIdentifier,
  TableCell,
  TableHeader,
  TableRowComponent,
} from '../type';
import Thead from '../thead';
import Label from '../../label';

/* eslint-disable implicit-arrow-linebreak */
export interface EditableTableProps extends Omit<TableProps, 'value'> {
  staticColumn?: ColumnIdentifier;
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

/* eslint-disable arrow-body-style */

const EditableTable: FC<EditableTableProps> = ({
  onChangeData,
  onDeleteRow,
  values,
  columnHeaders,
  rowComponents,
  actions = [],
  hasFreezeButton = true,
  ...props
}: EditableTableProps) => {
  const [staticColumn, setStaticColumn] = useState<ColumnIdentifier>();

  useEffect(() => {
    const columnHeader = columnHeaders.find(
      (header) => header.identifier.isStatic,
    );
    if (columnHeader) {
      setStaticColumn(columnHeader.identifier); // TODO also the cells identifiers
    }
  }, [columnHeaders]);

  const handleChangeData = useCallback(
    (rowIndex: number, columnName: string) =>
      (value: string | string[] | boolean) => {
        onChangeData(rowIndex, columnName, value);
      },
    [],
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

  const componentifyCell = (cell: TableCell, rowIndex: number) => {
    const component: TableRowComponent | undefined = rowComponents.find(
      (cpt) => cpt.identifier.name === cell.identifierName,
    );

    const onChange = handleChangeData(rowIndex, cell.identifierName);
    return component
      ? component.render({ value: cell.value, onChange })
      : cell.value;
  };

  useEffect(() => {
    KeysCollection.generateKeys(values);
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
                column={staticColumn.name}
                headerRender={(() => {
                  const staticHeader = columnHeaders.find(
                    (header) => header.identifier.name === staticColumn.name,
                  )!;
                  return (
                    // eslint-disable-next-line operator-linebreak
                    staticHeader.headerRender ||
                    (() => <Label>{staticHeader.identifier.name}</Label>)
                  );
                })()}
              />
            )}

            {columnHeaders
              .filter((header) => header.identifier !== staticColumn)
              .map((header) => (
                <Thead
                  key={header.identifier.name}
                  column={header.identifier.name}
                  headerRender={
                    // eslint-disable-next-line operator-linebreak
                    header.headerRender ||
                    (() => <Label>{header.identifier.name}</Label>)
                  }
                />
              ))}
          </Box>
        </Box>

        <Box as="tbody">
          {sortValues(values, columnHeaders).map(
            (row: TableCell[], rowIndex: number) => (
              <Box key={KeysCollection.getKey(row)} as="tr" sx={trowStyles}>
                <RowLeftContent onDelete={onDeleteRow} index={rowIndex} />

                {/* Static column */}
                {staticColumn && (
                  <Box
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${rowIndex}-${staticColumn.name}`}
                    as="td"
                    p="0px !important"
                  >
                    {componentifyCell(
                      row.find((c) => c.identifierName === staticColumn.name)!,
                      rowIndex,
                    )}
                  </Box>
                )}

                {row
                  .filter((cell: TableCell) => {
                    return staticColumn
                      ? cell.identifierName !== staticColumn.name
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
                      {componentifyCell(cell, rowIndex)}
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
