import { ComponentType } from 'react';
import { Mode } from './types';
export interface RowProps {
    mode?: Mode;
    groupComponents: ComponentType<any>[][];
    groupProps: Record<string, any>[][];
    middleColumn: number;
    legend?: String[];
    onRowClick?: (event: any, index: number) => void;
}
declare const Row: ({ mode, groupComponents, groupProps, legend, middleColumn, onRowClick, ...props }: RowProps) => import("react/jsx-runtime").JSX.Element;
export default Row;
