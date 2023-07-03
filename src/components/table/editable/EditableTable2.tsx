/* eslint-disable no-unused-vars */
import * as R from 'ramda';
import { useEffect, useState } from 'react';
import {
  TableMeta,
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
  RowData,
  TableOptions,
} from '@tanstack/react-table';
import {
  containerStyles,
  tableStyles,
  theadStyles,
  trowStyles,
} from '../table.styles';
import { Box } from '../../box';
import RowLeftContent from './row-left-content';
import Input from '../../input';
import Thead from '../thead';
import Label from '../../label';
import { TableCellType, TableRowComponent } from '../type';
import { GetIcon, IconName } from '../../icon';

export interface Props<T>
  extends Omit<TableOptions<T>, 'getCoreRowModel' | 'enablePinning'> {
  updateData?: TableMeta<T>['updateData'];
  onDeleteRow: (rowIndex: number) => void;
  hasFreezeButton?: boolean;
  actions?: Array<{
    label: string;
    handler: (column: string) => void;
  }>;
}

export function EditableTable2<T>({
  data,
  columns: columns_,
  defaultColumn = defColumn<T>(),
  updateData,
  onDeleteRow,
  hasFreezeButton = true,
  actions = [],
  state,
  ...tableOptions
}: Props<T>) {
  const columns = columns_.map(({ header, cell, ...rest }) => ({
    ...rest,
    ...(cell ? { cell: blurifyCell<T>(cell as any) } : {}),
    // if header is not defined then set it as capitalized accessorKey
    ...(header
      ? { header }
      : { header: R.adjust(0, R.toUpper, (rest as any).accessorKey) }),
  })) as ColumnDef<T>[];
  const [columnPinning, setColumnPinning] = useState({});
  const table = useReactTable({
    data,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData,
    },
    onColumnPinningChange: setColumnPinning,
    state: {
      columnPinning,
      ...state,
    },
    enablePinning: !hasFreezeButton,
    ...tableOptions,
  });

  return (
    <Box sx={{ ...containerStyles }}>
      <Box as="table" sx={tableStyles}>
        <Box as="thead" sx={theadStyles}>
          {table.getHeaderGroups().map((headerGroup) => (
            <Box as="tr" key={headerGroup.id}>
              <Box as="th" className="table-corner" />

              {headerGroup.headers.map((header) => (
                <Thead
                  key={header.id}
                  column={header.id}
                  // eslint-disable-next-line react/no-unstable-nested-components
                  headerRender={() =>
                    header.isPlaceholder ? null : (
                      <Label
                        align="left"
                        sx={{
                          '> span': {
                            m: '0px',
                          },
                        }}
                      >
                        {header.column.getIsPinned() && (
                          <GetIcon
                            size="sm"
                            icon={IconName.pin_filled}
                            mr="5px"
                          />
                        )}
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </Label>
                    )
                  }
                  actions={
                    hasFreezeButton
                      ? [
                          {
                            label: header.column.getIsPinned()
                              ? 'unpin'
                              : 'pin',
                            handler: () => {
                              header.column.pin(
                                !header.column.getIsPinned() && 'left',
                              );
                            },
                          },
                          ...actions,
                        ]
                      : actions
                  }
                />
              ))}
            </Box>
          ))}
        </Box>
        <Box as="tbody">
          {table.getRowModel().rows.map((row, rowIndex) => (
            <Box key={row.id} as="tr" sx={trowStyles}>
              <RowLeftContent
                onDelete={() => onDeleteRow(rowIndex)}
                index={rowIndex}
              />
              {row.getVisibleCells().map((cell) => (
                <Box
                  key={cell.id}
                  as="td"
                  sx={{ bg: 'grayShade3' }}
                  p="0px !important"
                >
                  {
                    flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext(),
                    ) as any
                  }
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function defColumn<T>(): Partial<ColumnDef<T>> {
  return {
    cell: ({ getValue, row: { index }, column: { id }, table }) => {
      const initialValue = getValue() as TableCellType;
      // We need to keep and update the state of the cell normally
      const [value, setValue] = useState(initialValue);

      // When the input is blurred, we'll call our table meta's updateData function
      const onBlur = () => {
        table.options.meta?.updateData?.(index, id, value);
      };

      // If the initialValue is changed external, sync it up with our state
      useEffect(() => {
        setValue(initialValue);
      }, [initialValue]);

      return (
        <Input
          value={value as string}
          onChange={(e) => setValue(e.target.value)}
          onMouseLeave={onBlur}
        />
      );
    },
  };
}

function blurifyCell<T>(
  cell: TableRowComponent['render'],
): ColumnDef<T>['cell'] {
  return ({ getValue, row, column: { id }, table }) => {
    const initialValue = getValue() as TableCellType;
    // We need to keep and update the state of the cell normally
    const [value, setValue] = useState<TableCellType>(initialValue);

    // When the input is blurred, we'll call our table meta's updateData function
    const onBlur = () => {
      table.options.meta?.updateData?.(row.index, id, value);
    };

    // If the initialValue is changed external, sync it up with our state
    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    return cell({
      value,
      onChange: setValue,
      row,
      onBlur,
    });
  };
}

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    updateData?: (
      rowIndex: number,
      columnId: string,
      value: TableCellType,
    ) => void;
  }
  interface ColumnMeta<TData extends RowData, TValue> {
    readonly?: boolean;
  }
}
