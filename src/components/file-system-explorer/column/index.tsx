import React, { FC, useState } from 'react';
import { Box, BoxProps } from 'rebass';

import FolderItemExplorer from '../folder';
import FileItemExplorer from '../file';

export interface FileExplorerColumnProps
  extends Omit<BoxProps, 'css' | 'action'> {
  children: any[];
  setColumns?: any;
  mode?: string;
  index: number;
  setActiveFile?: object;
  setActive?: any;
  isFileSelected?: any;
  selectPathListValue?: any;
}

const FileExplorerColumn: FC<FileExplorerColumnProps> = ({
  children,
  mode,
  index,
  setColumns,
  setActiveFile,
  isFileSelected,
  selectPathListValue,
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
      {children.map((item: { [key: string]: any }): any => {
        if (item) {
          if (item.type === 'folder') {
            return (
              <FolderItemExplorer
                index={index}
                id={item.id}
                mode={mode}
                name={item.name}
                itemInfo={item}
                children={item.children}
                isHasChildren={item.children.length > 0}
                selectPathListValue={selectPathListValue}
                setColumns={setColumns}
                setActiveFile={setActiveFile}
                activeFolder={activeFolder}
                setActiveFolder={setActiveFolder}
                isActive={false}
                selected={false}
              />
            );
          } else {
            return (
              <FileItemExplorer
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
