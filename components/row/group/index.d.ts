import { ComponentType, FC } from 'react';
import { Mode } from '../container/types';
export interface RowGroupProps {
    mode?: Mode;
    components: ComponentType<any>[];
    componentsProps: any[];
    middleColumn: number;
    onRowClick?: (event: any, index: number) => void;
    index: number;
}
declare const RowGroup: FC<RowGroupProps>;
export default RowGroup;
