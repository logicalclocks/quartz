import React, { FC } from 'react';
import { Box, Flex } from 'rebass';
import styles, { boxStyles, boxButtonStyles } from './footer.styles';
import Labeling from '../../typography/labeling';
import { ActiveFile, FileExplorerMode } from '../types';
import { Button } from '../../button';

export interface Props {
  value?: string;
  activeFile?: ActiveFile;
  onClose: (key: any) => void;
  mode?: FileExplorerMode;
  handleSelectFile: (activeFile: any, isDownload: boolean) => void;
  fileListValue: Array<ActiveFile>[];
  rootDir: string;
}

const FooterFileExplorer: FC<Props> = ({
  value,
  activeFile,
  mode = FileExplorerMode.oneFile,
  onClose,
  handleSelectFile,
  fileListValue,
  rootDir,
  ...props
}: Props) => {
  const config: Record<
    FileExplorerMode,
    {
      exploreMode: string;
      color: string;
      handleSelect: () => void;
    }
  > = {
    oneFile: {
      exploreMode: activeFile ? activeFile.attributes.name : 'pick a file',
      color: activeFile ? 'primary' : 'gray',
      handleSelect: () => handleSelectFile(activeFile, false),
    },
    nFiles: {
      exploreMode:
        fileListValue.map((el: any) => el.attributes.name).join(' ; ') ??
        'pick a file',
      color: fileListValue.length ? 'primary' : 'gray',
      handleSelect: () => handleSelectFile(fileListValue, false),
    },
    oneFolder: {
      exploreMode: value || rootDir,
      color: 'primary',
      handleSelect: () => handleSelectFile(value || rootDir, false),
    },
  };

  const { exploreMode, color, handleSelect } = config[mode];

  return (
    <Flex sx={styles} {...props}>
      <Box sx={boxStyles}>
        {mode && (
          <Labeling
            bold
            sx={{
              color,
              textTransform: 'normal',
              marginLeft: '0px',
            }}
          >
            {exploreMode}
          </Labeling>
        )}
      </Box>
      <Box sx={boxButtonStyles}>
        <Button variant="file-secondary" onClick={() => onClose(false)}>
          Back
        </Button>
        <Button
          intent="primary"
          disabled={!activeFile && mode !== 'oneFolder'}
          onClick={handleSelect}
        >
          {!value && mode === 'oneFolder' ? 'Select root' : 'Select'}
        </Button>
      </Box>
    </Flex>
  );
};

export default FooterFileExplorer;
