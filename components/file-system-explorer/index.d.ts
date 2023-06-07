import React from 'react';
import { CardProps as RebassCardProps } from 'rebass';
import { FileExplorData, FileExplorerMode } from './types';
export interface FileSystemExplorerProps extends Omit<RebassCardProps, 'css' | 'title' | 'data'> {
    title?: string;
    mode?: FileExplorerMode;
    data: FileExplorData[][];
    disableDownload?: boolean;
    validExtensions?: string[];
    rootDir?: string;
    handleLoadMore: (path: string, columnIndex: number) => void;
    shortcutActions?: React.ReactNode;
    contentProps?: Omit<RebassCardProps, 'css' | 'children'>;
    onClose: (key: any) => void;
    handleSelectFile?: (activeFile: any, isDownload: boolean) => void;
    handleDownloadFile: (file: any) => void;
}
declare const _default: React.NamedExoticComponent<FileSystemExplorerProps>;
export default _default;
