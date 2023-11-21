/// <reference types="react" />
import { Row } from '@tanstack/react-table';
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
export interface TableCellRenderProps {
    value: TableCellType;
    onChange: (value: TableCellType) => void;
    row: Row<any>;
    onBlur: (value: unknown) => void;
}
export interface TableRowComponent {
    identifier: ColumnIdentifier;
    render: (params: TableCellRenderProps) => React.ReactNode;
}
