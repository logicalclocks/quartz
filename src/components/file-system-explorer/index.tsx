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

const FileSystemExplorer: FC<FileSystemExplorerProps> = ({
  title = 'Select a file',
  shortcutActions,
  mode = 'oneFile',
  contentProps,
  ...props
}: FileSystemExplorerProps) => {
  const contentRef = useRef<HTMLDivElement>();

  const [columns, setColumns] = useState([data]);
  const [activeFile, setActiveFile] = useState(null);
  const [fileListValue, setFileListValue] = useState([]);

  const lastChildOfColumn = useRef(null);

  const scrollToRight = () => {
    lastChildOfColumn.current?.scrollIntoView();
  };

  const isFileSelected = (item: object, action: boolean) => {
    if (action) {
      setFileListValue((prevState) => prevState.push());
    } else {
      setFileListValue((prevState) =>
        prevState.filter((el) => el.id === item.id),
      );
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
          />
        ))}
        {activeFile && <Info activeFile={activeFile} />}
        <Box ref={lastChildOfColumn} />
      </Flex>
      <Footer
        secondaryButton={<Button variant="file-secondary">Back</Button>}
        mainButton={<Button intent="primary">Select</Button>}
        value={fileListValue}
      />
    </RebassCard>
  );
};

export default memo(FileSystemExplorer);
