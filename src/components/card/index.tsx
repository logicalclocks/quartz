import React, { FC, memo, useRef } from 'react';
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
  maxHeight,
  contentProps,
  ...props
}: CardProps) => {
  const isShowHeader = title || actions;

  const contentRef = useRef<HTMLDivElement>();

  const isScrollable =
    contentRef.current?.scrollHeight &&
    maxHeight &&
    contentRef.current?.scrollHeight >
      +(maxHeight as string).slice(0, (maxHeight as string).indexOf('px')) - 64;

  return (
    <RebassCard {...props} maxHeight={maxHeight} sx={styles}>
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
          boxShadow: isScrollable ? 'cardInsetShadow' : 'none',
        }}
        ref={contentRef}
        width="100%"
        maxHeight={maxHeight}
        height="100%"
        overflowY={isScrollable ? 'auto' : 'initial'}
        p="20px"
        {...contentProps}
      >
        {children}
      </Box>
    </RebassCard>
  );
};

export default memo(Card);
