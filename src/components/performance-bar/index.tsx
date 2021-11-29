import React, { FC } from 'react';
import { Flex } from 'rebass';
// @ts-ignore
import { useTheme } from 'emotion-theming';

import { ITheme } from '../../theme/types';
import * as s from './performance-bar.styles';

interface Bar {
  type: 'black' | 'gray' | 'green' | 'orange';
  proportion: number;
}

export interface PerformanceBarProps {
  bars: Bar[];
}

const PerformanceBar: FC<PerformanceBarProps> = ({
  bars,
}: PerformanceBarProps) => {
  const theme = useTheme<ITheme>();
  const colorMapping = {
    black: {
      bg: theme.colors.grayShade2,
      bar: theme.colors.black,
    },
    gray: {
      bg: theme.colors.grayShade3,
      bar: theme.colors.grayShade1,
    },
    green: {
      bg: theme.colors.primaryShade2,
      bar: theme.colors.primary,
    },
    orange: {
      bg: theme.colors.labels.orangeShade3,
      bar: theme.colors.labels.orange,
    },
  };

  const renderBarPortion = (bar: Bar) => (
    <Flex
      key={bar.type}
      sx={{
        ...s.Bg,
        width: `${bar.proportion * 100}%`,
        backgroundColor: colorMapping[bar.type].bg,
      }}
    >
      <Flex
        sx={{
          ...s.Bar,
          backgroundColor: colorMapping[bar.type].bar,
        }}
      />
    </Flex>
  );

  return <Flex sx={s.Wrapper}>{bars.map(renderBarPortion)}</Flex>;
};

export default PerformanceBar;
