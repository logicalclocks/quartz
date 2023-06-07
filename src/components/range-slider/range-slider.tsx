import {
  RangeSlider as ChakraRangeSlider,
  RangeSliderFilledTrack,
  RangeSliderProps,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';
import { Flex } from 'rebass';
import Labeling from '../typography/labeling';
import Value from '../typography/value';

export interface Props extends RangeSliderProps {
  label: string;
  range: number[];
  disabled?: boolean;
  formatDisplayValue?: (value: number) => string;
}

const RangeSlider = ({
  label,
  value,
  range,
  disabled,
  formatDisplayValue = (displayValue) => displayValue.toString(),
  ...props
}: Props) => {
  return (
    <Flex flexDirection="column">
      <Flex alignItems="center" mb="8px">
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
            {value?.map(formatDisplayValue).join(', ')}
          </Value>
        </Flex>
      </Flex>
      <ChakraRangeSlider
        value={value}
        min={range[0]}
        max={range[1]}
        aria-label={range.map(String)}
        isDisabled={disabled}
        {...props}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </ChakraRangeSlider>
    </Flex>
  );
};

export default RangeSlider;
