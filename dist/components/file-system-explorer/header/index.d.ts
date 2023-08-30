/// <reference types="react" />
import { BoxProps } from 'rebass';
export interface FileExplorerHeaderProps extends Omit<BoxProps, 'css' | 'action'> {
    shortcutActions?: React.ReactNode;
    title?: string;
}
declare const FileExplorerHeader: ({ title, shortcutActions, }: FileExplorerHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default FileExplorerHeader;
