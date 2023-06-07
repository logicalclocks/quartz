import React, { FC } from 'react';
import { TextProps } from 'rebass';
import { Intents } from '../../intents';
export interface SelectInfoProps extends Omit<TextProps, 'css'> {
    intent?: Intents;
    children: React.ReactNode;
}
declare const SelectInfo: FC<SelectInfoProps>;
export default SelectInfo;
