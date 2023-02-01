import React from 'react';
import RCRangeSlider from 'rc-slider';
import { FlexProps, Flex } from 'rebass';
import { useTheme } from '../../theme/theme';
import Labeling from '../typography/labeling';
import Value from '../typography/value';

export interface Props extends Omit<FlexProps, 'value' | 'css' | 'onChange'> {
  label: string;
  value: number[];
  range: number[];
  step: number;
  disabled?: boolean;
  onChange: (value: number[]) => void;
  formatDisplayValue?: (value: number) => string;
}

const buildHandleStyle = (color: string) => ({
  borderColor: color,
  boxShadow: `0 0 5px ${color}`,
});

const RangeSlider = ({
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

  const handleStyle = buildHandleStyle(theme.colors.primary);

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
          <Value color="primary">
            {value.map(formatDisplayValue).join('-')}
          </Value>
        </Flex>
      </Flex>
      <RCRangeSlider
        disabled={disabled}
        value={value}
        onChange={onChange as (value: number | number[]) => void}
        min={range[0]}
        max={range[1]}
        step={step}
        railStyle={{
          backgroundColor: theme.colors.grayShade2,
        }}
        trackStyle={[
          {
            backgroundColor: theme.colors.primary,
          },
        ]}
        // we have two handles, so we need two styles for that
        handleStyle={[handleStyle, handleStyle]}
        range
      />
    </Flex>
  );
};

export default RangeSlider;
