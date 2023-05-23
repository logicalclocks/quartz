import React, { FC, useState } from 'react';
import { Box, Button as RebassButton, Flex } from 'rebass';
import { useTheme } from '../../theme/theme';
import Popup, { PopupProps } from '../popup';
import { getIcon, IconName } from '../icon/list';
import Value from '../typography/value';
import expandViewButtonStyle from './expand-viewer.styles';

export interface ExpandViewerProps {
  title?: string;
  NormalComponent: FC;
  BriefComponent: FC;
  popupProps?: Omit<PopupProps, 'children' | 'isOpen' | 'onClose'>;
}

const ExpandViewer: FC<ExpandViewerProps> = ({
  title,
  NormalComponent,
  BriefComponent,
  popupProps,
}) => {
  const [expanded, setExpanded] = useState(false);

  // if it's not expanded yet then render the Brief with a button to expand
  if (!expanded)
    return (
      <Flex sx={{ width: '100%', position: 'relative' }}>
        <BriefComponent />
        <Flex
          justifyContent="center"
          sx={{
            position: 'absolute',
            bottom: '10px',
            width: '100%',
          }}
        >
          <ExpandButton onClick={() => setExpanded(true)} />
        </Flex>
      </Flex>
    );

  // else it's expanded, show it inside a popup
  return (
    <Flex sx={{ width: '100%' }}>
      <BriefComponent />
      <Popup
        isOpen
        onClose={() => setExpanded(false)}
        title={title}
        hasCloseButton
        size="4xl"
        {...popupProps}
      >
        <Box mb="20px">
          <NormalComponent />
        </Box>
      </Popup>
    </Flex>
  );
};

export default ExpandViewer;
interface ExpandButtonProps {
  onClick: () => void;
}
const ExpandButton: FC<ExpandButtonProps> = ({ onClick }) => {
  const theme = useTheme();
  return (
    <RebassButton variant="ghost" sx={expandViewButtonStyle} onClick={onClick}>
      <Value>expand view</Value>
      <Flex
        as="span"
        sx={{
          svg: {
            height: '11.25px',
            width: 'auto',
            marginLeft: '5px',
          },
        }}
      >
        {getIcon(IconName.arrows_maximize, theme.colors.primary)}
      </Flex>
    </RebassButton>
  );
};
