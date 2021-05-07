import React, { FC, useState } from 'react';
import { Box, Flex } from 'rebass';
import icons from '../../../sources/icons';

// Styles
import { folderExplorerStyle } from './folder-explorer.styles';

export interface QuartzFileExplorerFolderProps {
  name: string;
  id: number;
  isActive?: boolean;
  selected?: boolean;
  index: number;
  mode?: string;
  setColumns?: any;
  isHasChildren?: boolean;
  setActiveFile: any;
  setActiveFolder: any;
  activeFolder: number;
  selectPathListValue: any;
  handleLoadMore: (path: string, columnIndex: number) => void;
  itemInfo: any;
}

const FolderExplorer: FC<QuartzFileExplorerFolderProps> = ({
  setActiveFile,
  selectPathListValue,
  mode,
  handleLoadMore,
  isActive,
  selected,
  setActiveFolder,
  activeFolder,
  index,
  name,
  itemInfo,
  id,
}: QuartzFileExplorerFolderProps) => {
  const [active, setActive] = useState(isActive);
  const [selectedFolder, setSelectedFolder] = useState(selected);

  const handleClickFolder = () => {
    handleLoadMore(itemInfo.attributes.path, index);
    if (mode === 'oneFolder') {
      setActive(!active);
      setSelectedFolder(!selectedFolder);
      selectPathListValue(itemInfo.attributes.path, !selectedFolder);
    }
    if (mode === 'oneFile') {
      setActiveFolder(id);
      selectPathListValue('', !selectedFolder);
      setActiveFile(null);
    }
    // setActiveFolder(id);
    // selectPathListValue(itemInfo.attributes.path, !selectedFolder);
    // setActiveFile(null);
  };

  return (
    <Flex
      sx={{ ...folderExplorerStyle(activeFolder, id) }}
      onClick={handleClickFolder}
      tabIndex={0}
    >
      <Box
        sx={{
          minWidth: '16px',
          minHeight: '16px',
          marginRight: '9px',
          svg: {
            path: {
              fill: 'black',
            },
          },
        }}
      >
        {icons.folder}
      </Box>
      <Box>{name}</Box>
    </Flex>
  );
};

export default FolderExplorer;
