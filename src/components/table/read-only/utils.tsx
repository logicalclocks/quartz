// Types
import { Item, Row } from '../type';

export const getColumns = (rows: Array<Row>) => {
    // All rows contains all columns
    return rows[0].row.map((item: Item) => item.columnName)
}

export const getRows = (rows: Array<Row>) => {
    const columns = getColumns(rows);

    return rows.map((row: Row) => {
            let newRow = {};
            row.row.map( (item: Item) => newRow[item.columnName] = item.columnValue )
            return newRow;
        }
    )
};
