import React, { FC, useState } from 'react';
import { Box } from 'rebass';

// Styles
import { fileExplorerStyle } from './file-explorer.styles';
import Checkbox from '../../checkbox';
import Tooltip from '../../tooltip';

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
  isValidExtension: boolean;
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
  isValidExtension,
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

  return (
    <Tooltip mainText={itemInfo.attributes.name}>
      {mode === 'nFiles' ? (
        <Box
          sx={{
            ...fileExplorerStyle(active, selectedFile, mode, isValidExtension),
          }}
          tabIndex={0}
          onClick={() => isValidExtension && selectActiveFile()}
        >
          <Checkbox
            m="10px"
            disabled={!isValidExtension}
            label={itemInfo.attributes.name}
            checked={selectedFile}
            onChange={() => handleClickFile(mode)}
            variant="gray"
          />
        </Box>
      ) : (
        <Box
          sx={{
            ...fileExplorerStyle(active, selectedFile, mode, isValidExtension),
          }}
          onClick={() => isValidExtension && handleClickFile(mode)}
          tabIndex={0}
        >
          {itemInfo.attributes.name}
        </Box>
      )}
    </Tooltip>
  );
};

export default FileExplorer;
