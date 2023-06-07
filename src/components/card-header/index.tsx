import { Box, BoxProps, Flex } from 'rebass';
import styles from './card-header.styles';

export interface CardHeaderProps extends Omit<BoxProps, 'title' | 'css'> {
  title?: React.ReactElement | string;
  actions?: React.ReactNode;
  withShadow?: boolean;
  withBorderBottom?: boolean;
}
const CardHeader = ({
  title,
  actions,
  withShadow = false,
  withBorderBottom = false,
  ...props
}: CardHeaderProps) => (
  <Box {...props} sx={{ ...styles(withShadow, withBorderBottom), ...props.sx }}>
    {title && (
      <Flex alignItems="center" as="h4">
        {title}
      </Flex>
    )}
    {actions && <div>{actions}</div>}
  </Box>
);

export default CardHeader;
