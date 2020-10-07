import React, { FC } from 'react';
import { Box } from 'rebass';

// Components
import Popup, { PopupProps } from '../index';
import Subtitle from '../../typography/subtitle';
import Text from '../../typography/text';

export interface TinyPopupProps extends Omit<PopupProps, 'css' | 'children'> {
  title: string;
  secondaryText: string;
  mainButton?: React.ReactNode;
  secondaryButton?: React.ReactNode;
  onClose?: () => void;
}

const TinyPopup: FC<TinyPopupProps> = ({
  title,
  secondaryText,
  mainButton,
  secondaryButton,
  onClose = () => {},
  ...props
}: TinyPopupProps) => (
  <Popup
    pt="14px"
    pl="20px"
    pr="20px"
    pb="20px"
    width="460px"
    {...props}
    onClose={onClose}
  >
    <Subtitle lineHeight="22px">{title}</Subtitle>
    <Text lineHeight="14px" py="12px">
      {secondaryText}
    </Text>
    <Box display="flex" mt="auto">
      <Box display="flex" ml="auto">
        {secondaryButton}
        {mainButton}
      </Box>
    </Box>
  </Popup>
);

export default TinyPopup;
