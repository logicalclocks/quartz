import React, { FC } from 'react';
import { Box, Flex } from 'rebass';
import styles from './card-header.styles';

export interface CardHeaderProps {
  title?: React.ReactElement | string;
  actions?: React.ReactNode;
  withShadow?: boolean;
  withBorderBottom?: boolean;
}
const CardHeader: FC<CardHeaderProps> = ({
  title,
  actions,
  withShadow = false,
  withBorderBottom = false,
}) => (
  <Box sx={styles(withShadow, withBorderBottom)}>
    {title && (
      <Flex alignItems="center" as="h4">
        {title}
      </Flex>
    )}
    {actions && <div>{actions}</div>}
  </Box>
);

export default CardHeader;
