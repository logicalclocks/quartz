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
import { Labeling, Tooltip } from '../../index';
import icons from '../../sources/icons';

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
  type?: 'text' | 'number' | 'textarea' | 'password' | 'code';
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
    const isCode = type === 'code';

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
              {icons.info_block}
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
            display: 'flex'
          }}
        >
          <Box
            ref={ref}
            as={(isTextArea || isCode)? 'textarea' : 'input'}
            type={type}
            tx="inputs"
            rows={rows}
            minHeight="32px"
            readOnly={readOnly}
            minWidth={width}
            pl={icon && '34px'}
            pr={iconPaddingRight}
            // @ts-ignore
            sx={getStyles(intent, isTextArea, isCode)}
            variant={readOnly ? 'disabled' : variant}
            placeholder={placeholder}
            {...props}
          />{' '}
          <Box sx={{
            width: '30px',
            minWidth: '30px',
            background: 'black',
            color: 'white',
            display: isCode ? 'block' : 'none',
            padding: '8px',
            lineHeight: '20px'
          }}>1<br/>
            2<br/>
            3<br/>
            4
          </Box>
          {icon && <FontAwesomeIcon icon={icon} />}
          {rightIcon && rightIcon}
        </Box>
        {info && <InputInfo intent={intent}>{info}</InputInfo>}
      </Label>
    );
  },
);

export default Input;
