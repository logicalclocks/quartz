import { FC, useState } from 'react';
import { Box, BoxProps } from 'rebass';

import FolderItemExplorer from '../folder';
import FileItemExplorer from '../file-item-explorer/FileItemExplorer';
import { FileExplorData, FileExplorerMode } from '../types';

export interface FileExplorerColumnProps
  extends Omit<BoxProps, 'css' | 'action'> {
  items: FileExplorData[];
  setColumns?: any;
  mode?: FileExplorerMode;
  index: number;
  setActiveFile?: object;
  handleLoadMore: (path: string, columnIndex: number) => void;
  isFileSelected?: any;
  selectPathListValue?: any;
  fileListValue?: any[];
  validExtensions?: string[];
  setIsEmptyFolder: (value: boolean) => void;
}

const FileExplorerColumn: FC<FileExplorerColumnProps> = ({
  items,
  mode,
  index,
  setColumns,
  setActiveFile,
  isFileSelected,
  handleLoadMore,
  selectPathListValue,
  fileListValue,
  validExtensions,
  setIsEmptyFolder,
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
      {items.map((item: FileExplorData) => {
        const isValidExtension = () => {
          if (!validExtensions || validExtensions?.length === 0) return true;
          const splits = item.attributes.name.split('.');
          const extension = splits[splits.length - 1];
          return validExtensions.includes(`.${extension}`);
        };

        if (item) {
          if (item.attributes.dir) {
            return (
              <FolderItemExplorer
                key={item.attributes.id}
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
            );
          }
          return (
            <FileItemExplorer
              index={index}
              key={item.attributes.id}
              mode={mode}
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
              isValidExtension={isValidExtension()}
              setIsEmptyFolder={setIsEmptyFolder}
            />
          );
        }
        return null;
      })}
    </Box>
  );
};

export default FileExplorerColumn;
