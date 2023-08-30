import { TableProps } from '../index';
import { TableCell, TableHeader } from '../type';
export interface ReadOnlyTableProps extends Omit<TableProps, 'value'> {
    initialStaticColumn?: string;
    values: TableCell[][];
    columnHeaders: TableHeader[];
    actions: Array<{
        label: string;
        handler: (column: string) => void;
    }>;
}
declare const ReadOnlyTable: ({ initialStaticColumn, values, columnHeaders, actions, }: ReadOnlyTableProps) => import("react/jsx-runtime").JSX.Element;
export default ReadOnlyTable;
