import React, { FC, useState } from 'react';
import { Box, Flex } from 'rebass';

// Styles
import { fileExplorerStyle } from './file-explorer.styles';
import { Checkbox } from '../../../index';
import { folderExplorerStyle } from '../folder/folder-explorer.styles';
import icons from '../../../sources/icons';

export interface QuartzFileExplorerProps {
  name?: string;
  isActive?: boolean;
  selected?: boolean;
  activeFile?: object;
  mode?: string;
  itemInfo?: object;
  setActiveFile?: any;
}

const FileExplorer: FC<QuartzFileExplorerProps> = ({
  isActive,
  activeFile,
  setActiveFile,
  itemInfo,
  mode,
  selected,
  ...props
}: QuartzFileExplorerProps) => {
  const [active, setActive] = useState(isActive);
  const [selectedFile, setSelectedFile] = useState(selected);
  console.log('itemInfo in file: ', itemInfo);

  const handleClickFile = (mode: string) => {
    if (mode === 'nFiles') {
      setActive(!active);
      setSelectedFile(!selectedFile);
      setActiveFile(itemInfo);
    } else {
      setActive(!active);
      setActiveFile(itemInfo);
    }
    // console.log('Click1');
    // setActive(!active);
    // setSelectedFile(!selectedFile);
    // console.log('Click2');
    // setActiveFile(itemInfo);
    // console.log('Click3');
  };

  return (
    <Flex
      sx={{ ...fileExplorerStyle(active, selectedFile, mode) }}
      tabIndex={0}
    >
      {mode === 'nFiles' ? (
        <Checkbox
          m="10px"
          label={itemInfo.name}
          checked={selectedFile}
          variant="gray"
          onChange={() => handleClickFile(mode)}
        />
      ) : (
        <Flex
          sx={{
            ...fileExplorerStyle(active, selectedFile, mode),
          }}
          onClick={() => handleClickFile(mode)}
          tabIndex={0}
        >
          {console.log(mode == 'oneFile')}
          {itemInfo.name}
        </Flex>
      )}
    </Flex>
  );
};

export default FileExplorer;
