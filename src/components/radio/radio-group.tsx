import React, { FC, useCallback } from 'react';
import { Flex } from 'rebass';

// Components
import Radio, { RadioProps } from './index';
// Utils
import randomString from '../../utils/randomString';

export interface RadioGroupProps
  extends Omit<RadioProps, 'label' | 'onChange' | 'options' | 'value'> {
  value: string | null;
  options: string[];
  onChange: (value: string) => void;
  tooltipMessages?: {
    [key: string]: string;
  };
  flexDirection?: 'row' | 'column' | null;
}

const RadioGroup: FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  tooltipMessages = {},
  flexDirection = 'column',
  ...props
}: RadioGroupProps) => {
  const handleChange = useCallback(
    (value: string) => () => {
      onChange(value);
    },
    [value, onChange],
  );

  const name = randomString();

  return (
    <Flex flexDirection={flexDirection}>
      {options?.map((option) => (
        <Radio
          {...props}
          key={option}
          mt={flexDirection === 'column' ? 2 : 0}
          checked={value === option}
          label={option}
          name={name}
          onChange={handleChange(option)}
          tooltip={tooltipMessages[option]}
        />
      ))}
    </Flex>
  );
};

export default RadioGroup;
