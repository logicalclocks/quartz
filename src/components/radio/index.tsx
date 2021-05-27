import React, { FC, forwardRef } from 'react';
import { RadioProps as RebassRadioProps } from '@rebass/forms';
import { Box, Flex } from 'rebass';
import Tooltip from '../tooltip';

// Components
import Labeling from '../typography/labeling';
// Styles
import styles from './radio-styles';

export interface RadioProps extends Omit<RebassRadioProps, 'css'> {
  label?: string;
  addtionalText?: string;
  tooltip?: string;
}

const Radio: FC<RadioProps> = forwardRef(
  (
    {
      label,
      addtionalText,
      name,
      id,
      disabled,
      onChange,
      checked,
      tooltip,
      ...props
    }: RadioProps,
    ref,
  ) => (
    <Flex
      alignItems="center"
      flexDirection="row"
      {...props}
      as="label"
      tx="variants.radio"
      variant="primary"
      sx={styles}
    >
      <Box
        ref={ref}
        as="input"
        type="radio"
        name={name}
        id={id}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
      />
      <span />
      {label && (
        <Labeling bold ml="8px">
          {tooltip && disabled ? (
            <Tooltip mainText={tooltip}>{label}</Tooltip>
          ) : (
            label
          )}
        </Labeling>
      )}
      {addtionalText && (
        <Labeling ml="5px" gray>
          {addtionalText}
        </Labeling>
      )}
    </Flex>
  ),
);

export default Radio;
