import React from 'react';
export type TableCellType = string | string[] | boolean;
export interface TableCell {
    identifierName: string;
    value: TableCellType;
    readOnly?: boolean;
}
export interface TableHeader {
    identifier: ColumnIdentifier;
    headerRender?: (isOpen: boolean) => React.ReactElement;
}
export interface ColumnIdentifier {
    name: string;
}
export interface TableRowComponent {
    identifier: ColumnIdentifier;
    render: (params: {
        value: TableCellType;
        onChange: (value: TableCellType) => void;
        readOnly: boolean;
        row: TableCell[];
    }) => React.ReactElement;
}
