import React, { FC, useCallback, useContext, useMemo } from 'react';
import { Box } from 'rebass';
import { Range } from 'rc-slider';
// @ts-ignore
import { useTheme } from 'emotion-theming';
import PickerHandler from '../handler';
import styles from './multi-range-slider.styles';
import 'rc-slider/assets/index.css';
import PickerProvider from '../picker.provider';
import PickerContext, {
  IPickerContext,
  PickerContextDefault,
} from '../picker.context';

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
  const [context, setContext] = useContext(PickerContext);
  const theme = useTheme();
  const trackStyle = useMemo(() => {
    return value.reduce((curr: any, _item, index) => {
      const val =
        index % 2 === 0 ? {} : { backgroundColor: theme.colors.grayShade2 };

      return [...curr, val];
    }, []);
  }, value);

  const boxProps = useMemo(() => {
    const { activeHandlerId: ahId, isDraggable, isHover } = context;
    const trackId = ahId % 2 === 0 ? ahId + 1 : ahId;

    return {
      sliderTrackStyles: {
        [`.rc-slider-track-${trackId}`]: {
          bg: isDraggable || isHover ? 'primary' : 'bg',
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
    [],
  );

  return (
    <Box sx={{ ...styles(boxProps) }} {...props}>
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
        handle={({ index, ...restProps }) => (
          <PickerHandler
            key={index}
            onMouseOver={() => handleMouseHover(index, true)}
            onMouseLeave={() => handleMouseHover(index, false)}
            {...restProps}
          />
        )}
        onAfterChange={() => setContext(PickerContextDefault)}
      />
    </Box>
  );
};

const MultiRangeSliderWrapped = (props: MultiRangeSliderProps) => (
  <PickerProvider>
    <MultiRangeSlider {...props} />
  </PickerProvider>
);

export default MultiRangeSliderWrapped;
