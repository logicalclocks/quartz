import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { Box } from 'rebass';

// Components
import { TableProps } from '../index';
// Utils
import { getRows } from '../read-only/utils';
import KeysCollection from '../../../utils/KeysCollection';
// Styles
import {
  containerStyles,
  lastTheadStyles,
  tableStyles,
  theadStyles,
  trowStyles,
} from '../table.styles';
// Components
import RowLeftContent from './row-left-content';
import { Thead } from '../read-only';
// types
import { FGRow } from '../type';

export interface TableColumn {
  name: string;
  render: FC<any>;
  isPrimary?: boolean;
  isPartition?: boolean;
}

export interface EditableTableProps extends Omit<TableProps, 'value'> {
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
  columns: TableColumn[];
  values: FGRow[];
  hasFreezeButton?: boolean;
}

const EditableTable: FC<EditableTableProps> = ({
  onChangeData,
  onDeleteRow,
  values,
  columns,
  actions = [],
  hasFreezeButton = true,
  ...props
}: EditableTableProps) => {
  const [staticColumn, setStaticColumn] = useState<TableColumn>();

  const onFreeze = useCallback((column?: TableColumn) => {
    setStaticColumn(column);
  }, []);

  const handleChangeData = useCallback(
    (rowIndex: number, columnName: string) => (
      value: string | string[] | boolean,
    ) => {
      onChangeData(rowIndex, columnName, value);
    },
    [],
  );

  useEffect(() => {
    KeysCollection.generateKeys(values);
  }, [values.length]);

  return (
    <Box {...props} sx={{ ...containerStyles }}>
      <Box {...props} as="table" sx={tableStyles}>
        <Box as="thead" sx={theadStyles}>
          <Box as="th" sx={theadStyles} className="table-corner" />

          {/* Static column */}
          {staticColumn && (
            <Thead
              column={staticColumn.name}
              isPartition={staticColumn.isPartition}
              isPrimary={staticColumn.isPrimary}
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

          {columns.map(
            (column) =>
              column.name !== staticColumn?.name && (
                <Thead
                  key={column.name}
                  column={column.name}
                  isPartition={column.isPartition}
                isPrimary={column.isPrimary}
                  actions={
                    hasFreezeButton
                      ? [
                        {
                          label: 'freeze',
                          handler: () => {
                            onFreeze(column);
                          },
                        },
                        ...actions,
                      ]
                      : actions
                  }
              />
            ),
          )}
          <Box as="th" sx={{ ...lastTheadStyles }} />
        </Box>

        <Box as="tbody">
          {getRows(values).map((row, rowIndex) => (
            <Box key={KeysCollection.getKey(row)} as="tr" sx={trowStyles}>
              <RowLeftContent onDelete={onDeleteRow} index={rowIndex} />

              {/* Static column */}
              {staticColumn && (
                <Box
                  key={`${rowIndex}-${staticColumn.name}`}
                  as="td"
                  p="0px !important"
                >
                  {staticColumn.render({
                    readOnly: row[`${staticColumn.name}readOnly`],
                    onChange: handleChangeData(rowIndex, staticColumn.name),
                    value: row[staticColumn.name],
                  })}
                </Box>
              )}

              {columns.map(
                (column) =>
                  column.name !== staticColumn?.name && (
                    <Box
                      key={`${KeysCollection.getKey(row)}-${column.name}`}
                      as="td"
                      sx={{ bg: 'grayShade3' }}
                      p="0px !important"
                    >
                      {column.render({
                        readOnly: row[column.name + 'readOnly'],
                        onChange: handleChangeData(rowIndex, column.name),
                        value: row[column.name],
                      })}
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

export default memo(EditableTable);
