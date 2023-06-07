import React from 'react';
import { FlexProps } from 'rebass';
import { LanguageName } from '@uiw/codemirror-extensions-langs';
import { PopupProps } from '../popup';
export interface CodeProps extends Omit<FlexProps, 'css' | 'title'> {
    title?: React.ReactElement | string;
    content: string;
    language?: LanguageName;
    copyButton?: boolean;
    downloadButton?: boolean;
    downloadCallback?: () => void;
    wrapLongLines?: boolean;
    showLineNumbers?: boolean;
    copyCallback?: () => Promise<boolean>;
    expandable?: boolean;
    popupProps?: Omit<PopupProps, 'children' | 'isOpen' | 'onClose'>;
}
export declare const defaultPopupProps: {
    size: string;
};
declare const Code: ({ content, language, copyButton, downloadButton, expandable, popupProps, ...props }: CodeProps) => React.JSX.Element;
export default Code;
