interface Bar {
    proportion: number;
    variant: 'perf.black' | 'perf.gray' | 'perf.green' | 'perf.orange';
}
export interface PerformanceBarProps {
    bars: Bar[];
}
declare const PerformanceBar: ({ bars }: PerformanceBarProps) => import("react/jsx-runtime").JSX.Element;
export default PerformanceBar;
