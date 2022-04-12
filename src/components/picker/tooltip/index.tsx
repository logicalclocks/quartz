import React, { FC, Fragment } from 'react';
import { css, Global } from '@emotion/core';
// @ts-ignore
import { useTheme } from 'emotion-theming';
import Tooltip from 'rc-tooltip';
import Value from '../../typography/value';

interface ITooltipWrapperProps {
  value: number;
  index: number;
  dragging: boolean;
  children: React.ReactElement;
  visible: boolean;
}

const TooltipWrapper: FC<ITooltipWrapperProps> = (
  props: ITooltipWrapperProps,
) => {
  const { value, index, children } = props;
  const theme = useTheme();

  return (
    <Fragment>
      <Global
        styles={css`
          .rc-slider-tooltip-inner {
            border-radius: 1px;
            box-shadow: none;
            background: ${theme.colors.black};
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
        visible={props.visible}
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
