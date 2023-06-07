import React, { FC } from 'react';
import { BoxProps } from 'rebass';
export interface FileExplorerHeaderProps extends Omit<BoxProps, 'css' | 'action'> {
    shortcutActions?: React.ReactNode;
    title?: string;
}
declare const FileExplorerHeader: FC<FileExplorerHeaderProps>;
export default FileExplorerHeader;
