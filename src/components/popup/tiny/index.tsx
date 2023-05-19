import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Button } from '../../button';

// Components
import Popup, { PopupProps } from '../index';
import Text from '../../typography/text';
import { ButtonProps } from '../../..';

export interface TinyPopupProps
  extends Omit<
    PopupProps,
    'css' | 'children' | 'disabledMainButton' | 'disabledSecondaryButton'
  > {
  secondaryText?: string;
  mainButtonProps?: ButtonProps;
  secondaryButtonProps?: ButtonProps;
  tertiaryButtonProps?: ButtonProps;
  onClose?: () => void;
  children?: React.ReactNode;
  /**
   * @deprecated [#1] since version 2.6.1 [#2].
   * */
  contentHeight?: string;
  withCloseButton?: boolean;
}

const TinyPopup = ({
  title,
  secondaryText,
  onClose = () => {},
  mainButtonProps,
  secondaryButtonProps,
  tertiaryButtonProps,
  children,
  withCloseButton = false,
  size = 'md',
  ...props
}: TinyPopupProps) => (
  <Popup
    onClose={onClose}
    size={size}
    title={title}
    hasCloseButton={withCloseButton}
    footer={
      <Flex gap="20px">
        {tertiaryButtonProps && (
          <Button intent="secondary" {...tertiaryButtonProps} />
        )}
        {secondaryButtonProps && (
          <Button intent="secondary" {...secondaryButtonProps} />
        )}
        {mainButtonProps && <Button {...mainButtonProps} />}
      </Flex>
    }
    scrollBehavior="outside"
    {...props}
  >
    {!!secondaryText && <Text pb="20px">{secondaryText}</Text>}
    {children}
  </Popup>
);

export default TinyPopup;
