import { Box, Flex } from 'rebass';
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
import { Icon, Labeling, Tooltip } from '../../index';

export interface InputProps extends Omit<RebassInputProps, 'css'> {
  variant?: 'primary' | 'white';
  intent?: Intents;
  info?: string;
  icon?: IconProp;
  rightIcon?: React.ReactElement;
  iconPaddingRight?: string;
  label?: string;
  placeholder?: string;
  width?: string | number;
  labelProps?: Omit<LabelProps, 'action' | 'text' | 'children'>;
  labelAction?: React.ReactNode;
  type?: 'text' | 'number' | 'textarea' | 'password';
  rows?: number;
  optional?: boolean;
  tooltipInfo?: string;
}

const Input: FC<InputProps> = forwardRef(
  (
    {
      placeholder,
      label = '',
      labelAction,
      icon,
      rightIcon,
      info,
      iconPaddingRight,
      readOnly,
      width = '180px',
      labelProps,
      variant = 'primary',
      intent = 'default',
      type = 'text',
      rows = 3,
      tooltipInfo,
      optional,
      ...props
    }: InputProps,
    ref,
  ) => {
    const isTextArea = type === 'textarea';

    const actions = (
      <Flex>
        {labelAction}
        {optional && (
          <Labeling ml="8px" bold gray>
            optional
          </Labeling>
        )}
        {tooltipInfo && (
          <Box ml="8px">
            <Tooltip mainText={tooltipInfo}>
              <Icon icon="info-circle" />
            </Tooltip>
          </Box>
        )}
      </Flex>
    );

    return (
      <Label action={actions} text={label} width={width} {...labelProps}>
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
            readOnly={readOnly}
            minWidth={width}
            pl={icon && '34px'}
            pr={iconPaddingRight}
            // @ts-ignore
            sx={getStyles(intent, isTextArea)}
            variant={readOnly ? 'disabled' : variant}
            placeholder={placeholder}
            {...props}
          />{' '}
          {icon && <FontAwesomeIcon icon={icon} />}
          {rightIcon && rightIcon}
        </Box>
        {info && <InputInfo intent={intent}>{info}</InputInfo>}
      </Label>
    );
  },
);

export default Input;
