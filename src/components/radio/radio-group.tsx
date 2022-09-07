import React, { FC, useCallback } from 'react';
import { Flex } from 'rebass';

// Components
import Radio, { RadioProps } from './index';
// Utils
import randomString from '../../utils/randomString';

type Value = string | number | boolean;
export type RadioGroupOption = {
  key: Value;
  text: string;
  additionalText?: string;
};
export interface RadioGroupProps
  extends Omit<RadioProps, 'label' | 'onChange' | 'options' | 'value'> {
  value: Value | null;
  options: string[] | RadioGroupOption[];
  onChange: (value: Value) => void;
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
    (newValue: Value) => () => {
      onChange(newValue);
    },
    [onChange],
  );

  const name = randomString();

  const mappedOptions = options.map((val) =>
    typeof val === 'string' ? { key: val, text: val } : val,
  );

  return (
    <Flex flexDirection={flexDirection}>
      {mappedOptions?.map(({ key, text, additionalText }) => (
        <Radio
          {...props}
          key={`${key}`}
          mt={flexDirection === 'column' ? 2 : 'initial'}
          mr={flexDirection === 'row' ? '20px' : 'initial'}
          checked={value === key}
          label={text}
          name={name}
          addtionalText={additionalText}
          onChange={handleChange(key)}
          tooltip={tooltipMessages[`${key}`]}
        />
      ))}
    </Flex>
  );
};

export default RadioGroup;
