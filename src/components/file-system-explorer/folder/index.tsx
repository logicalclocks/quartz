import React, { FC, useState } from 'react';
import { Box, Flex } from 'rebass';
import icons from '../../../sources/icons';

// Styles
import { folderExplorerStyle } from './folder-explorer.styles';

export interface QuartzFileExplorerFolderProps {
  children: Array<any>;
  name: string;
  id: number;
  isActive?: boolean;
  selected?: boolean;
  index: number;
  mode?: string;
  setColumns: any;
  isHasChildren: boolean;
  setActiveFile: any;
  setActiveFolder: any;
  activeFolder: number;
  selectPathListValue: any;
  itemInfo: any;
}

const FolderExplorer: FC<QuartzFileExplorerFolderProps> = ({
  children,
  setActiveFile,
  isHasChildren,
  selectPathListValue,
  mode,
  isActive,
  selected,
  setActiveFolder,
  activeFolder,
  index,
  name,
  itemInfo,
  id,
  setColumns,
}: // ...props
QuartzFileExplorerFolderProps) => {
  const [active, setActive] = useState(isActive);
  const [selectedFolder, setSelectedFolder] = useState(selected);

  const handleClickFolder = () => {
    if (mode === 'oneFolder') {
      setActive(!active);
      setSelectedFolder(!selectedFolder);
      selectPathListValue(itemInfo, !selectedFolder);
    }
    console.log('Active folder: ', activeFolder);
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
