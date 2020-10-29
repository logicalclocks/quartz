import React, { FC, useCallback } from 'react';

// Components
import Radio, { RadioProps } from './index';
import { Flex } from 'rebass';

export interface RadioGroupProps
  extends Omit<RadioProps, 'label' | 'onChange' | 'options' | 'value'> {
  label: string;
  value: string | null;
  options: string[];
  onChange: (value: string) => void;
  flexDirection?: 'row' | 'column' | null;
}

const RadioGroup: FC<RadioGroupProps> = ({
  label,
  options,
  value,
  onChange,
  flexDirection = 'column',
  ...props
}: RadioGroupProps) => {
  const handleChange = useCallback(
    ({ target }) => {
      onChange(target.name);
    },
    [value, onChange],
  );

  return (
    <Flex flexDirection={flexDirection}>
      {options?.map((option) => (
        <Radio
          {...props}
          key={option}
          mt={flexDirection === 'column' ? 2 : 0}
          checked={value === option}
          label={option}
          name={option}
          onChange={handleChange}
        />
      ))}
    </Flex>
  );
};

export default RadioGroup;
