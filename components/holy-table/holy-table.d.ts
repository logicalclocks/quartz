import { FC, ReactNode } from 'react';
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
declare const HolyTable: FC<Props>;
export default HolyTable;
