import { Box, Flex } from 'rebass';
import { forwardRef, useState } from 'react';
import { InputProps as RebassInputProps } from 'rebass__forms';

import Label, { LabelProps } from '../label';
import InputInfo from '../input-info';
import { Intents } from '../intents';
import getStyles, { getIconStyle, passwordStyles } from './input.styles';
import Labeling from '../typography/labeling';
import Tooltip from '../tooltip';
import { GetIcon, IconName } from '../icon';
import TooltipPositions from '../tooltip/positions';

export interface InputProps extends Omit<RebassInputProps, 'css'> {
  variant?: 'primary' | 'white';
  intent?: Intents;
  info?: string;
  icon?: IconName;
  rightIcon?: React.ReactElement;
  suffix?: string;
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

const Input = forwardRef(
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
      sx,
      suffix,
      ...props
    }: InputProps,
    ref,
  ) => {
    const isTextArea = type === 'textarea';
    const [isShowPassword, setIsShow] = useState(false);

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
            <GetIcon ml="3px" mt="3px" size="xs" icon={IconName.info_block} />
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
            type={isShowPassword ? 'text' : type}
            tx="inputs"
            rows={rows}
            minHeight="32px"
            readOnly={readOnly}
            minWidth={width}
            pl={icon && '34px'}
            pr={iconPaddingRight}
            sx={{ ...getStyles(intent, isTextArea), ...sx }}
            variant={readOnly ? 'disabled' : variant}
            placeholder={placeholder}
            {...props}
          />{' '}
          {icon && (
            <GetIcon icon={icon} color="gray" size="sm" sx={getIconStyle} />
          )}
          {rightIcon && rightIcon}
          {type === 'password' && (
            <Box
              onMouseDown={() => setIsShow(true)}
              onMouseUp={() => setIsShow(false)}
              onMouseOut={() => setIsShow(false)}
              sx={passwordStyles(isShowPassword, !props.value)}
            >
              <Tooltip
                mainText="show password"
                position={TooltipPositions.right}
              >
                <GetIcon icon={IconName.eye} size="lg" />
              </Tooltip>
            </Box>
          )}
          {suffix && (
            <Box sx={{ position: 'absolute', right: '8px', top: '9px' }}>
              <Labeling fontSize="9px" bold gray>
                {suffix}
              </Labeling>
            </Box>
          )}
        </Box>
        {info && <InputInfo intent={intent}>{info}</InputInfo>}
      </Label>
    );
  },
);

export default Input;
