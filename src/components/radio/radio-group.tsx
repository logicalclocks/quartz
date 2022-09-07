import React, { useCallback } from 'react';
import { Flex } from 'rebass';

// Components
import Radio, { RadioProps } from './index';
// Utils
import randomString from '../../utils/randomString';

export type RadioGroupOption<T = string> = {
  key: T;
  text: string;
  additionalText?: string;
};
export interface RadioGroupProps<T = string>
  extends Omit<RadioProps, 'label' | 'onChange' | 'options' | 'value'> {
  value: T;
  options: string[] | RadioGroupOption<T>[];
  onChange: (value: T) => void;
  tooltipMessages?: {
    [key: string]: string;
  };
  flexDirection?: 'row' | 'column' | null;
}

const RadioGroup: <T = string>(props: RadioGroupProps<T>) => JSX.Element = ({
  options,
  value,
  onChange,
  tooltipMessages = {},
  flexDirection = 'column',
  ...props
}) => {
  const handleChange = useCallback(
    (newValue: typeof value) => () => {
      onChange(newValue);
    },
    [onChange],
  );

  const name = randomString();

  const mappedOptions = options.map((val) =>
    typeof val === 'string'
      ? {
          key: val as unknown as typeof value,
          text: val,
          additionalText: '',
        }
      : val,
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
