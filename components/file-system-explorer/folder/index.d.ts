import { FC } from 'react';
export interface QuartzFileExplorerFolderProps {
    name: string;
    id: number;
    isActive?: boolean;
    selected?: boolean;
    index: number;
    mode?: string;
    setColumns?: any;
    isHasChildren?: boolean;
    setActiveFile: any;
    setActiveFolder: any;
    activeFolder: number;
    selectPathListValue: any;
    handleLoadMore: (path: string, columnIndex: number) => void;
    itemInfo: any;
}
declare const FolderExplorer: FC<QuartzFileExplorerFolderProps>;
export default FolderExplorer;
