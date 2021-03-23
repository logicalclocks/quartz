import React, { FC } from 'react';
import { Box, Flex } from 'rebass';
import styles, { boxStyles, boxButtonStyles } from './footer.styles';
import Labeling from '../../typography/labeling';

export interface fileExplorerFooter {
  value?: Array[];
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
  value,
  mainButton,
  secondaryButton,
  ...props
}: fileExplorerFooter) => (
  <Flex sx={{ ...styles }} {...props}>
    <Box sx={{ ...boxStyles }}>
      {value && value?.length > 0 ? (
        value.map((el) => (
          <Labeling
            key={el.id}
            bold
            sx={{
              textTransform: 'normal',
              color: 'primary',
              marginLeft: '0px',
            }}
          >
            {el.name}
            {/*<span style={{ color: 'gray' }}> ; </span>*/}
          </Labeling>
        ))
      ) : (
        <Labeling bold gray sx={{ textTransform: 'normal' }}>
          pick a file
        </Labeling>
      )}
    </Box>
    <Box sx={{ ...boxButtonStyles }}>
      <Box>{secondaryButton}</Box>
      {mainButton && <Box>{mainButton}</Box>}
    </Box>
  </Flex>
);

export default FooterFileExplorer;
