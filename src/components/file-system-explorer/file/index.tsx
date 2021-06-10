import React, { FC, useState } from 'react';
import { Box } from 'rebass';

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
  itemInfo: { [key: string]: any };
  setActiveFile?: any;
  setColumns?: any;
  setActive?: any;
  setActiveFolder?: any;
  isFileSelected?: any;
  setSelectedFile?: any;
}

const FileExplorer: FC<QuartzFileExplorerProps> = ({
  isActive,
  setActiveFolder,
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
    }
    if (mode !== 'oneFolder') {
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
    <Box
      sx={{ ...fileExplorerStyle(active, selectedFile, mode) }}
      tabIndex={0}
      onClick={selectActiveFile}
    >
      <Checkbox
        m="10px"
        label={itemInfo.attributes.name}
        checked={selectedFile}
        onChange={() => handleClickFile(mode)}
        variant="gray"
      />
    </Box>
  ) : (
    <Box
      sx={{ ...fileExplorerStyle(active, selectedFile, mode) }}
      onClick={() => handleClickFile(mode)}
      tabIndex={0}
    >
      {itemInfo.attributes.name}
    </Box>
  );
};

export default FileExplorer;
