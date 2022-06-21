import React, { FC, memo, useEffect, useRef, useState } from 'react';
import {
  Box,
  Flex,
  Card as RebassCard,
  CardProps as RebassCardProps,
} from 'rebass';

// Styles
import styles, { cardHeaderStyles } from './card-secondary.styles';

export interface CardSecondaryProps
  extends Omit<RebassCardProps, 'css' | 'title'> {
  title?: React.ReactElement | string;
  children: React.ReactNode;
  placeholder?: string;
  contentProps?: Omit<RebassCardProps, 'css' | 'children'>;
  readonly?: boolean;
}

const CardSecondary: FC<CardSecondaryProps> = ({
  title,
  children,
  maxHeight,
  contentProps,
  placeholder,
  readOnly,
  ...props
}: CardSecondaryProps) => {
  const isShowHeader = !!title;

  const [containerHeight, setHeight] = useState<number>();

  const contentRef = useRef<HTMLDivElement>();

  useEffect(() => {
    setHeight(contentRef.current?.scrollHeight);
  }, []);

  const isScrollable =
    containerHeight &&
    maxHeight &&
    containerHeight >
      +(maxHeight as string).slice(0, (maxHeight as string).indexOf('px')) - 64;

  return (
    <RebassCard
      {...props}
      maxHeight={maxHeight}
      tx="variants"
      variant={readOnly ? 'readOnly' : 'card'}
      sx={{ ...styles, ...props.sx }}
    >
      {isShowHeader && (
        <Box sx={cardHeaderStyles}>
          {title && (
            <Flex fontSize="18px" color="gray" alignItems="center" as="h4">
              {title}
            </Flex>
          )}
        </Box>
      )}

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

export default memo(CardSecondary);
