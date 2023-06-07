import { FC } from 'react';
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
declare const FooterFileExplorer: FC<Props>;
export default FooterFileExplorer;
