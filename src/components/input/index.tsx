import { Box } from 'rebass';
import React, { FC, forwardRef } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { InputProps as RebassInputProps } from 'rebass__forms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Label, { LabelProps } from '../label';
import InputInfo from '../input-info';
// Types
import { Intents } from '../intents';
// Styles
import getStyles from './input.styles';

export interface InputProps extends Omit<RebassInputProps, 'css'> {
  variant?: 'primary' | 'white';
  intent?: Intents;
  info?: string;
  icon?: IconProp;
  label?: string;
  placeholder?: string;
  width?: string | number;
  labelProps?: Omit<LabelProps, 'action' | 'text' | 'children'>;
  labelAction?: React.ReactNode;
  type?: 'text' | 'number' | 'textarea';
  rows?: number;
}

const Input: FC<InputProps> = forwardRef(
  (
    {
      placeholder,
      label = '',
      labelAction,
      icon,
      info,
      width = '180px',
      labelProps,
      variant = 'primary',
      intent = 'default',
      type = 'text',
      rows = 3,
      ...props
    }: InputProps,
    ref,
  ) => {
    const isTextArea = type === 'textarea';

    return (
      <Label action={labelAction} text={label} width={width} {...labelProps}>
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Box
            ref={ref}
            as={isTextArea ? 'textarea' : 'input'}
            type={type}
            tx="inputs"
            rows={rows}
            minHeight="32px"
            minWidth={width}
            paddingLeft={icon && '34px'}
            sx={getStyles(intent, isTextArea)}
            variant={variant}
            placeholder={placeholder}
            {...props}
          />
          {icon && <FontAwesomeIcon icon={icon} />}
        </Box>
        {info && <InputInfo intent={intent}>{info}</InputInfo>}
      </Label>
    );
  },
);

export default Input;
