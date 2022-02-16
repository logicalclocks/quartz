import React, { FC, useMemo, useState } from 'react';
import { Box, Flex } from 'rebass';
import { progressBarStyles, circleStyles } from './split-graph.styles';
import Label from '../../label';
import Labeling from '../../typography/labeling';
import { Badge } from '../../badges';

export const graphColors = [
  '#FFADAD',
  '#A0C4FF',
  '#CAFFBF',
  '#FDFFB6',
  '#FFD6A5',
  '#BDB2FF',
  '#FFC6FF',
  '#9BF6FF',
];

export interface SplitGraphValue {
  label: string;
  value: number;
  trainSplit?: boolean;
}

export interface SplitGraphProps {
  values: SplitGraphValue[];
}

const SplitGraph: FC<SplitGraphProps> = ({
  values,
  ...props
}: SplitGraphProps) => {
  const [selectedIndex, setSelected] = useState<number | null>(null);

  const handleSelect = (ind: number) => () => {
    setSelected(ind);
  };

  const sum = useMemo(
    () => values.reduce((acc, val) => acc + val.value, 0),
    [values],
  );

  const colors = useMemo(
    () => Array(Math.ceil(values.length / graphColors.length))
        .fill(0)
        .reduce((acc) => acc.concat(graphColors), []),
    [values],
  );

  return (
    <Flex {...props} flexDirection="column">
      <Flex width="100%" height="10px">
        {values.map((value, ind) => (
          <Box
            key={`bar-${ind}`}
            onMouseEnter={handleSelect(ind)}
            onMouseLeave={() => setSelected(null)}
            sx={progressBarStyles(
              (value.value / sum) * 100,
              colors[ind],
              ind === selectedIndex,
            )}
          />
        ))}
      </Flex>
      <Flex mt="25px" flexDirection="column">
        {values.map((value, ind) => (
          <Flex
            key={`data-${ind}`}
            mb="7px"
            width="fit-content"
            onMouseEnter={handleSelect(ind)}
            onMouseLeave={() => setSelected(null)}
          >
            <Box
              mr="10px"
              mt="3px"
              sx={circleStyles(colors[ind], ind === selectedIndex)}
            />
            <Label mr="5px">{value.label}</Label>
            <Labeling gray mr="8px">
              {`${Math.ceil((value.value / sum) * 100)}%`}
            </Labeling>
            {value.trainSplit && (
              <Badge mt="-3px" variant="default" value="train split" />
            )}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default SplitGraph;
