import React, { FC, Fragment } from 'react';
import { css, Global } from '@emotion/react';
import Tooltip from 'rc-tooltip';
import { useTheme } from '../../../theme/theme';
import Value from '../../typography/value';

interface ITooltipWrapperProps {
  value: number;
  index: number;
  dragging: boolean;
  children: React.ReactElement;
  visible: boolean;
}

const TooltipWrapper: FC<ITooltipWrapperProps> = ({
  value,
  index,
  children,
  visible,
}) => {
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
        visible={visible}
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
