import React, { FC } from 'react';
import { Box, Flex } from 'rebass';
import { Button } from '../../button';

// Components
import Popup, { PopupProps } from '../index';
import Subtitle from '../../typography/subtitle';
import Text from '../../typography/text';
import { ButtonProps, GetIcon, IconName, Tooltip } from '../../..';

export interface TinyPopupProps
  extends Omit<
    PopupProps,
    'css' | 'children' | 'disabledMainButton' | 'disabledSecondaryButton'
  > {
  title: string;
  secondaryText: string;
  mainButtonProps?: ButtonProps;
  secondaryButtonProps?: ButtonProps;
  tertiaryButtonProps?: ButtonProps;
  onClose?: () => void;
  children?: React.ReactNode;
  contentHeight?: string;
  withCloseButton?: boolean;
}

const TinyPopup: FC<TinyPopupProps> = ({
  title,
  secondaryText,
  onClose = () => {},
  mainButtonProps,
  secondaryButtonProps,
  tertiaryButtonProps,
  children,
  contentHeight,
  sx,
  withCloseButton = false,
  ...props
}: TinyPopupProps) => (
  <Popup
    p="20px"
    width="fit-content"
    sx={{
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      ...sx,
    }}
    onClose={onClose}
    {...props}
  >
    {withCloseButton && (
      <Box
        onClick={onClose}
        p="2px"
        height="30px"
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          cursor: 'pointer',
          ':hover': {
            backgroundColor: 'grayShade3',
          },
        }}
      >
        <Tooltip mainText="Close">
          <GetIcon icon={IconName.cross} size="md" />
        </Tooltip>
      </Box>
    )}
    <Subtitle pb="20px" lineHeight="22px">
      {title}
    </Subtitle>
    {!!secondaryText && (
      <Text lineHeight="14px" pb="20px">
        {secondaryText}
      </Text>
    )}
    <Box sx={contentHeight ? { height: contentHeight } : {}}>{children}</Box>
    <Flex>
      <Flex width="100%" sx={{ gap: '20px', justifyContent: 'flex-end' }}>
        {tertiaryButtonProps && (
          <Button intent="secondary" {...tertiaryButtonProps} />
        )}
        {secondaryButtonProps && (
          <Button intent="secondary" {...secondaryButtonProps} />
        )}
        {mainButtonProps && <Button {...mainButtonProps} />}
      </Flex>
    </Flex>
  </Popup>
);

export default TinyPopup;
