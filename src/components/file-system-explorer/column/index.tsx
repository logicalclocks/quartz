import React, { FC, useState } from 'react';
import { Box, BoxProps } from 'rebass';

import FolderItemExplorer from '../folder';
import FileItemExplorer from '../file';
import Tooltip from '../../tooltip';
import TooltipPositions from '../../tooltip/positions';

export interface FileExplorerColumnProps
  extends Omit<BoxProps, 'css' | 'action'> {
  children: any[];
  setColumns?: any;
  mode?: string;
  index: number;
  setActiveFile?: object;
  handleLoadMore: (path: string, columnIndex: number) => void;
  setActive?: any;
  isFileSelected?: any;
  selectPathListValue?: any;
  fileListValue?: any[];
}

const FileExplorerColumn: FC<FileExplorerColumnProps> = ({
  children,
  mode,
  index,
  setColumns,
  setActiveFile,
  isFileSelected,
  handleLoadMore,
  selectPathListValue,
  setActive,
  fileListValue,
}: FileExplorerColumnProps) => {
  const [activeFolder, setActiveFolder] = useState(0);

  return (
    <Box
      sx={{
        width: '225px',
        minWidth: '225px',
        borderRightColor: 'grayShade1',
        borderRightWidth: '3px',
        borderRightStyle: 'solid',
        backgroundColor: 'grayShade3',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {children.map((item: { [key: string]: any }): any => {
        if (item) {
          if (item.attributes.dir) {
            return (
              <Tooltip
                key={item.attributes.id}
                disabled={item.attributes.name.length < 20}
                position={TooltipPositions.top}
                mainText={item.attributes.name}
              >
                <FolderItemExplorer
                  index={index}
                  id={item.attributes.id}
                  handleLoadMore={handleLoadMore}
                  mode={mode}
                  name={item.attributes.name}
                  itemInfo={item}
                  selectPathListValue={selectPathListValue}
                  setColumns={setColumns}
                  setActiveFile={setActiveFile}
                  activeFolder={activeFolder}
                  setActiveFolder={setActiveFolder}
                  isActive={false}
                  selected={false}
                />
              </Tooltip>
            );
          } else {
            return (
              <Tooltip
                key={item.attributes.id}
                position={TooltipPositions.top}
                mainText={item.attributes.name}
                disabled={item.attributes.name.length < 20}
              >
                <FileItemExplorer
                  index={index}
                  mode={mode}
                  setActive={setActive}
                  setColumns={setColumns}
                  isFileSelected={isFileSelected}
                  setActiveFile={setActiveFile}
                  setActiveFolder={setActiveFolder}
                  itemInfo={item}
                  isActive={
                    fileListValue
                      ? fileListValue.includes(item.attributes.name)
                      : false
                  }
                  selected={
                    fileListValue
                      ? fileListValue.includes(item.attributes.name)
                      : false
                  }
                />
              </Tooltip>
            );
          }
        }
      })}
    </Box>
  );
};

export default FileExplorerColumn;
