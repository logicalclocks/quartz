import React, { FC, memo, useRef } from 'react';
import { Box, Card as RebassCard, CardProps as RebassCardProps } from 'rebass';

import Footer from './footer';
import Header from './header';
import Button from '../button';
import FileExplorer from './file';

// Styles
import styles from './file-system-explorer.styles';

export interface FileSystemExplorerProps
  extends Omit<RebassCardProps, 'css' | 'title'> {
  title?: string;
  link?: string;
  shortcutActions?: React.ReactNode;
  children?: React.ReactNode;
  contentProps?: Omit<RebassCardProps, 'css' | 'children'>;
}

const FileSystemExplorer: FC<FileSystemExplorerProps> = ({
  title = 'Select a file',
  shortcutActions,
  children,
  maxHeight,
  contentProps,
  ...props
}: FileSystemExplorerProps) => {
  const contentRef = useRef<HTMLDivElement>();

  // const isScrollable =
  //   contentRef.current?.scrollHeight &&
  //   maxHeight &&
  //   contentRef.current?.scrollHeight >
  //     +(maxHeight as string).slice(0, (maxHeight as string).indexOf('px')) - 64;

  return (
    <RebassCard {...props} maxHeight={maxHeight} sx={styles}>
      <Header shortcutActions={shortcutActions} title={title} />
      {!!children && (
        <Box
          sx={{
            boxShadow: 'none',
          }}
          ref={contentRef}
          width="100%"
          maxHeight={maxHeight}
          height="100%"
          overflowY="initial"
          p="20px"
          {...contentProps}
        >
          <FileExplorer name="File1" isActive={false} selected={false} />
          <FileExplorer name="File2" isActive={false} selected={false} />
          <FileExplorer name="File3" isActive={false} selected={false} />
          <FileExplorer name="File4" isActive={false} selected={false} />
          <FileExplorer name="File5" isActive={false} selected={false} />
          {children}
        </Box>
      )}
      {/* Footer */}
      <Footer
        secondaryButton={<Button variant="file-secondary">Back</Button>}
        mainButton={<Button intent="primary">Select</Button>}
        value="pick a file"
      />
    </RebassCard>
  );
};

export default memo(FileSystemExplorer);
