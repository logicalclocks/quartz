import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';

// Components
import { Button } from '../../button';
import Labeling from '../../typography/labeling';
// Types
import Action from '../../action.type';

export interface DrawerSectionProps
  extends Omit<BoxProps, 'css' | 'title' | 'action'> {
  title: string;
  action?: Action<React.MouseEvent<HTMLButtonElement>>;
  children?: React.ReactNode;
}

const DrawerSection: FC<DrawerSectionProps> = ({
  title,
  action,
  children,
  ...props
}: DrawerSectionProps) => {
  const [actionTitle, callback] = action || [];

  return (
    <Box
      pt="15px"
      pr="20px"
      pb="20px"
      pl="20px"
      {...props}
      tx="variants.popup"
      variant="drawerSection"
    >
      <Box
        width="100%"
        display="flex"
        sx={{
          alignItems: 'center',
        }}
      >
        {title && <Labeling bold>{title}</Labeling>}
        {action && (
          <Box ml="auto" display="flex">
            <Button intent="inline" onClick={callback} p="0">
              {actionTitle}
            </Button>
          </Box>
        )}
      </Box>
      {children && (
        <Box mt="15px" display="flex">
          {children}
        </Box>
      )}
    </Box>
  );
};

export default DrawerSection;
