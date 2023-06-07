import {
  Slider as ChakraSlider,
  SliderFilledTrack,
  SliderProps,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
import { Flex } from 'rebass';
import Labeling from '../typography/labeling';
import Value from '../typography/value';

export interface Props extends SliderProps {
  label: string;
  value: number;
  range: [number, number];
  step: number;
  disabled?: boolean;
  formatDisplayValue?: (value: number) => string;
}

const Slider = ({
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
          <Value color="primary">{formatDisplayValue(value)}</Value>
        </Flex>
      </Flex>
      <ChakraSlider
        value={value}
        min={range[0]}
        max={range[1]}
        isDisabled={disabled}
        {...props}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </ChakraSlider>
    </Flex>
  );
};

export default Slider;
