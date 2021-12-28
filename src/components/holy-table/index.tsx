import Cell from './cell/cell';
import Row from './row';
import HolyTable from './holy-table';

type HolyTable = typeof HolyTable;

interface HolyTableComponent extends HolyTable {
  Cell: typeof Cell;
  Row: typeof Row;
}

(HolyTable as HolyTableComponent).Cell = Cell;
(HolyTable as HolyTableComponent).Row = Row;

export type { Props as HolyTableProps } from './holy-table';
export default HolyTable as HolyTableComponent;
