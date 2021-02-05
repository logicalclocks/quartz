import { CheckboxProps as RebassCheckboxProps } from '@rebass/forms';
import React, { FC, forwardRef } from 'react';
import { Box, Flex } from 'rebass';

// Components
import Labeling from '../typography/labeling';
// Styles
import styles from './checkbox-styles';
import { Tooltip } from '../../index';
import { TooltipProps } from '../tooltip';

export interface CheckboxProps extends Omit<RebassCheckboxProps, 'css'> {
  label?: string;
  tooltipProps?: Omit<TooltipProps, 'children'>;
}

const Checkbox: FC<CheckboxProps> = forwardRef(
  (
    {
      label,
      name,
      id,
      disabled,
      onChange,
      checked,
      tooltipProps = { mainText: '' },
      ...props
    }: CheckboxProps,
    ref,
  ) => (
    <Tooltip disabled={!disabled} {...tooltipProps}>
      <Flex
        alignItems="center"
        flexDirection="row"
        as="label"
        {...props}
        tx="variants.checkbox"
        variant="primary"
        sx={styles}
      >
        <Box
          ref={ref}
          as="input"
          type="checkbox"
          name={name}
          id={id}
          disabled={disabled}
          onChange={onChange}
          checked={checked}
        />
        <span />
        {label && (
          <Labeling bold ml="10px">
            {label}
          </Labeling>
        )}
      </Flex>
    </Tooltip>
  ),
);

export default Checkbox;
