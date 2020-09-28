import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';

// Styles
import styles, { cardHeaderStyles } from './card.styles';

export interface CardProps extends Omit<BoxProps, 'css'> {
  link?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  contentProps?: Omit<BoxProps, 'css'>;
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
    <Box {...props} height={height} variant="card" sx={styles}>
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
    </Box>
  );
};

export default Card;
