import React, { FC, memo, useEffect, useRef, useState } from 'react';
import {
  Box,
  Card as RebassCard,
  CardProps as RebassCardProps,
  Flex,
} from 'rebass';

import Footer from './footer';
import Header from './header';
import Button from '../button';
import Column from './column';
import Info from './info';

// Styles
import styles from './file-system-explorer.styles';

//Data
import { data } from './data';

export interface FileSystemExplorerProps
  extends Omit<RebassCardProps, 'css' | 'title'> {
  title?: string;
  link?: string;
  mode?: string;
  shortcutActions?: React.ReactNode;
  contentProps?: Omit<RebassCardProps, 'css' | 'children'>;
}

export interface ActiveFile {
  author: string;
  creation: string;
  id: number;
  last_update: string;
  name: string;
  size: string;
  type: string;
}

const FileSystemExplorer: FC<FileSystemExplorerProps> = ({
  title = 'Select a file',
  shortcutActions,
  mode = 'oneFile',
  contentProps,
  ...props
}: FileSystemExplorerProps) => {
  const contentRef = useRef<HTMLDivElement>();

  const [columns, setColumns] = useState([data]);
  const [activeFile, setActiveFile] = useState<ActiveFile>();
  const [fileListValue, setFileListValue] = useState<any[]>([]);
  const [pathListValue, setPathListValue] = useState<any[]>([]);

  const lastChildOfColumn = useRef<any>();

  const scrollToRight = () => {
    !!lastChildOfColumn ? lastChildOfColumn.current.scrollIntoView() : [];
  };

  const isFileSelected = (item: any, action: boolean) => {
    if (action) {
      setFileListValue((prevState: any[]): any[] => [...prevState, item]);
    } else {
      setFileListValue((prevState) => [
        ...prevState.filter((el) => el.id !== item.id),
      ]);
    }
  };

  const selectPathListValue = (item: any, action: boolean) => {
    console.log('columns: ', columns, item);
    if (action) {
      setPathListValue((prevState: any[]): any[] => [...prevState, item]);
    } else {
      setPathListValue((prevState) => [
        ...prevState.filter((el) => el.id !== item.id),
      ]);
    }
  };

  useEffect(() => {
    scrollToRight();
  }, [columns, activeFile]);

  return (
    <RebassCard {...props} sx={styles}>
      <Header shortcutActions={shortcutActions} title={title} />
      <Flex
        sx={{
          borderStyle: 'solid',
          borderColor: 'grayShade3',
          borderWidth: '1px',
          overflowX: 'hidden',
        }}
        ref={contentRef}
        height="100%"
        overflowY="initial"
        m="20px"
        {...contentProps}
      >
        {columns.map((el, index) => (
          <Column
            setActiveFile={setActiveFile}
            mode={mode}
            children={el}
            setColumns={setColumns}
            key={index}
            index={index}
            isFileSelected={isFileSelected}
            selectPathListValue={selectPathListValue}
          />
        ))}
        {activeFile && <Info activeFile={activeFile} />}
        <Box ref={lastChildOfColumn} />
      </Flex>
      <Footer
        secondaryButton={<Button variant="file-secondary">Back</Button>}
        mainButton={<Button intent="primary">Select</Button>}
        value={mode === 'oneFolder' ? pathListValue : fileListValue}
        activeFile={activeFile}
        columns={columns}
        mode={mode}
      />
    </RebassCard>
  );
};

export default memo(FileSystemExplorer);
