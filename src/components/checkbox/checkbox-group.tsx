import React, { FC, useCallback } from 'react';

// Components
import Label from '../label';
import Checkbox from './index';
import { TooltipProps } from '../tooltip';

export interface CheckboxGroupProps {
  label: string;
  value: string[];
  options: string[];
  onChange: (value: string[]) => void;
  disabledUnselect?: boolean;
  tooltipProps?: Omit<TooltipProps, 'children'>;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  label,
  options,
  value,
  onChange,
  disabledUnselect = false,
  tooltipProps,
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
          tooltipProps={tooltipProps}
          name={option}
          onChange={handleChange}
          disabled={disabledUnselect && !value.includes(option)}
        />
      ))}
    </Label>
  );
};

export default CheckboxGroup;
