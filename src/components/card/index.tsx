import React, { FC } from 'react';
import { Box, Card as RebassCard, CardProps as RebassCardProps } from 'rebass';

// Styles
import styles, { cardHeaderStyles } from './card.styles';

export interface CardProps extends Omit<RebassCardProps, 'css'> {
  link?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  contentProps?: Omit<CardProps, 'css' | 'children'>;
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
          {title && <h4>{title}</h4>}
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
        overflowY="auto"
        {...contentProps}
      >
        {children}
      </Box>
    </RebassCard>
  );
};

export default Card;
