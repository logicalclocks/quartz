import React, { FC, memo, useEffect, useRef, useState } from 'react';
import {
  Box,
  Card as RebassCard,
  CardProps as RebassCardProps,
  Flex,
} from 'rebass';

import Footer from './footer';
import Header from './header';
import Column from './column';
import Info from './info';
import EmptyFolderInfo from './empty-folder-info';

// Styles
import styles from './file-system-explorer.styles';

// Data
import { testData } from './data';

export interface FileSystemExplorerProps
  extends Omit<RebassCardProps, 'css' | 'title'> {
  title?: string;
  link?: string;
  mode?: string;
  data: any;
  disableDownload?: boolean;
  validExtensions?: string[];
  handleLoadMore: (path: string, columnIndex: number) => void;
  shortcutActions?: React.ReactNode;
  contentProps?: Omit<RebassCardProps, 'css' | 'children'>;
  onClose: (key: any) => void;
  handleSelectFile?: (activeFile: any, isDownload: boolean) => void;
  handleDownloadFile: (file: any) => void;
}

export interface ActiveFile {
  type: string;
  href: string;
  zipState: string;
  attributes: {
    accessTime: string;
    dir: boolean;
    group: string;
    id: number;
    modificationTime: string;
    name: string;
    owner: string;
    parentId: number;
    path: string;
    permission: string;
    size: number;
    underConstruction: boolean;
  };
}

const FileSystemExplorer: FC<FileSystemExplorerProps> = ({
  title = 'Select a file',
  onClose = () => console.log('Close'),
  shortcutActions,
  handleDownloadFile,
  mode = 'oneFile',
  contentProps,
  handleLoadMore = () => console.log('load more in quartz'),
  handleSelectFile = () => console.log('handleSelectFile in quartz'),
  disableDownload = false,
  validExtensions,
  data = testData,
  ...props
}: FileSystemExplorerProps) => {
  const contentRef = useRef<HTMLDivElement>();

  const [columns, setColumns] = useState(data);
  const [isEmptyFolder, setIsEmptyFolder] = useState<boolean>(false);

  useEffect(() => {
    if (Array.isArray(data)) {
      const lastElement = data[data.length - 1];

      if (Array.isArray(lastElement) && lastElement.length === 0) {
        // if last element's length is 0, consider it is empty folder
        setIsEmptyFolder(true);
        setColumns(data.slice(0, -1));
      } else {
        setIsEmptyFolder(false);
        setColumns(data);
      }
    }
  }, [data]);

  const [activeFile, setActiveFile] = useState<ActiveFile>();
  // @ts-ignore
  const [fileListValue, setFileListValue] = useState<any[]>([]);
  const [pathListValue, setPathListValue] = useState<string>('');
  const lastChildOfColumn = useRef<any>();
  const scrollToRight = () => {
    !!lastChildOfColumn ? lastChildOfColumn.current.scrollIntoView() : [];
  };

  const isFileSelected = (item: any, action: boolean) => {
    if (action) {
      setFileListValue((prevState: any[]): any[] => [...prevState, item]);
    } else {
      setFileListValue((prevState: any[]): any[] => [
        ...prevState.filter((name) => name !== item.attributes.name),
      ]);
    }
  };

  const selectPathListValue = (path: string, isFolder: boolean) => {
    if (!isFolder) {
      setPathListValue(path);
    }
    setPathListValue(path);
  };

  useEffect(() => {
    scrollToRight();
  }, [columns]);

  return (
    <RebassCard {...props} sx={styles}>
      <Header shortcutActions={shortcutActions} title={title} />
      <Flex
        sx={{
          flex: 1,
          borderStyle: 'solid',
          borderColor: 'grayShade3',
          borderWidth: '1px',
          overflowX: 'auto',
          backgroundColor: 'grayShade3',
        }}
        ref={contentRef}
        height="100%"
        minWidth="965px"
        m="20px"
        {...contentProps}
      >
        {columns.map((el: any, index: any) => (
          <Column
            validExtensions={validExtensions}
            handleLoadMore={handleLoadMore}
            setActiveFile={setActiveFile}
            mode={mode}
            children={el}
            setColumns={setColumns}
            key={index}
            index={index}
            isFileSelected={isFileSelected}
            selectPathListValue={selectPathListValue}
            fileListValue={fileListValue}
            setIsEmptyFolder={setIsEmptyFolder}
          />
        ))}
        {isEmptyFolder && <EmptyFolderInfo />}
        {activeFile && (
          <Info
            activeFile={activeFile}
            disableDownload={disableDownload}
            handleDownloadFile={handleDownloadFile}
          />
        )}
        <Box ref={lastChildOfColumn} />
      </Flex>
      <Footer
        onClose={onClose}
        fileListValue={fileListValue}
        value={pathListValue}
        activeFile={activeFile}
        columns={columns}
        mode={mode}
        handleSelectFile={handleSelectFile}
      />
    </RebassCard>
  );
};

export default memo(FileSystemExplorer);
