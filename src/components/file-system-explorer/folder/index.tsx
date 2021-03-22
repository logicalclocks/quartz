import React, { FC, useState } from 'react';
import { Box, Flex } from 'rebass';
import icons from '../../../sources/icons';

// Styles
import { folderExplorerStyle } from './folder-explorer.styles';

export interface QuartzFileExplorerFolderProps {
  children: Array<any>;
  name: string;
  id: number;
  isActive: boolean;
  index: number;
  setColumns: any;
  isHasChildren: boolean;
  setActiveFile: any;
  setActiveFolder: any;
  activeFolder: number;
}

const FolderExplorer: FC<QuartzFileExplorerFolderProps> = ({
  children,
  setActiveFile,
  isHasChildren,
  isActive,
  setActiveFolder,
  activeFolder,
  index,
  name,
  id,
  setColumns,
  ...props
}: QuartzFileExplorerFolderProps) => {
  const handleClickFolder = () => {
    setActiveFolder(id);
    setActiveFile(null);
    setColumns((prevState: any) => [
      ...prevState.slice(0, index + 1),
      children,
    ]);
  };

  return (
    <Flex
      sx={{ ...folderExplorerStyle(isHasChildren, activeFolder, id) }}
      onClick={handleClickFolder}
      tabIndex={0}
    >
      <Box
        sx={{
          height: '9px',
          svg: {
            mr: '9px',
            path: {
              fill: 'black',
            },
          },
        }}
      >
        {icons.folder}
      </Box>
      {name}
    </Flex>
  );
};

export default FolderExplorer;
