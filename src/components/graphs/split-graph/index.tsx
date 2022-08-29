import React, { FC, useMemo, useState } from 'react';
import { Box, Flex } from 'rebass';
import { progressBarStyles, circleStyles } from './styles';
import Label, { LabelProps } from '../../label';
import Labeling from '../../typography/labeling';
import { Badge } from '../../badge';

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
  renderCustomComponent?: (props: { selected?: boolean }) => JSX.Element;
}

export interface SplitGraphProps {
  values: SplitGraphValue[];
  withoutPercentage?: boolean;
  labelProps?: Omit<LabelProps, 'children'>;
}

const SplitGraph: FC<SplitGraphProps> = ({
  values,
  withoutPercentage = false,
  labelProps,
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
    () =>
      Array(Math.ceil(values.length / graphColors.length))
        .fill(0)
        .reduce((acc) => acc.concat(graphColors), []),
    [values],
  );

  return (
    <Flex {...props} flexDirection="column">
      <Flex width="100%" height="10px">
        {values.map((value, ind) => (
          <Box
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
            mb="7px"
            width="100%"
            onMouseEnter={handleSelect(ind)}
            onMouseLeave={() => setSelected(null)}
          >
            <Box
              mr="10px"
              mt="3px"
              sx={circleStyles(colors[ind], ind === selectedIndex)}
            />
            <Label mr="5px" {...labelProps}>
              {value.label}
            </Label>
            {!withoutPercentage && (
              <Labeling width="20px" gray mr="8px">
                {`${Math.ceil((value.value / sum) * 100)}%`}
              </Labeling>
            )}
            {value.renderCustomComponent &&
              value.renderCustomComponent({
                selected: ind === selectedIndex,
              })}
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
