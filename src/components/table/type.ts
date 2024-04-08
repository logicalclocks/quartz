import { Row } from '@tanstack/react-table';

export type TableCellType = string | string[] | boolean;

export interface TableCell {
  identifierName: string;
  value: TableCellType;
  readOnly?: boolean;
  /* no usage just for fixing type, use `cellRender` in TableHeader props instead */
  render?: TableHeader['cellRender'];
}

export interface TableHeader {
  identifier: ColumnIdentifier;
  headerRender?: (isOpen: boolean) => React.ReactElement;
  cellRender?: (props: { value: any; isHovered?: boolean }) => React.ReactNode;
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
