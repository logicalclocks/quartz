import { ActiveFile, FileExplorerMode } from '../types';
export interface Props {
    value?: string;
    activeFile?: ActiveFile;
    onClose: (key: any) => void;
    mode?: FileExplorerMode;
    handleSelectFile: (activeFile: any, isDownload: boolean) => void;
    fileListValue: Array<ActiveFile>[];
    rootDir: string;
}
declare const FooterFileExplorer: ({ value, activeFile, mode, onClose, handleSelectFile, fileListValue, rootDir, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default FooterFileExplorer;
