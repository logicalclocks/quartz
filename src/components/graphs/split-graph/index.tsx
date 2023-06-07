import { FC, useMemo, useState } from 'react';
import { Box, Flex } from 'rebass';
import * as R from 'ramda';

import {
  progressBarStyles,
  circleStyles,
  customComponentWrapperStyles,
} from './styles';
import Label, { LabelProps } from '../../label';
import Labeling from '../../typography/labeling';
import { Badge } from '../../badge';
import { FlexProps } from '../../flex';

export const defaultGraphColors = [
  '#FFADAD',
  '#A0C4FF',
  '#CAFFBF',
  '#FFD6A5',
  '#BDB2FF',
  '#FFC6FF',
  '#9BF6FF',
  '#FDFFB6',
];

export const defaultBorderColor = 'black';

export interface SplitGraphValue {
  label?: string;
  value: number;
  isGap?: boolean;
  trainSplit?: boolean;
  renderCustomComponent?: (props: {
    selected?: boolean;
    color: string;
  }) => JSX.Element;
}

type LabelDirection = 'column' | 'row';
type AlignGraphAndLabel = 'center' | undefined;
export interface SplitGraphProps extends Omit<FlexProps, 'children'> {
  values: SplitGraphValue[];
  /** wether to show percentage or not */
  withoutPercentage?: boolean;
  labelProps?: Omit<LabelProps, 'children'>;
  hideTrainSplitOnhover?: boolean;
  /** to render aditional component as actions */
  renderActions?: () => JSX.Element;
  graphColors?: string[];
  borderColors?: string[];
  labelDirection?: LabelDirection;
  widthLabelFlex?: string;
  alignGraphAndLabel?: AlignGraphAndLabel;
}

const SplitGraph: FC<SplitGraphProps> = ({
  values,
  withoutPercentage = false,
  labelProps,
  hideTrainSplitOnhover,
  renderActions,
  graphColors = defaultGraphColors,
  borderColors = [] as string[],
  labelDirection = 'column',
  widthLabelFlex = '100%',
  alignGraphAndLabel = undefined,
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

  const gapIndexes = values
    .map((item, index: number) => (item.isGap ? index : null))
    .filter((item: number | null) => item !== null) as number[];

  const colors = useMemo(
    () =>
      values.reduce(
        (acc: string[], value: any, idx: number) =>
          value.isGap
            ? R.append('black', acc)
            : R.append(
                graphColors[
                  (idx - gapIndexes.filter((gi) => gi < idx).length) %
                    graphColors.length
                ],
                acc,
              ),
        [],
      ),
    [gapIndexes, values, graphColors],
  );

  return (
    <Flex {...props} flexDirection="column" alignItems={alignGraphAndLabel}>
      <Flex width="100%" height="10px">
        {values.map((value, ind) => (
          <Box
            onMouseEnter={handleSelect(ind)}
            onMouseLeave={() => setSelected(null)}
            sx={progressBarStyles(
              (value.value / sum) * 100,
              value.isGap ? 'grayShade3' : colors[ind],
              ind === selectedIndex ||
                (gapIndexes.includes(ind) &&
                  gapIndexes.includes(selectedIndex ?? -1)),
              borderColors.length ? borderColors[ind] : defaultBorderColor,
            )}
          />
        ))}
      </Flex>
      {renderActions?.()}
      <Flex mt="25px" flexDirection={labelDirection} sx={{ gap: '7px' }}>
        {values.map((value, ind) =>
          value.isGap && value.renderCustomComponent ? (
            <Flex
              sx={customComponentWrapperStyles}
              onMouseEnter={handleSelect(ind)}
              onMouseLeave={() => setSelected(null)}
            >
              {value.renderCustomComponent({
                color: 'grayShde3',
                selected: ind === selectedIndex,
              })}
            </Flex>
          ) : (
            <Flex
              width={widthLabelFlex}
              alignItems="center"
              onMouseEnter={handleSelect(ind)}
              onMouseLeave={() => setSelected(null)}
            >
              <Box
                mr="10px"
                mt="3px"
                sx={{
                  ...circleStyles(
                    colors[ind],
                    ind === selectedIndex,
                    borderColors.length
                      ? borderColors[ind]
                      : defaultBorderColor,
                  ),
                  ...{ flexShrink: 0 },
                }}
              />
              <Label mr="5px" {...labelProps}>
                {value.label}
              </Label>
              {!withoutPercentage && (
                <Labeling width="30px" gray mr="8px">
                  {`${Math.ceil((value.value / sum) * 100)}%`}
                </Labeling>
              )}
              {value.renderCustomComponent &&
                value.renderCustomComponent({
                  selected: ind === selectedIndex,
                  color: colors[ind],
                })}
              {value.trainSplit &&
                !(hideTrainSplitOnhover && ind === selectedIndex) && (
                  <Badge
                    flexShrink={0}
                    mt="-3px"
                    height="18px"
                    variant="default"
                    value="train split"
                  />
                )}
            </Flex>
          ),
        )}
      </Flex>
    </Flex>
  );
};

export default SplitGraph;
