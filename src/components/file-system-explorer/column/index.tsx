import React, { FC, useState } from 'react';
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
  isFileSelected?: any;
}

const FileExplorerColumn: FC<FileExplorerColumnProps> = ({
  children,
  mode,
  index,
  setColumns,
  setActiveFile,
  isFileSelected,
  setActive,
}: FileExplorerColumnProps) => {
  const [activeFolder, setActiveFolder] = useState(0);

  return (
    <Box
      sx={{
        minWidth: '190px',
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
                id={item.id}
                name={item.name}
                children={item.children}
                isHasChildren={item.children.length > 0}
                setColumns={setColumns}
                setActiveFile={setActiveFile}
                activeFolder={activeFolder}
                setActiveFolder={setActiveFolder}
              />
            );
          } else {
            return (
              <FileExplorer
                index={index}
                mode={mode}
                setActive={setActive}
                setColumns={setColumns}
                isFileSelected={isFileSelected}
                setActiveFile={setActiveFile}
                setActiveFolder={setActiveFolder}
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
