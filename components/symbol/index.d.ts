import { FC } from 'react';
import { TextProps } from '../typography/text';
import { TooltipProps } from '../tooltip';
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
declare const Symbol: FC<SymbolProps>;
export default Symbol;
