import React, { FC, Fragment } from 'react';
import { css, Global } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Tooltip from 'rc-tooltip';
import Value from '../../typography/value';
import { ITheme } from '../../../theme/types';

interface ITooltipWrapperProps {
  value: number;
  index: number;
  dragging: boolean;
  children: React.ReactElement;
}

const TooltipWrapper: FC<ITooltipWrapperProps> = (
  props: ITooltipWrapperProps,
) => {
  const { value, index, children } = props;
  const theme = useTheme<ITheme>();

  return (
    <Fragment>
      <Global
        styles={css`
          .rc-slider-tooltip-inner {
            border-radius: 1px;
            box-shadow: none;
            background: ${theme.colors.black};
            min-width: 20px;
            height: 18px;
            line-height: 14px;
            display: flex;
            align-items: center;
            text-align: center;
            font-size: 11px;
            min-width: initial;
          }

          .rc-slider-tooltip-arrow {
            display: none;
          }

          .rc-slider-tooltip-placement-top {
            padding: 0;
          }
        `}
      />
      <Tooltip
        prefixCls="rc-slider-tooltip"
        visible
        overlay={<Value color="white">{value}</Value>}
        placement="top"
        key={index}
      >
        {children}
      </Tooltip>
    </Fragment>
  );
};

export default TooltipWrapper;
