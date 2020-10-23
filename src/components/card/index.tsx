import React, { FC } from 'react';
import {
  Box,
  Flex,
  Card as RebassCard,
  CardProps as RebassCardProps,
} from 'rebass';

// Styles
import styles, { cardHeaderStyles } from './card.styles';

export interface CardProps extends Omit<RebassCardProps, 'css' | 'title'> {
  title?: React.ReactElement | string;
  link?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  contentProps?: Omit<RebassCardProps, 'css' | 'children'>;
}

const Card: FC<CardProps> = ({
  title,
  actions,
  children,
  height,
  contentProps,
  ...props
}: CardProps) => {
  const isShowHeader = title || actions;

  return (
    <RebassCard {...props} height={height} sx={styles}>
      {/* Header */}
      {isShowHeader && (
        <Box sx={cardHeaderStyles}>
          {title && (
            <Flex alignItems="center" as="h4">
              {title}
            </Flex>
          )}
          {actions && <div>{actions}</div>}
        </Box>
      )}
      {/* Content */}
      <Box
        sx={{
          boxShadow: height ? 'cardInsetShadow' : 'none',
        }}
        width="100%"
        height="100%"
        p="20px"
        {...contentProps}
      >
        {children}
      </Box>
    </RebassCard>
  );
};

export default Card;
