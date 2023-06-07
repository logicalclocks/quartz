import React from 'react';
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
declare const _default: React.NamedExoticComponent<EditableTableProps>;
export default _default;
