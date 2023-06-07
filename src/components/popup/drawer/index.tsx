import { FC } from 'react';
import { Box } from 'rebass';
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  SlideDirection,
} from '@chakra-ui/react';

import { PopupProps } from '../index';
import FooterButton from '../../footer-button';
import DrawerSection, { DrawerSectionProps } from './drawer-section';

type IDrawer<P> = FC<P> & {
  Section: FC<DrawerSectionProps>;
};

type Children = React.ReactElement<DrawerSectionProps> | null;

export interface DrawerProps extends PopupProps {
  bottomButton?: [React.ReactNode, React.MouseEventHandler<HTMLButtonElement>];
  headerLine?: React.ReactNode;
  headerSummary?: React.ReactNode;
  children: Children | Children[];
  /** @deprecated */
  singleBottom?: boolean;
  placement?: SlideDirection;
}

const Drawer: IDrawer<DrawerProps> = ({
  bottomButton,
  headerLine,
  headerSummary,
  onClose,
  hasBackdrop = true,
  closeOnBackdropClick,
  hasCloseButton = true,
  isOpen = true,
  children,
  ...props
}: DrawerProps) => {
  const [bottomActionTitle, bottomActionCallback] = bottomButton || [];

  return (
    <ChakraDrawer
      onClose={onClose}
      closeOnOverlayClick={closeOnBackdropClick}
      size="sm"
      isOpen={isOpen}
      {...props}
    >
      {hasBackdrop && <DrawerOverlay />}
      <DrawerContent>
        {hasCloseButton && <DrawerCloseButton left={4} top={4} />}
        {(headerLine || headerSummary) && (
          <DrawerHeader>
            <Box p="20px" tx="variants.popup" variant="drawerSection">
              <Box
                width="100%"
                display="flex"
                sx={{
                  alignItems: 'center',
                }}
              >
                <Box ml="auto" display="flex">
                  {headerLine}
                </Box>
              </Box>
              <Box mt={headerLine ? '17px' : '40px'} display="flex">
                {headerSummary}
              </Box>
            </Box>
          </DrawerHeader>
        )}
        <DrawerBody>{children}</DrawerBody>
        {bottomActionTitle && (
          <DrawerFooter>
            <FooterButton width="100%" onClick={bottomActionCallback}>
              {bottomActionTitle}
            </FooterButton>
          </DrawerFooter>
        )}
      </DrawerContent>
    </ChakraDrawer>
  );
};

Drawer.Section = DrawerSection;

export default Drawer;
