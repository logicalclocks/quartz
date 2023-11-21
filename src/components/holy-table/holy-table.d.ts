import { ReactNode } from 'react';
export interface Props {
    legend?: string[];
    children: ReactNode;
    bordered?: boolean;
    padded?: boolean;
    hoverable?: boolean;
    middleColumn?: number;
    standalone?: boolean;
    rowHeight?: string;
}
declare const HolyTable: ({ legend, children, middleColumn, bordered, padded, hoverable, standalone, rowHeight, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default HolyTable;
