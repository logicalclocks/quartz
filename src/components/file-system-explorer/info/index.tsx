import React, { FC } from 'react';
import { Box, BoxProps, Flex } from 'rebass';

import { Value } from '../../../index';

import {
  FileExplorerInfoStyle,
  blockInfoStyles,
  contentInfoStyles,
} from './file-explorer-info.styles';
import Labeling from '../../typography/labeling';
import { ActiveFile } from '../index';
import { formatSizeUnits } from '../../../utils/getFormatSizeUnit';
import { format } from 'date-fns';
import Button from '../../button';
import icons from '../../../sources/icons';

export interface FileExplorerInfoProps extends Omit<BoxProps, 'css'> {
  children?: string[];
  activeFile?: ActiveFile | null;
  handleDownloadFile: () => void;
}

const FileExplorerInfo: FC<FileExplorerInfoProps> = ({
  children,
  activeFile,
  handleDownloadFile,
}: FileExplorerInfoProps) => {
  const dateFormat = (date: string) => {
    return format(new Date(date), 'YYYY-MM-DD - HH:mm:ss');
  };

  return (
    <Box
      sx={{
        ...FileExplorerInfoStyle,
      }}
    >
      <Box
        sx={{
          ...blockInfoStyles,
        }}
      >
        <Value as="h2" marginBottom="32px" textAlign="center">
          {activeFile?.attributes.name}
        </Value>
        <Flex
          sx={{
            '> div > div': {
              height: '30px',
            },
          }}
        >
          <Box
            sx={{
              ...contentInfoStyles(true),
            }}
          >
            <Labeling gray>size</Labeling>
            <Labeling gray>creation</Labeling>
            <Labeling gray>last update</Labeling>
            <Labeling gray>author</Labeling>
          </Box>
          {activeFile && (
            <Box
              sx={{
                ...contentInfoStyles(false),
              }}
            >
              <Labeling>
                {formatSizeUnits(activeFile?.attributes.size)}
              </Labeling>
              <Labeling>
                {dateFormat(activeFile?.attributes.accessTime)}
              </Labeling>
              <Labeling>
                {dateFormat(activeFile?.attributes.modificationTime)}
              </Labeling>
              <Labeling>{activeFile?.attributes.owner}</Labeling>
            </Box>
          )}
        </Flex>
      </Box>
      <Button intent="secondary" onClick={handleDownloadFile}>
        <Flex alignItems="center" justifyContent="center">
          <Flex
            sx={{
              mr: '11px',
              height: '15px',
              alignItems: 'center',
            }}
          >
            {icons.download}
          </Flex>
          <Flex alignItems="center">Download File</Flex>
        </Flex>
      </Button>
      {children}
    </Box>
  );
};

export default FileExplorerInfo;
