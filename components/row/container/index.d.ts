import { ComponentType, FC } from 'react';
import { Mode } from './types';
export interface RowProps {
    mode?: Mode;
    groupComponents: ComponentType<any>[][];
    groupProps: Record<string, any>[][];
    middleColumn: number;
    legend?: String[];
    onRowClick?: (event: any, index: number) => void;
}
declare const Row: FC<RowProps>;
export default Row;
