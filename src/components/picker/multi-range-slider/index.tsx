import React, { FC, useMemo } from 'react';
import { Box } from 'rebass';
import { Range } from 'rc-slider';
import { useTheme } from 'emotion-theming';
import PickerHandler from '../handler';
import { ITheme } from '../../../theme/types';
import styles from './multi-range-slider.styles';
import 'rc-slider/assets/index.css';

export interface MultiRangeSliderProps {
  value: number[];
  min: number;
  max: number;
  step?: number;
  handleChange?: (e: number[]) => void;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
  min,
  max,
  value,
  step = 0.01,
  handleChange,
  ...props
}: MultiRangeSliderProps) => {
  const theme = useTheme<ITheme>();
  const trackStyle = useMemo(() => {
    return value.reduce((curr: any, _item, index) => {
      const val =
        index % 2 === 0 ? {} : { backgroundColor: theme.colors.grayShade2 };

      return [...curr, val];
    }, []);
  }, value);

  return (
    <Box sx={{ ...styles }} {...props}>
      <Range
        min={min}
        max={max}
        step={step}
        defaultValue={value}
        allowCross={false}
        trackStyle={trackStyle}
        railStyle={{
          borderRadius: 0,
          height: '2px',
          backgroundColor: theme.colors.grayShade2,
        }}
        onChange={handleChange}
        handle={PickerHandler}
      />
    </Box>
  );
};

export default MultiRangeSlider;
