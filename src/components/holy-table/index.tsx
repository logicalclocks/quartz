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

(HolyTable as HolyTableComponent).HeadCell = HeadCell;
(HolyTable as HolyTableComponent).Cell = Cell;
(HolyTable as HolyTableComponent).Row = Row;

export type { Props as HolyTableProps } from './holy-table';
export default HolyTable as HolyTableComponent;
