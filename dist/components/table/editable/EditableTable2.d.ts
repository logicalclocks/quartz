import { TableMeta, RowData, TableOptions } from '@tanstack/react-table';
import { TableCellType } from '../type';
export interface Props<T> extends Omit<TableOptions<T>, 'getCoreRowModel' | 'enablePinning'> {
    updateData?: TableMeta<T>['updateData'];
    onDeleteRow: (rowIndex: number) => void;
    hasFreezeButton?: boolean;
    actions?: Array<{
        label: string;
        handler: (column: string) => void;
    }>;
}
export declare function EditableTable2<T>({ data, columns: columns_, defaultColumn, updateData, onDeleteRow, hasFreezeButton, actions, state, ...tableOptions }: Props<T>): import("react/jsx-runtime").JSX.Element;
declare module '@tanstack/react-table' {
    interface TableMeta<TData extends RowData> {
        updateData?: (rowIndex: number, columnId: string, value: TableCellType) => void;
    }
    interface ColumnMeta<TData extends RowData, TValue> {
        readonly?: boolean;
    }
}
