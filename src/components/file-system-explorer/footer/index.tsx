import React, { FC } from 'react';
import { Box, Flex } from 'rebass';
import styles, { boxStyles, boxButtonStyles } from './footer.styles';
import Labeling from '../../typography/labeling';
import { ActiveFile } from '../index';
import Button from '../../button';

export interface fileExplorerFooter {
  value?: string;
  activeFile?: ActiveFile;
  onClose: (key: any) => void;
  mode?: string;
  columns: any[];
  handleSelectFile: (activeFile: any) => void;
}

const FooterFileExplorer: FC<fileExplorerFooter> = ({
  value,
  activeFile,
  columns,
  mode = 'oneFile',
  onClose,
  handleSelectFile,
  ...props
}: fileExplorerFooter) => (
  <Flex sx={{ ...styles }} {...props}>
    <Box sx={{ ...boxStyles }}>
      {value && !activeFile ? (
        <Labeling
          bold
          sx={{
            textTransform: 'normal',
            color: 'primary',
            marginLeft: '0px',
          }}
        >
          {value}
        </Labeling>
      ) : (
        <Labeling
          bold
          gray={!activeFile}
          sx={{ textTransform: 'normal', color: activeFile ? 'primary' : '' }}
        >
          {activeFile ? activeFile.attributes.name : 'pick a file'}
        </Labeling>
      )}
    </Box>
    <Box sx={{ ...boxButtonStyles }}>
      <Button variant="file-secondary" onClick={() => onClose(false)}>
        Back
      </Button>
      <Button
        intent="primary"
        disabled={!activeFile}
        onClick={() => handleSelectFile(activeFile)}
      >
        Select
      </Button>
    </Box>
  </Flex>
);

export default FooterFileExplorer;
