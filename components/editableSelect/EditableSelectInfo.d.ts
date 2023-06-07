import React, { FC } from 'react';
import { TextProps } from 'rebass';
import { Intents } from '../intents';
export interface EditableSelectInfoProps extends Omit<TextProps, 'css'> {
    intent?: Intents;
    children: React.ReactNode;
}
declare const EditableSelectInfo: FC<EditableSelectInfoProps>;
export default EditableSelectInfo;
