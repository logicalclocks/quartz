import React, { FC, useState } from 'react';
import { Box, Flex } from 'rebass';
import icons from '../../../sources/icons';

// Styles
import { folderExplorerStyle } from './folder-explorer.styles';

export interface QuartzFileExplorerFolderProps {
  children: boolean;
  name: string;
  isActive: boolean;
}

const FolderExplorer: FC<QuartzFileExplorerFolderProps> = ({
  children,
  isActive,
  name,
  ...props
}: QuartzFileExplorerFolderProps) => {
  const [active, setActive] = useState(isActive);

  const handleClickFolder = () => {
    setActive(!active);
  };

  return (
    <Flex
      sx={{ ...folderExplorerStyle(active, children) }}
      onClick={handleClickFolder}
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
