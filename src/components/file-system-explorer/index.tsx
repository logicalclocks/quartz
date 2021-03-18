import React, { FC, memo, useRef } from 'react';
import {
  Box,
  Flex,
  Card as RebassCard,
  CardProps as RebassCardProps,
} from 'rebass';
import Footer from './footer';

// Styles
import styles, {
  fileExplorerHeaderStyles,
} from './file-system-explorer.styles';
import Button from '../button';

export interface FileSystemExplorerProps
  extends Omit<RebassCardProps, 'css' | 'title'> {
  title?: React.ReactElement | string;
  link?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  contentProps?: Omit<RebassCardProps, 'css' | 'children'>;
}

const FileSystemExplorer: FC<FileSystemExplorerProps> = ({
  title,
  actions,
  children,
  maxHeight,
  contentProps,
  ...props
}: FileSystemExplorerProps) => {
  const contentRef = useRef<HTMLDivElement>();

  const isScrollable =
    contentRef.current?.scrollHeight &&
    maxHeight &&
    contentRef.current?.scrollHeight >
      +(maxHeight as string).slice(0, (maxHeight as string).indexOf('px')) - 64;

  return (
    <RebassCard {...props} maxHeight={maxHeight} sx={styles}>
      {/* Header */}
      <Box sx={fileExplorerHeaderStyles}>
        {title && (
          <Flex alignItems="center" as="h4">
            {title}
          </Flex>
        )}
        {actions && <div>{actions}</div>}
      </Box>
      {/* Content */}
      {!!children && (
        <Box
          sx={{
            boxShadow: isScrollable ? 'cardInsetShadow' : 'none',
          }}
          ref={contentRef}
          width="100%"
          maxHeight={maxHeight}
          height="100%"
          overflowY={isScrollable ? 'auto' : 'initial'}
          p="20px"
          {...contentProps}
        >
          {children}
        </Box>
      )}
      {/* Footer */}
      <Footer
        mainButton={<Button intent="primary">Back</Button>}
        secondaryButton={<Button intent="secondary">Select</Button>}
        value="pick a file"
      />
    </RebassCard>
  );
};

export default memo(FileSystemExplorer);
