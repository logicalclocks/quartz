/// <reference types="react" />
import { BoxProps } from 'rebass';
export interface QuartzFileLoaderProps extends Omit<BoxProps, 'css'> {
    id: any;
    fileName: string;
    isLoading: boolean;
    percentage: number;
    located: any;
    disabled?: boolean;
    children?: React.ReactNode | string;
    removeHandler: (id: any) => void;
}
declare const FileLoader: ({ id, fileName, isLoading, located, percentage, disabled, children, removeHandler, ...props }: QuartzFileLoaderProps) => import("react/jsx-runtime").JSX.Element;
export default FileLoader;
