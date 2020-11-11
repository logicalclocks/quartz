export type FGItem = {
  columnName: string;
  columnValue: string;
  isPrimary?: boolean;
  isPartition?: boolean;
};

export type FGRow = {
  type: string;
  row: Array<FGItem>;
};
