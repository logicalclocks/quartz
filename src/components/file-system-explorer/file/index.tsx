import React, { FC, useState } from 'react';
import { Flex } from 'rebass';

// Styles
import { fileExplorerStyle } from './file-explorer.styles';
import { Checkbox } from '../../../index';

export interface QuartzFileExplorerProps {
  name?: string;
  isActive: boolean;
  index: number;
  selected: boolean;
  activeFile?: object;
  mode?: string;
  itemInfo: { [key: string]: string };
  setActiveFile?: any;
  isFileSected?: any;
  setColumns?: any;
  setActive?: any;
  setActiveFolder?: any;
  isFileSelected?: any;
  setSelectedFile?: any;
}

const FileExplorer: FC<QuartzFileExplorerProps> = ({
  isActive,
  setActiveFolder,
  // activeFile,
  setActiveFile,
  itemInfo,
  index,
  setColumns,
  mode = 'oneFile',
  selected,
  isFileSelected,
}: // ...props
QuartzFileExplorerProps) => {
  const [active, setActive] = useState(isActive);
  const [selectedFile, setSelectedFile] = useState(selected);

  const handleClickFile = (mode: string) => {
    if (mode === 'nFiles') {
      setActive(!active);
      setSelectedFile(!selectedFile);
      setActiveFile(itemInfo);
      isFileSelected(itemInfo, !selectedFile);
    } else {
      setActive(!active);
      setActiveFile(itemInfo);
    }
    setActiveFolder(0);
    setColumns((prevState: any) => [...prevState.slice(0, index + 1)]);
  };

  const selectActiveFile = () => {
    setActiveFile(itemInfo);
  };

  return mode === 'nFiles' ? (
    <Flex
      sx={{ ...fileExplorerStyle(active, selectedFile, mode) }}
      tabIndex={0}
      onClick={selectActiveFile}
    >
      <Checkbox
        m="10px"
        sx={{
          width: '100%',
        }}
        label={itemInfo.name}
        checked={selectedFile}
        onChange={() => handleClickFile(mode)}
        variant="gray"
      />
    </Flex>
  ) : (
    <Flex
      sx={{ ...fileExplorerStyle(active, selectedFile, mode) }}
      onClick={() => handleClickFile(mode)}
      tabIndex={0}
    >
      {itemInfo.name}
    </Flex>
  );
};

export default FileExplorer;
