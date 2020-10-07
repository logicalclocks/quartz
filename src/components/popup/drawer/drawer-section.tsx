import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';

// Components
import Labeling from '../../typography/labeling';

export interface DrawerSectionProps extends Omit<BoxProps, 'css' | 'title'> {
  title: React.ReactNode;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

const DrawerSection: FC<DrawerSectionProps> = ({
  title,
  actions,
  children,
  ...props
}: DrawerSectionProps) => (
  <Box
    pt="14px"
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
      {actions && (
        <Box ml="auto" display="flex">
          {actions}
        </Box>
      )}
    </Box>
    {children && (
      <Box mt="17px" display="flex">
        {children}
      </Box>
    )}
  </Box>
);

export default DrawerSection;
