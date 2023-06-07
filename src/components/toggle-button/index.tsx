import { Flex } from 'rebass';
import { CheckboxProps as RebassCheckboxProps } from '@rebass/forms';
import * as R from 'ramda';

import Labeling from '../typography/labeling';
import styles from './toggle-button.styles';

export interface ToggleButtonProps extends Omit<RebassCheckboxProps, 'css'> {
  children: string | React.ReactNode;
  variant?: 'primary' | 'white';
}

const ToggleButton = ({
  name,
  id,
  disabled,
  onChange,
  checked,
  children,
  variant = 'primary',
  sx = {},
  ...props
}: ToggleButtonProps) => (
  <Flex
    {...props}
    as="label"
    sx={R.mergeDeepRight(styles, sx as object)}
    tx="buttons.toggleButton"
    variant={variant}
  >
    <input
      type="checkbox"
      name={name}
      id={id}
      disabled={disabled}
      onChange={onChange}
      checked={checked}
    />
    <Labeling>{children}</Labeling>
  </Flex>
);

export default ToggleButton;
