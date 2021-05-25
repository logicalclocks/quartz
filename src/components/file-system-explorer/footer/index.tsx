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
  handleSelectFile: (activeFile: any, isDownload: boolean) => void;
  handleSelectFolder: (path: string, isDownload: boolean) => void;
  fileListValue: Array<ActiveFile>[];
}

const FooterFileExplorer: FC<fileExplorerFooter> = ({
  value,
  activeFile,
  columns,
  mode = 'oneFile',
  onClose,
  handleSelectFile,
  handleSelectFolder,
  fileListValue,
  ...props
}: fileExplorerFooter) => {
  const ExplorerMode = (mode: string) => {
    switch (mode) {
      case 'oneFile':
        return activeFile ? activeFile.attributes.name : 'pick a file';

      case 'nFiles': {
        if (!!fileListValue.length) {
          const newList = fileListValue.map((el: any) => {
            return el.attributes.name;
          });
          return newList.join(' ; ');
        } else return 'pick a file';
      }

      case 'oneFolder':
        return !!value ? value : '/';
      default:
        return;
    }
  };
  const ColorStyle = (mode: string) => {
    switch (mode) {
      case 'oneFile':
        return activeFile ? 'primary' : 'gray';

      case 'nFiles':
        return !!fileListValue.length ? 'primary' : 'gray';

      case 'oneFolder':
        return 'primary';
      default:
        return 'gray';
    }
  };

  const handleSelect = (mode: string) => {
    switch (mode) {
      case 'oneFile':
        return handleSelectFile(activeFile, false);

      case 'nFiles':
        return handleSelectFile(fileListValue, false);

      case 'oneFolder':
        console.log('oneFolder:', handleSelectFile);
        console.log('value:', value);
        return handleSelectFile(value || '/datasets/upload/', false);
      default:
        return 'gray';
    }
  };

  return (
    <Flex sx={{ ...styles }} {...props}>
      <Box sx={{ ...boxStyles }}>
        {mode && (
          <Labeling
            bold
            sx={{
              textTransform: 'normal',
              color: ColorStyle(mode),
              marginLeft: '0px',
            }}
          >
            {ExplorerMode(mode)}
          </Labeling>
        )}
      </Box>
      <Box sx={{ ...boxButtonStyles }}>
        <Button variant="file-secondary" onClick={() => onClose(false)}>
          Back
        </Button>
        <Button
          intent="primary"
          disabled={!activeFile && mode !== 'oneFolder'}
          onClick={() => handleSelect(mode)}
        >
          {!value && mode === 'oneFolder' ? 'Select root' : 'Select'}
        </Button>
      </Box>
    </Flex>
  );
};

export default FooterFileExplorer;
