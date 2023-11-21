import { BoxProps } from 'rebass';
import { ActiveFile } from '../types';
export interface FileExplorerInfoProps extends Omit<BoxProps, 'css'> {
    children?: string[];
    activeFile?: ActiveFile | null;
    disableDownload: boolean;
    handleDownloadFile: (file: any) => void;
}
declare const FileExplorerInfo: ({ children, activeFile, disableDownload, handleDownloadFile, }: FileExplorerInfoProps) => import("react/jsx-runtime").JSX.Element;
export default FileExplorerInfo;
