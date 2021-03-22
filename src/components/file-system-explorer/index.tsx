import React, { FC, memo, useRef, useState } from 'react';
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

  console.log('itemInfo in MAIN: ', activeFile);

  return (
    <RebassCard {...props} sx={styles}>
      <Header shortcutActions={shortcutActions} title={title} />
      <Flex
        sx={{
          boxShadow: 'none',
        }}
        ref={contentRef}
        width="100%"
        height="100%"
        overflowY="initial"
        p="20px"
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
          />
        ))}
        <Info activeFile={activeFile} />
      </Flex>
      <Footer
        secondaryButton={<Button variant="file-secondary">Back</Button>}
        mainButton={<Button intent="primary">Select</Button>}
        value="pick a file"
      />
    </RebassCard>
  );
};

export default memo(FileSystemExplorer);
