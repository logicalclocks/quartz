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

// Styles
import styles from './file-system-explorer.styles';

//Data
import { testData } from './data';

export interface FileSystemExplorerProps
  extends Omit<RebassCardProps, 'css' | 'title'> {
  title?: string;
  link?: string;
  mode?: string;
  data: any;
  handleLoadMore: (path: string, columnIndex: number) => void;
  shortcutActions?: React.ReactNode;
  contentProps?: Omit<RebassCardProps, 'css' | 'children'>;
  onClose: (key: any) => void;
  handleSelectFile: (activeFile: any) => void;
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
  mode = 'oneFile',
  contentProps,
  handleLoadMore = () => console.log('load more in quartz'),
  handleSelectFile = () => console.log('handleSelectFile in quartz'),
  data = testData,
  ...props
}: FileSystemExplorerProps) => {
  const contentRef = useRef<HTMLDivElement>();

  const [columns, setColumns] = useState(data);

  useEffect(() => {
    setColumns(data);
  }, [data]);

  const [activeFile, setActiveFile] = useState<ActiveFile>();
  //@ts-ignore
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

  const selectPathListValue = (path: string) => {
    setPathListValue(path);
  };

  useEffect(() => {
    scrollToRight();
  }, [columns, activeFile]);

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
          />
        ))}
        {activeFile && <Info activeFile={activeFile} />}
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
