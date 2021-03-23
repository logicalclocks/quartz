import React, { FC, useState } from 'react';
import { Text } from '../../index';
import styles from './symbol.styles';
import { getSymbolIcon } from './utils';
import { TextProps } from '../typography/text';
import Tooltip, { TooltipProps } from '../tooltip';

export enum SymbolMode {
  'single',
  'bulk',
}

export interface SymbolProps {
  mode?: SymbolMode;
  inBasket: boolean;
  handleClick: () => void;
  iconProps?: TextProps;
  tooltipMainText?: string;
  tooltipSecondaryText?: string;
  tooltipProps?: Omit<TooltipProps, 'children' | 'mainText'>;
}

const defaultTooltipText = {
  single: 'Add this feature to basket',
  bulk: 'Add all features to basket',
};

const Symbol: FC<SymbolProps> = ({
  inBasket,
  handleClick,
  tooltipProps,
  tooltipMainText,
  tooltipSecondaryText,
  iconProps,
  mode = SymbolMode.single,
}) => {
  const [hover, setHover] = useState(false);
  const mainText = tooltipMainText || defaultTooltipText[mode];

  const icon = getSymbolIcon(mode, inBasket, hover);

  return (
    <Tooltip
      {...tooltipProps}
      mainText={mainText}
      secondaryText={tooltipSecondaryText}
    >
      <Text
        height="18px"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleClick}
        sx={styles}
        {...iconProps}
      >
        {icon}
      </Text>
    </Tooltip>
  );
};

export default Symbol;
