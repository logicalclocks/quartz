import { BoxProps } from 'rebass';
import { TableCell, TableHeader } from './type';
export interface TableProps extends Omit<BoxProps, 'css'> {
    variant?: 'read-only' | 'editable';
    values: TableCell[][];
    columnHeaders: Array<TableHeader>;
}
declare const Table: ({ variant, values, ...props }: TableProps) => import("react/jsx-runtime").JSX.Element;
export default Table;
