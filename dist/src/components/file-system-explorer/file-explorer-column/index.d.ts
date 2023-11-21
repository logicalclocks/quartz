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
declare const FileExplorerColumn: ({ items, mode, index, setColumns, setActiveFile, isFileSelected, handleLoadMore, selectPathListValue, fileListValue, validExtensions, setIsEmptyFolder, }: FileExplorerColumnProps) => import("react/jsx-runtime").JSX.Element;
export default FileExplorerColumn;
