import React, { FC } from 'react';
import { Box } from 'rebass';

// Components
import Popup, { PopupProps } from '../index';
import IconButton from '../../icon-button';
import DrawerSection, { DrawerSectionProps } from './drawer-section';

type IDrawer<P> = FC<P> & {
  Section: FC<DrawerSectionProps>;
};

export interface DrawerProps extends Omit<PopupProps, 'css'> {
  bottomButton?: React.ReactNode;
  headerLine?: React.ReactNode;
  headerSummary?: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const Drawer: IDrawer<DrawerProps> = ({
  bottomButton,
  headerLine,
  headerSummary,
  children,
  onClose,
  ...props
}: DrawerProps) => (
  <Popup
    width="460px"
    right="20px"
    left="none"
    top="75px"
    onClose={onClose}
    {...props}
  >
    <DrawerSection
      pt="20px"
      title={
        <IconButton
          tooltip="Close"
          ml="-10px"
          intent="ghost"
          icon="times"
          onClick={onClose}
        />
      }
      actions={headerLine}
    >
      {headerSummary}
    </DrawerSection>
    {children}
    {bottomButton && (
      <Box
        sx={{
          left: 0,
          right: 0,
          bottom: 0,
          position: 'sticky',
        }}
      >
        {bottomButton}
      </Box>
    )}
  </Popup>
);

Drawer.Section = DrawerSection;

export default Drawer;
