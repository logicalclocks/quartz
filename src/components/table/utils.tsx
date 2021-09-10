// Types
import { FGItem, FGRow } from './type';

/* eslint-disable arrow-body-style */

export const getColumns = (rows: Array<FGRow>) => {
  // All rows contains all columns
  return rows[0].row.map((item: FGItem) => item.columnName);
};

export const getRows = (rows: Array<FGRow>) => {
  return rows.map((row: FGRow) => {
    const newRow = {};
    row.row.forEach((item: FGItem) => {
      newRow[item.columnName] = item.columnValue;
      newRow[`${item.columnName}readOnly`] = item.readOnly;
    });
    return newRow;
  });
};
