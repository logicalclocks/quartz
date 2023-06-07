import { CheckboxProps as RebassCheckboxProps } from '@rebass/forms';
import { FC, forwardRef } from 'react';
import { Box, Flex } from 'rebass';

// Components
import Labeling from '../typography/labeling';
// Styles
import styles from './checkbox-styles';
import Tooltip, { TooltipProps } from '../tooltip';

export interface CheckboxProps extends Omit<RebassCheckboxProps, 'css'> {
  label?: string;
  mode?: string;
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
    <Tooltip
      disabled={!disabled}
      {...tooltipProps}
      // sx={{
      //   width: '100%',
      // }}
    >
      <Flex
        // width="100%"
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
