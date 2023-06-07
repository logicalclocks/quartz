import { useCallback } from 'react';

import Label, { LabelProps } from '../label';
import Checkbox from './index';
import { TooltipProps } from '../tooltip';

export interface CheckboxGroupProps
  extends Omit<LabelProps, 'children' | 'onChange'> {
  label: string;
  value: string[];
  options: string[];
  onChange: (value: string[]) => void;
  disabledUnselect?: boolean;
  tooltipProps?: Omit<TooltipProps, 'children'>;
}

const CheckboxGroup = ({
  label,
  options,
  value,
  onChange,
  disabledUnselect = false,
  tooltipProps,
  ...props
}: CheckboxGroupProps) => {
  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      onChange(
        target.checked
          ? [...value, target.name]
          : value.filter((option) => option !== target.name),
      );
    },
    [value, onChange],
  );

  return (
    <Label text={label} as="span" {...props}>
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
          data-test={`test-${option}`}
        />
      ))}
    </Label>
  );
};

export default CheckboxGroup;
