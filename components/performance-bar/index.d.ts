import { FC } from 'react';
interface Bar {
    proportion: number;
    variant: 'perf.black' | 'perf.gray' | 'perf.green' | 'perf.orange';
}
export interface PerformanceBarProps {
    bars: Bar[];
}
declare const PerformanceBar: FC<PerformanceBarProps>;
export default PerformanceBar;
