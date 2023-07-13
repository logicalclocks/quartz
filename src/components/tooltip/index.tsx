import {
  Tooltip as ChakraTooltip,
  PlacementWithLogical,
  TooltipProps as ChakraTooltipProps,
  Box,
  BoxProps,
} from '@chakra-ui/react';

export interface TooltipProps extends Omit<ChakraTooltipProps, 'position'> {
  mainText?: string;
  secondaryText?: string;
  disabled?: boolean;
  visibleDefault?: boolean;
  position?: PlacementWithLogical;
  delayed?: boolean;
  containerProps?: BoxProps;
}

const delayTime = 500;

const Tooltip = ({
  children,
  mainText,
  secondaryText,
  disabled,
  visibleDefault = false,
  position = 'bottom',
  delayed = true,
  hasArrow = true,
  containerProps,
  ...props
}: TooltipProps) => (
  <ChakraTooltip
    label={
      <Box fontSize="xs" fontWeight="bold">
        {mainText}
        {secondaryText && (
          <Box ml="2" as="span" color="gray">
            {secondaryText}
          </Box>
        )}
      </Box>
    }
    defaultIsOpen={visibleDefault}
    placement={position}
    openDelay={delayed ? delayTime : 0}
    isDisabled={disabled || !mainText}
    hasArrow={hasArrow}
    {...props}
  >
    <Box {...containerProps}>{children}</Box>
  </ChakraTooltip>
);

export default Tooltip;
