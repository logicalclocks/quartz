import { FC } from 'react';
import { BoxProps } from 'rebass';
import { FileExplorData, FileExplorerMode } from '../types';
export interface FileExplorerColumnProps extends Omit<BoxProps, 'css' | 'action'> {
    items: FileExplorData[];
    setColumns?: any;
    mode?: FileExplorerMode;
    index: number;
    setActiveFile?: object;
    handleLoadMore: (path: string, columnIndex: number) => void;
    isFileSelected?: any;
    selectPathListValue?: any;
    fileListValue?: any[];
    validExtensions?: string[];
    setIsEmptyFolder: (value: boolean) => void;
}
declare const FileExplorerColumn: FC<FileExplorerColumnProps>;
export default FileExplorerColumn;
