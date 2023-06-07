import React, { FC } from 'react';
import { TextProps } from 'rebass';
import { Intents } from '../intents';
export interface InputInfoProps extends Omit<TextProps, 'css'> {
    intent?: Intents;
    children: React.ReactNode;
}
declare const InputInfo: FC<InputInfoProps>;
export default InputInfo;
