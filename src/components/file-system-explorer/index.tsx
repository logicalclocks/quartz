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
import Column from './Column';

// Styles
import styles from './file-system-explorer.styles';
import FolderExplorer from './folder';

//Data
import { data } from './data';
import FileExplorer from './file';

export interface FileSystemExplorerProps
  extends Omit<RebassCardProps, 'css' | 'title'> {
  title?: string;
  link?: string;
  shortcutActions?: React.ReactNode;
  contentProps?: Omit<RebassCardProps, 'css' | 'children'>;
}

const FileSystemExplorer: FC<FileSystemExplorerProps> = ({
  title = 'Select a file',
  shortcutActions,
  contentProps,
  ...props
}: FileSystemExplorerProps) => {
  const contentRef = useRef<HTMLDivElement>();

  const [columns, setColumns] = useState([data]);

  console.log(columns);
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
            children={el}
            setColumns={setColumns}
            key={index}
            index={index}
          />
        ))}
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
