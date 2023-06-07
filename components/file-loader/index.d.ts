import React, { FC } from 'react';
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
declare const FileLoader: FC<QuartzFileLoaderProps>;
export default FileLoader;
