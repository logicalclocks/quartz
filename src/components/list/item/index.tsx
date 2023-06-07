import { memo } from 'react';
import { Box, BoxProps } from 'rebass';

import { Button } from '../../button';
import styles, { withoutBorder } from './list-item.styles';

export interface ListItemProps extends Omit<BoxProps, 'css' | 'action'> {
  children: React.ReactNode;
  variant?: 'primary' | 'active';
  hasDivider?: boolean;
  isRightAlignment?: boolean;
  action?: [string, (event: React.MouseEvent<HTMLButtonElement>) => void];
  isActive?: boolean;
}

const ListItem = ({
  children,
  variant = 'primary',
  hasDivider,
  action,
  isActive = false,
  isRightAlignment,
  disabled,
  onClick,
  sx = {},
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
      sx={{ ...styles(isActive, disabled), ...sx }}
      {...props}
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
