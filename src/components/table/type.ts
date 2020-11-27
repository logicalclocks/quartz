export type FGItem = {
  columnName: string;
  columnValue: string | string[] | boolean;
  isPrimary?: boolean;
  isPartition?: boolean;
  readOnly?: boolean;
};

export type FGRow = {
  type?: string;
  row: Array<FGItem>;
};
