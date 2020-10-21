import React, { FC } from 'react';
import { Box } from 'rebass';
import Slider from 'rc-slider';
import { useTheme } from 'emotion-theming';
import PickerHandler from '../handler';
import styles from './single-range-slider.styles';
import { ITheme } from '../../../theme/types';
import 'rc-slider/assets/index.css';

export interface SingleRangeSliderProps {
  min: number;
  max: number;
  value: number;
  step?: number;
  handleChange?: (e: number) => void;
}

const SingleRangeSlider: FC<SingleRangeSliderProps> = ({
  min,
  max,
  value,
  step = 0.01,
  handleChange,
  ...props
}: SingleRangeSliderProps) => {
  const theme = useTheme<ITheme>();

  return (
    <Box sx={{ ...styles }} {...props}>
      <Slider
        min={min}
        max={max}
        step={step}
        defaultValue={value}
        railStyle={{
          borderRadius: 0,
          height: '2px',
          backgroundColor: theme.colors.grayShade2,
        }}
        handle={PickerHandler}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SingleRangeSlider;
