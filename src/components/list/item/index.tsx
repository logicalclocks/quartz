import React, { FC, memo } from 'react';
import { Box, BoxProps } from 'rebass';

// Components
import { Button } from '../../button';
// Styles
import styles, { withoutBorder } from './list-item.styles';

export interface ListItemProps extends Omit<BoxProps, 'css' | 'action'> {
  children: React.ReactNode;
  variant?: 'primary' | 'active';
  hasDivider?: boolean;
  isRightAlignment?: boolean;
  action?: [string, (event: React.MouseEvent<HTMLButtonElement>) => void];
  isActive?: boolean;
}

const ListItem: FC<ListItemProps> = ({
  children,
  variant = 'primary',
  hasDivider,
  action,
  isActive = false,
  isRightAlignment,
  disabled,
  onClick,
  ...props
}: ListItemProps) => {
  const [actionTitle, actionCallback] = action || [];

  return (
    <Box
      p="10px"
      as="li"
      tx="variants.list.item"
      variant={variant}
      onClick={disabled ? undefined : onClick}
      {...props}
      sx={styles(isActive, disabled)}
      css={!hasDivider ? withoutBorder : undefined}
    >
      {children}
      {action && (
        <Button
          ml="auto"
          intent="inline"
          p="0 0 0 10px"
          onClick={actionCallback}
        >
          {actionTitle}
        </Button>
      )}
    </Box>
  );
};

export default memo(ListItem);
