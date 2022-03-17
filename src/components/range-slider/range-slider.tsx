import React, { useMemo } from 'react';
import { Range as RCRangeSlider } from 'rc-slider';
import { FlexProps, Flex } from 'rebass';
import { useTheme } from 'emotion-theming';
import { ITheme } from '../../theme/types';
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
  const theme = useTheme<ITheme>();

  const handleStyle = useMemo(
    () => ({
      borderColor: theme.colors.primary,
      boxShadow: `0 0 5px ${theme.colors.primary}`,
    }),
    [theme.colors.primary],
  );

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
        onChange={onChange}
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
        // we have to handles, so we need two styles for that
        handleStyle={[handleStyle, handleStyle]}
      />
    </Flex>
  );
};

export default RangeSlider;
