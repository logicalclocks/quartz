import { ComponentType } from 'react';
import { Mode } from '../container/types';
export interface RowGroupProps {
    mode?: Mode;
    components: ComponentType<any>[];
    componentsProps: any[];
    middleColumn: number;
    onRowClick?: (event: any, index: number) => void;
    index: number;
}
declare const RowGroup: ({ mode, components, componentsProps, middleColumn, onRowClick, index, ...props }: RowGroupProps) => import("react/jsx-runtime").JSX.Element;
export default RowGroup;
