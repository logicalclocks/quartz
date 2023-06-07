import { useState } from 'react';
import styles from './symbol.styles';
import { getSymbolIcon } from './utils';
import Text, { TextProps } from '../typography/text';
import Tooltip, { TooltipProps } from '../tooltip';
import { SymbolMode } from './types';

export interface SymbolProps {
  mode?: SymbolMode;
  inBasket: boolean;
  possible?: boolean;
  handleClick: () => void;
  iconProps?: TextProps;
  tooltipMainText?: string;
  tooltipSecondaryText?: string;
  tooltipProps?: Omit<TooltipProps, 'children' | 'mainText'>;
}

const defaultTooltipText = {
  [SymbolMode.single]: 'Add this feature to basket',
  [SymbolMode.bulk]: 'Add all features to basket',
};

const Symbol = ({
  inBasket,
  handleClick,
  tooltipProps,
  tooltipMainText,
  tooltipSecondaryText,
  iconProps,
  possible = true,
  mode = SymbolMode.single,
}: SymbolProps) => {
  const [hover, setHover] = useState(false);
  const mainText = tooltipMainText || defaultTooltipText[mode];

  const icon = getSymbolIcon(mode, inBasket, hover, possible);

  return (
    <Tooltip
      {...tooltipProps}
      mainText={possible ? mainText : 'Contains no features'}
      secondaryText={possible ? tooltipSecondaryText : ''}
    >
      <Text
        height="19px"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleClick}
        sx={styles(possible)}
        {...iconProps}
      >
        {icon}
      </Text>
    </Tooltip>
  );
};

export default Symbol;
