import { forwardRef } from 'react';
import { Box, Flex } from 'rebass';
import { CheckboxProps as RebassCheckboxProps } from '@rebass/forms';

import Labeling from '../typography/labeling';
import styles from './toggle.styles';

export interface ToggleProps extends Omit<RebassCheckboxProps, 'css'> {
  label?: string;
  isChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    { label, name, id, disabled, onChange, checked, isChecked, ...props },
    ref,
  ) => {
    const isControlled = isChecked !== undefined;
    const checkedValue = isControlled ? isChecked : checked;

    return (
      <Flex
        alignItems="center"
        flexDirection="row"
        as="label"
        sx={styles}
        {...props}
      >
        <Box
          ref={ref}
          as="input"
          type="checkbox"
          name={name}
          id={id}
          disabled={disabled}
          onChange={onChange}
          checked={checkedValue}
        />
        <Box className="toggle-track">
          <Box className="toggle-thumb" />
        </Box>
        {label && (
          <Labeling bold ml="10px">
            {label}
          </Labeling>
        )}
      </Flex>
    );
  },
);

Toggle.displayName = 'Toggle';

export default Toggle;
