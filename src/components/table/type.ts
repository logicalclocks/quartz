import React from 'react';

export type TableCellType = string | string[] | boolean;

export interface TableCell {
  identifierName: string;
  value: TableCellType;
}

export interface TableHeader {
  identifier: ColumnIdentifier;
  headerRender?: (isOpen: boolean) => React.ReactElement;
}

export interface ColumnIdentifier {
  name: string;
  isStatic?: boolean;
  readOnly?: boolean;
}

export interface TableRowComponent {
  identifier: ColumnIdentifier;
  render: (params: {
    value: TableCellType;
    onChange: (value: TableCellType) => void;
  }) => React.ReactElement;
}
