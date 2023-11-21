import Cell from './cell/cell';
import Row from './row';
import HolyTable from './holy-table';
import HeadCell from './head-cell';
type IHolyTable = typeof HolyTable;
interface HolyTableComponent extends IHolyTable {
    HeadCell: typeof HeadCell;
    Cell: typeof Cell;
    Row: typeof Row;
}
export type { Props as HolyTableProps } from './holy-table';
declare const _default: HolyTableComponent;
export default _default;
