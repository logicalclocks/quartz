import React, { FC } from 'react';
import { Box, Flex } from 'rebass';
import styles, { boxStyles, boxButtonStyles } from './footer.styles';
import Labeling from '../../typography/labeling';

export interface fileExplorerFooter {
  value?: string;
  mainButton: React.ReactNode;
  secondaryButton?: React.ReactNode;
}

export interface FileExplorerFooterProps {
  value?: string;
  intent?: string;
  mainButton: React.ReactNode;
  secondaryButton?: React.ReactNode;
}

const FooterFileExplorer: FC<fileExplorerFooter> = ({
  value = 'pick a file',
  mainButton,
  secondaryButton,
  ...props
}: fileExplorerFooter) => (
  <Flex sx={{ ...styles }} {...props}>
    <Box sx={{ ...boxStyles }}>
      {value && (
        <Labeling gray bold sx={{ textTransform: 'normal' }}>
          {value}
        </Labeling>
      )}
    </Box>
    <Box sx={{ ...boxButtonStyles }}>
      {secondaryButton && <Box>{secondaryButton}</Box>}
      <Box>{mainButton}</Box>
    </Box>
  </Flex>
);

export default FooterFileExplorer;
