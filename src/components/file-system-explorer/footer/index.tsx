import React, { FC } from 'react';
import { Box, Flex } from 'rebass';
import styles, { boxStyles, boxButtonStyles } from './footer.styles';
import Labeling from '../../typography/labeling';
import { ActiveFile } from '../index';

export interface fileExplorerFooter {
  value?: any[];
  mainButton: React.ReactNode;
  secondaryButton?: React.ReactNode;
  activeFile?: ActiveFile;
  mode?: string;
  columns: any[];
}

const FooterFileExplorer: FC<fileExplorerFooter> = ({
  value,
  mainButton,
  secondaryButton,
  activeFile,
  columns,
  mode = 'oneFile',
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
          </Labeling>
        ))
      ) : (
        <Labeling
          bold
          gray={!activeFile}
          sx={{ textTransform: 'normal', color: activeFile ? 'primary' : '' }}
        >
          {activeFile ? activeFile.name : 'pick a file'}
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
