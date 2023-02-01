import React from 'react';
import RcSlider from 'rc-slider';
import { FlexProps, Flex } from 'rebass';
import { useTheme } from '../../theme/theme';
import Labeling from '../typography/labeling';
import Value from '../typography/value';

export interface Props extends Omit<FlexProps, 'css' | 'onChange'> {
  label: string;
  value: number;
  range: [number, number];
  step: number;
  disabled?: boolean;
  onChange: (value: number) => void;
  // eslint-disable-next-line react/require-default-props
  formatDisplayValue?: (value: number) => string;
}

const Slider = ({
  label,
  defaultValue,
  value,
  onChange,
  range,
  step,
  disabled,
  formatDisplayValue = (displayValue) => displayValue.toString(),
  ...flexProps
}: Props) => {
  const theme = useTheme();

  return (
    <Flex flexDirection="column" {...flexProps}>
      <Flex alignItems="center" mb="10px">
        <Labeling bold mr="8px">
          {label}
        </Labeling>
        <Flex
          backgroundColor="primaryShade2"
          px="4px"
          py="2px"
          sx={{ borderRadius: '2px' }}
        >
          <Value color="primary">{formatDisplayValue(value)}</Value>
        </Flex>
      </Flex>
      <RcSlider
        disabled={disabled}
        value={value}
        onChange={onChange as (value: number | number[]) => void}
        min={range[0]}
        max={range[1]}
        step={step}
        railStyle={{
          backgroundColor: theme.colors.grayShade2,
        }}
        trackStyle={{
          backgroundColor: theme.colors.primary,
        }}
        handleStyle={{
          borderColor: theme.colors.primary,
          boxShadow: `0 0 5px ${theme.colors.primary}`,
        }}
      />
    </Flex>
  );
};

export default Slider;
