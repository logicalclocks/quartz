import { FC } from 'react';
import { BoxProps } from 'rebass';
export interface EmptyFolderInfoProps extends Omit<BoxProps, 'css'> {
}
declare const EmptyFolderInfo: FC<EmptyFolderInfoProps>;
export default EmptyFolderInfo;
