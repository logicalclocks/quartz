import { Flex } from 'rebass';

import * as s from './performance-bar.styles';

interface Bar {
  proportion: number;
  variant: 'perf.black' | 'perf.gray' | 'perf.green' | 'perf.orange';
}

export interface PerformanceBarProps {
  bars: Bar[];
}

const PerformanceBar = ({ bars }: PerformanceBarProps) => {
  const renderBarPortion = (bar: Bar) => (
    <Flex
      key={bar.variant}
      sx={s.Bg}
      width={`${bar.proportion * 100}%`}
      variant={bar.variant}
    >
      <Flex sx={s.Bar} />
    </Flex>
  );

  return <Flex sx={s.Wrapper}>{bars.map(renderBarPortion)}</Flex>;
};

export default PerformanceBar;
