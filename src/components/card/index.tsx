import React, { FC, memo, useRef } from 'react';
import { Box, Card as RebassCard, CardProps as RebassCardProps } from 'rebass';

// Styles
import styles from './card.styles';
import CardHeader from '../card-header';

export interface CardProps extends Omit<RebassCardProps, 'css' | 'title'> {
  title?: React.ReactElement | string;
  link?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  contentProps?: Omit<RebassCardProps, 'css' | 'children'>;
  readOnly?: boolean;
  withoutShadow?: boolean;
}

const Card: FC<CardProps> = ({
  title,
  actions,
  children,
  maxHeight,
  readOnly,
  contentProps,
  withoutShadow = false,
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
    <RebassCard
      {...props}
      tx="variants"
      variant={readOnly ? 'readOnly' : 'card'}
      maxHeight={maxHeight}
      sx={styles}
    >
      {/* Header */}
      {isShowHeader && (
        <CardHeader
          title={title}
          actions={actions}
          withShadow={!withoutShadow}
          withBorderBottom
        />
      )}
      {/* Content */}
      {!!children && (
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
      )}
    </RebassCard>
  );
};

export default memo(Card);
