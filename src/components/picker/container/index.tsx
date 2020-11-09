import React, { FC } from 'react';
import { Box, Flex } from 'rebass';
import SingleRangeSlider from '../single-range-slider';
import MultiRangeSlider from '../multi-range-slider';
import styles from './picker.styles';

export interface PickerProps {
  min: number;
  max: number;
  value: number[];
  step: number;
  handleChange?: (e: number | number[]) => void;
}

const Picker: FC<PickerProps> = ({
  min,
  max,
  value,
  step = 0.01,
  handleChange,
  ...props
}: PickerProps) => {
  if (!value.length) return null;

  return (
    <Flex sx={{ ...styles }} {...props}>
      <Box>
        {value.length > 1 ? (
          <MultiRangeSlider
            min={min}
            max={max}
            step={step}
            value={value}
            handleChange={handleChange}
          />
        ) : (
          <SingleRangeSlider
            min={min}
            max={max}
            step={step}
            value={value[0]}
            handleChange={handleChange}
          />
        )}
      </Box>
    </Flex>
  );
};

export default Picker;
