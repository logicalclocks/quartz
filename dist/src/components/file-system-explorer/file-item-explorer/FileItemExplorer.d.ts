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
declare const FileItemExplorer: ({ isActive, setActiveFolder, setActiveFile, itemInfo, index, setColumns, mode, selected, isFileSelected, isValidExtension, setIsEmptyFolder, }: Props) => import("react/jsx-runtime").JSX.Element;
export default FileItemExplorer;
