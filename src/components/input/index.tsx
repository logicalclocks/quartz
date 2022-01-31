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
import getStyles, { getIconStyle } from './input.styles';
import Labeling from '../typography/labeling';
import Tooltip from '../tooltip';
import Icon from '../icon';
import { IconName } from '../..';

export interface InputProps extends Omit<RebassInputProps, 'css'> {
  variant?: 'primary' | 'white';
  intent?: Intents;
  info?: string;
  icon?: IconName;
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

    const actions = (labelAction || tooltipInfo || optional) && (
      <Flex>
        {labelAction}
        {optional && (
          <Labeling ml="8px" bold gray>
            optional
          </Labeling>
        )}
        {tooltipInfo && (
          <Tooltip mainText={tooltipInfo}>
            <Box mt="-6px" mb="-3px">
              <Icon icon={IconName.info_block}/>
            </Box>
          </Tooltip>
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
          {icon && <Icon icon={icon} color="gray" size="md" sx={getIconStyle}/>}
          {rightIcon && rightIcon}
        </Box>
        {info && <InputInfo intent={intent}>{info}</InputInfo>}
      </Label>
    );
  },
);

export default Input;
