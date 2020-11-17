import React, { FC, memo, useCallback, useState } from 'react';
import Input, { InputProps } from '../../input';

interface TInputProps extends Omit<InputProps, 'onChange'> {
  onChange: (value: string) => void;
  defaultValue: string;
}

export const BlurInput: FC<TInputProps> = ({
  defaultValue,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [],
  );

  const handleBlur = useCallback(() => {
    if (value !== defaultValue) {
      onChange(value);
    }
  }, [value]);

  return (
    <Input
      onBlur={handleBlur}
      onChange={handleChange}
      value={value}
      {...props}
    />
  );
};

export default memo(BlurInput);
