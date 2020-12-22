import React, { FC, useState } from 'react';
import { Flex } from 'rebass';

import CommitLegend from './commit-legend';
import BarChart from './bar-chart';

const graphColors = ['#21B182', '#EB5757', '#F2994A'];
const backgroundColor = '#F5F5F5';

export interface CommitGraphValue {
  date: string;
  added: number;
  removed: number;
  modified: number;
}

export interface CommitGraphProps {
  values: CommitGraphValue[];
  groupKey: string;
  keys: string[];
}

const CommitGraph: FC<CommitGraphProps> = ({
  values,
  groupKey,
  keys,
  ...props
}: CommitGraphProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const fillToTen = (data: CommitGraphValue[]) => {
    // Keep the bars with the same disposition even if there are less than 10;
    if (data.length >= 10) {
      return data;
    }
    return [
      ...data,
      ...new Array(10 - data.length)
        .fill(null)
        .map((__x, idx) => ({ date: idx.toString() })),
    ];
  };

  return (
    <Flex {...props} flexDirection="column" width="100%">
      {/* D3 chart */}
      <BarChart
        values={fillToTen(values)}
        keys={keys}
        groupKey={groupKey}
        backgroundColor={backgroundColor}
        colors={graphColors}
        onSelect={setSelected}
      />
      {/* Legend */}
      <CommitLegend
        keys={keys}
        groupKey={groupKey}
        amount={values.length}
        values={selected !== null ? values[selected] : null}
      />
    </Flex>
  );
};

export default CommitGraph;
