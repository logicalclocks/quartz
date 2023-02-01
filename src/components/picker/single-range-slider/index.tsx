import React, { FC, useCallback, useContext, useMemo } from 'react';
import { Box } from 'rebass';
import Slider from 'rc-slider';
import { useTheme } from '../../../theme/theme';
import PickerHandler from '../handler';
import PickerProvider from '../picker.provider';
import PickerContext, {
  IPickerContext,
  PickerContextDefault,
} from '../picker.context';
import styles from './single-range-slider.styles';
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
  const [context, setContext] = useContext(PickerContext);
  const theme = useTheme();

  const boxProps = useMemo(() => {
    return {
      sliderTrackStyles: {
        '.rc-slider-track': {
          bg: context.isDraggable || context.isHover ? 'primary' : 'bg',
        },
      },
    };
  }, [context]);

  const handleMouseHover = useCallback(
    (index: number, isHover: boolean): void => {
      setContext((v: IPickerContext) => ({
        ...v,
        activeHandlerId: index,
        isHover,
      }));
    },
    [setContext],
  );

  return (
    <Box sx={{ ...styles(boxProps) }} {...props}>
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
        // eslint-disable-next-line react/no-unstable-nested-components
        handleRender={({ props: { tabIndex: index, ...restProps } }: any) => (
          <PickerHandler
            {...restProps}
            value={value}
            index={index}
            onMouseOver={() => handleMouseHover(index, true)}
            onMouseLeave={() => handleMouseHover(index, false)}
          />
        )}
        onChange={handleChange as (e: number | number[]) => void}
        onAfterChange={() => setContext(PickerContextDefault)}
      />
    </Box>
  );
};

const SingleRangeSliderWrapped = (props: SingleRangeSliderProps) => (
  <PickerProvider>
    <SingleRangeSlider {...props} />
  </PickerProvider>
);

export default SingleRangeSliderWrapped;
