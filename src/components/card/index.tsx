import React, { FC, memo, useRef } from 'react';
import { Box, Card as RebassCard, CardProps as RebassCardProps } from 'rebass';

// Styles
import styles from './card.styles';
import CardHeader from '../card-header';
import { IconName } from '../icon';
import { Flex } from '../flex';
import usePopup from '../../utils/usePopup';
import { IconButton } from '../icon-button';

export interface CardProps extends Omit<RebassCardProps, 'css' | 'title'> {
  title?: React.ReactElement | string;
  link?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  contentProps?: Omit<RebassCardProps, 'css' | 'children'>;
  readOnly?: boolean;
  withoutShadow?: boolean;
  expandable?: boolean;
}

const Card: FC<CardProps> = ({
  title,
  actions,
  children,
  maxHeight,
  readOnly,
  contentProps,
  withoutShadow = false,
  expandable = false,
  ...props
}: CardProps) => {
  const isShowHeader = title || actions;
  const [expanded, toggleExpanded] = usePopup();

  const realHeight = expanded ? '1000px' : maxHeight;
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
      maxHeight={realHeight}
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
            boxShadow: isScrollable && !expanded ? 'cardInsetShadow' : 'none',
            transition: (styles as any)?.transition,
          }}
          ref={contentRef}
          width="100%"
          maxHeight={realHeight}
          height="100%"
          overflowY={isScrollable ? 'auto' : 'initial'}
          p="20px"
          {...contentProps}
        >
          {children}
        </Box>
      )}
      {expandable && (
        <Flex
          sx={{
            position: 'absolute',
            bottom: '-1px',
            right: '-1px',
            width: '100%',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton
            icon={expanded ? IconName.arrow_up : IconName.arrow_down}
            onClick={toggleExpanded}
            sx={{ cursor: 'pointer', mr: '-31px' }}
          />
        </Flex>
      )}
    </RebassCard>
  );
};

export default memo(Card);
