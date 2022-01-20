import React, { FC } from 'react';
import { Box } from 'rebass';

// Components
import Popup, { PopupProps } from '../index';
import FooterButton from '../../footer-button';
import DrawerSection, { DrawerSectionProps } from './drawer-section';
// Types
import Action from '../../action.type';
import Tooltip from '../../tooltip';
import { IconName } from '../../..';
import Icon from '../../icon';

type IDrawer<P> = FC<P> & {
  Section: FC<DrawerSectionProps>;
};

type Children = React.ReactElement<DrawerSectionProps> | null;

export interface DrawerProps extends Omit<PopupProps, 'css'> {
  bottomButton?: Action<React.MouseEvent<HTMLButtonElement>> | React.ReactNode;
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
  // @ts-ignore
  const [bottomActionTitle, bottomActionCallback] = singleBottom
    ? bottomButton
    : [] || [];

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
                <Icon icon={IconName.cross} />
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
      {bottomButton && (
        <Box>
          {singleBottom ? (
            <FooterButton width="100%" onClick={bottomActionCallback}>
              {bottomActionTitle}
            </FooterButton>
          ) : (
            bottomButton
          )}
        </Box>
      )}
    </Popup>
  );
};

Drawer.Section = DrawerSection;

export default Drawer;
