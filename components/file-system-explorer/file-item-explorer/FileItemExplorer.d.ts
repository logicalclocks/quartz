import { FC } from 'react';
import { FileExplorData } from '../types';
export interface Props {
    isActive: boolean;
    index: number;
    selected: boolean;
    mode?: string;
    itemInfo: FileExplorData;
    setActiveFile?: any;
    setColumns?: any;
    setActiveFolder?: any;
    isFileSelected?: any;
    isValidExtension: boolean;
    setIsEmptyFolder: (value: boolean) => void;
}
declare const FileItemExplorer: FC<Props>;
export default FileItemExplorer;
