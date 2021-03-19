import React, { FC } from 'react';
import { Box, BoxProps, Flex } from 'rebass';

// Styles
import style from './file-explorer-column.styles';
import { data } from '../data';
import FolderExplorer from '../folder';
import FileExplorer from '../file';

export interface FileExplorerColumnProps
  extends Omit<BoxProps, 'css' | 'action'> {
  children?: Array[any];
  setColumns?: any;
  index?: number;
}

const FileExplorerColumn: FC<FileExplorerColumnProps> = ({
  children,
  index,
  setColumns,
}: FileExplorerColumnProps) => {
  return (
    <Box
      sx={{
        width: 190,
        borderRightColor: 'grayShade1',
        borderRightWidth: '3px',
        borderRightStyle: 'solid',
        overflow: 'hidden',
      }}
    >
      {children.map((item) => {
        if (item) {
          if (item.type === 'folder') {
            return (
              <FolderExplorer
                index={index}
                name={item.name}
                isActive={false}
                children={item.children}
                isHasChildren={item.children.length > 0}
                setColumns={setColumns}
              />
            );
          } else {
            return (
              <FileExplorer
                name={item.name}
                isActive={false}
                selected={false}
              />
            );
          }
        }
      })}
    </Box>
  );
};

export default FileExplorerColumn;
