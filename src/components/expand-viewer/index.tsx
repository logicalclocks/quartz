import React, { FC, useState } from 'react';
import Popup, { PopupProps } from '../popup';
import IconButton from '../icon-button';
import { getIcon, IconName } from '../icon/list';
import { useTheme } from 'emotion-theming';
import { Box, Flex } from 'rebass';
import Value from '../typography/value';
import Subtitle from '../typography/subtitle';
import { expandViewButtonStyle } from './expand-viewer.styles';
import { ITheme } from '../../theme/types';

// ExpandViewer
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
      <Popup isOpen onClose={() => setExpanded(false)} {...popupProps}>
        <Box padding={20}>
          <Flex marginBottom={3} alignItems="center">
            <Box flexGrow={1}>
              <Subtitle>{title}</Subtitle>
            </Box>
            <IconButton
              icon={IconName.cross}
              intent="ghost"
              onClick={() => setExpanded(false)}
            ></IconButton>
          </Flex>
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
  const theme = useTheme<ITheme>();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      style={expandViewButtonStyle(theme, isHovered)}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Value as="span" color="primary">
        expand view
      </Value>
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
    </button>
  );
};