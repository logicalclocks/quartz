import React, { FC, useState } from 'react';
import { Flex } from 'rebass';

import CommitLegend from './commit-legend';
import BarChart from './bar-chart';

const graphColors = ['#21B182', '#EB5757', '#F2994A'];
const backgroundColor = '#F5F5F5';

export interface CommitGraphValue {
  date: number;
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
  const [selected, setSelected] = useState(-1);

  return (
    <Flex {...props} flexDirection="column">
      {/* D3 chart */}
      <BarChart
        values={values}
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
        values={selected !== -1 ? values[selected] : null}
      />
    </Flex>
  );
};

export default CommitGraph;
