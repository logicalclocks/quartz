import React, { FC, useState } from 'react';
import { Box, Flex } from 'rebass';
import icons from '../../../sources/icons';

// Styles
import { folderExplorerStyle } from './folder-explorer.styles';

export interface QuartzFileExplorerFolderProps {
  children: Array<any>;
  name: string;
  isActive: boolean;
  index: number;
  setColumns: any;
  isHasChildren: boolean;
}

const FolderExplorer: FC<QuartzFileExplorerFolderProps> = ({
  children,
  isHasChildren,
  isActive,
  index,
  name,
  setColumns,
  ...props
}: QuartzFileExplorerFolderProps) => {
  const [active, setActive] = useState(isActive);

  const handleClickFolder = () => {
    setActive(!active);
    [];
    setColumns((prevState) => [...prevState.slice(0, index + 1), children]);
  };

  return (
    <Flex
      sx={{ ...folderExplorerStyle(isHasChildren) }}
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
