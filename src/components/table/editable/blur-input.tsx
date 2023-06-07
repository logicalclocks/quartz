import { memo, useCallback, useState } from 'react';
import Input, { InputProps } from '../../input';

interface TInputProps extends Omit<InputProps, 'onChange'> {
  onChange: (value: string) => void;
  defaultValue: string;
}

/**
 * @deprecated this component does not serve much purpose, its scope is limited
 * also, it usese `onMouseLeave` instead of `onBlur` due to `blur` event blocking outside clicks
 * references:
 * https://github.com/jaredpalmer/formik/issues/786
 * https://github.com/facebook/react/issues/2291
 * https://erikmartinjordan.com/onblur-prevents-onclick-react
 */
const BlurInput = ({ defaultValue, onChange, ...props }: TInputProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [],
  );

  const handleBlur = useCallback(
    () => {
      if (value !== defaultValue) {
        onChange(value);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value],
  );

  return (
    <Input
      onMouseLeave={handleBlur}
      onChange={handleChange}
      value={value}
      {...props}
    />
  );
};

export default memo(BlurInput);
