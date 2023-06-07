import React from 'react';
import { PlacementWithLogical, TooltipProps as ChakraTooltipProps } from '@chakra-ui/react';
export interface TooltipProps extends Omit<ChakraTooltipProps, 'position'> {
    mainText?: string;
    secondaryText?: string;
    disabled?: boolean;
    visibleDefault?: boolean;
    position?: PlacementWithLogical;
    delayed?: boolean;
}
declare const Tooltip: ({ children, mainText, secondaryText, disabled, visibleDefault, position, delayed, hasArrow, ...props }: TooltipProps) => React.JSX.Element;
export default Tooltip;
