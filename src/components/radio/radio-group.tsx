import React, { useCallback } from 'react';
import { Flex } from 'rebass';

// Components
import Radio, { RadioProps } from './index';
// Utils
import randomString from '../../utils/randomString';

export type RadioGroupOption<T = string> = RadioProps & {
  key: T;
  text: string;
};
export interface RadioGroupProps<T = string>
  extends Omit<RadioProps, 'label' | 'onChange' | 'options' | 'value'> {
  value: T;
  options: string[] | RadioGroupOption<T>[];
  onChange: (value: T) => void;
  /**
   * @deprecated [#1] since version 2.6.0 [#2].
   * [3#] will be deleted in version 3.0.
   * [#4] In case you need similar behavior add tooltip prop through options
   */
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
      {mappedOptions?.map(({ key, text, ...restProps }) => (
        <Radio
          {...props}
          key={`${key}`}
          mt={flexDirection === 'column' ? 2 : 'initial'}
          mr={flexDirection === 'row' ? '20px' : 'initial'}
          checked={value === key}
          label={text}
          name={name}
          onChange={handleChange(key)}
          tooltip={tooltipMessages[`${key}`]}
          tooltipPosition={flexDirection === 'column' ? 'right' : 'bottom'}
          {...restProps}
        />
      ))}
    </Flex>
  );
};

export default RadioGroup;
