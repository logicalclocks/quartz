import React, { FC, useCallback } from 'react';

// Components
import Label from '../label';
import Checkbox from './index';

export interface CheckboxGroupProps {
  label: string;
  value: string[];
  options: string[];
  onChange: (value: string[]) => void;
  disabledUnselect?: boolean;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  label,
  options,
  value,
  onChange,
  disabledUnselect = false,
}: CheckboxGroupProps) => {
  const handleChange = useCallback(
    ({ target }) => {
      onChange(
        target.checked
          ? [...value, target.name]
          : value.filter((option) => option !== target.name),
      );
    },
    [value, onChange],
  );

  return (
    <Label text={label} as="span">
      {options?.map((option, index) => (
        <Checkbox
          mt={index ? '11px' : '7px'}
          key={option}
          checked={value.includes(option)}
          label={option}
          name={option}
          onChange={handleChange}
          disabled={disabledUnselect && !value.includes(option)}
        />
      ))}
    </Label>
  );
};

export default CheckboxGroup;
