import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';

import FolderExplorer from '../folder';
import FileExplorer from '../file';

export interface FileExplorerColumnProps
  extends Omit<BoxProps, 'css' | 'action'> {
  children?: Array[any];
  setColumns?: any;
  mode?: string;
  index?: number;
  setActiveFile?: object;
  setActive?: any;
}

const FileExplorerColumn: FC<FileExplorerColumnProps> = ({
  children,
  mode,
  index,
  setColumns,
  setActiveFile,
  setActive,
}: FileExplorerColumnProps) => {
  console.log('Here ', setActiveFile);
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
                mode={mode}
                setActive={setActive}
                setActiveFile={setActiveFile}
                itemInfo={item}
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
