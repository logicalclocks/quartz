

export type Item = {
    columnName: string,
    columnValue: string
}

export type Row = {
    type: string,
    row: Array<Item>
}