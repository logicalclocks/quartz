/// <reference types="react" />
import { CardProps } from 'rebass';
interface Bar {
    proportion: number;
    variant: 'perf.black' | 'perf.gray' | 'perf.green' | 'perf.orange';
}
export interface PerformanceCardProps extends Omit<CardProps, 'css'> {
    bars: Bar[];
    children: React.ReactNode;
}
declare const PerformanceCard: ({ bars, children, ...props }: PerformanceCardProps) => import("react/jsx-runtime").JSX.Element;
export default PerformanceCard;
