import React, { FC } from 'react';
import { Box } from 'rebass';

// Components
import Popup, { PopupProps } from '../index';
import FooterButton from '../../footer-button';
import DrawerSection, { DrawerSectionProps } from './drawer-section';
// Types
import Tooltip from '../../tooltip';
import { GetIcon, IconName } from '../../icon';

type IDrawer<P> = FC<P> & {
  Section: FC<DrawerSectionProps>;
};

type Children = React.ReactElement<DrawerSectionProps> | null;

export interface DrawerProps extends Omit<PopupProps, 'css'> {
  bottomButton?: [React.ReactNode, React.MouseEventHandler<HTMLButtonElement>];
  headerLine?: React.ReactNode;
  headerSummary?: React.ReactNode;
  children: Children | Children[];
  isOpen?: boolean;
  singleBottom?: boolean;
  onClose?: () => void;
}

const Drawer: IDrawer<DrawerProps> = ({
  bottomButton,
  headerLine,
  headerSummary,
  children,
  singleBottom = true,
  onClose,
  ...props
}: DrawerProps) => {
  const [bottomActionTitle, bottomActionCallback] =
    singleBottom && bottomButton ? bottomButton : [];

  return (
    <Popup
      width="460px"
      right="20px"
      left="none"
      top="75px"
      onClose={onClose}
      {...props}
    >
      <Box>
        <Box p="20px" {...props} tx="variants.popup" variant="drawerSection">
          <Box
            width="100%"
            display="flex"
            sx={{
              alignItems: 'center',
            }}
          >
            <Tooltip mainText="Close">
              <Box
                onClick={onClose}
                p="2px"
                height="30px"
                sx={{
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'transparent',
                  cursor: 'pointer',

                  ':hover': {
                    backgroundColor: 'grayShade3',
                    borderColor: 'grayShade3',
                  },
                }}
              >
                <GetIcon icon={IconName.cross} />
              </Box>
            </Tooltip>
            <Box ml="auto" display="flex">
              {headerLine}
            </Box>
          </Box>
          <Box mt="17px" display="flex">
            {headerSummary}
          </Box>
        </Box>
        {children}
      </Box>
      {bottomActionTitle && (
        <Box>
          <FooterButton width="100%" onClick={bottomActionCallback}>
            {bottomActionTitle}
          </FooterButton>
        </Box>
      )}
    </Popup>
  );
};

Drawer.Section = DrawerSection;

export default Drawer;
