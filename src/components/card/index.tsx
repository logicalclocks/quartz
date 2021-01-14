import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
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
  maxHeight,
  contentProps,
  ...props
}: CardProps) => {
  const isShowHeader = title || actions;

  const [containerHeight, setHeight] = useState<number>();

  const contentRef = useRef<HTMLDivElement>();

  useEffect(() => {
    setHeight(contentRef.current?.scrollHeight);
  }, []);

  const isScrollable = useMemo(() => {
    return (
      containerHeight &&
      maxHeight &&
      containerHeight >
        +(maxHeight as string).slice(0, (maxHeight as string).indexOf('px')) -
          64
    );
  }, [containerHeight, maxHeight]);

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
        overflowX="hidden"
        overflowY={isScrollable ? 'auto' : 'hidden'}
        p="20px"
        {...contentProps}
      >
        {children}
      </Box>
    </RebassCard>
  );
};

export default Card;
