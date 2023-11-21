/// <reference types="react" />
import { TableProps } from '../index';
import { TableCell, TableHeader, TableRowComponent } from '../type';
export interface EditableTableProps extends Omit<TableProps, 'value'> {
    initialStaticColumn?: string;
    values: TableCell[][];
    columnHeaders: TableHeader[];
    rowComponents: TableRowComponent[];
    onChangeData: (rowIndex: number, columnName: string, value: string | string[] | boolean) => void;
    onDeleteRow: (ind: number) => void;
    actions?: Array<{
        label: string;
        handler: (column: string) => void;
    }>;
    hasFreezeButton?: boolean;
}
declare const _default: import("react").MemoExoticComponent<({ onChangeData, onDeleteRow, initialStaticColumn, values, columnHeaders, rowComponents, actions, hasFreezeButton, ...props }: EditableTableProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
