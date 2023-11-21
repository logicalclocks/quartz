import { Mode } from '../container/types';
export declare enum TableItemPosition {
    left = "left",
    right = "right"
}
export interface ITableItemStyles {
    position: TableItemPosition;
    mode: Mode;
    fillSpace: boolean;
}
