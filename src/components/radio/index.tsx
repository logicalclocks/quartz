import { RadioProps as RebassRadioProps } from '@rebass/forms';
import React, { FC, forwardRef } from 'react';
import { Box, Flex } from 'rebass';

// Components
import Labeling from '../typography/labeling';
// Styles
import styles from './radio-styles';

export interface RadioProps extends Omit<RebassRadioProps, 'css'> {
  label?: string;
  addtionalText?: string;
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
          {label}
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
