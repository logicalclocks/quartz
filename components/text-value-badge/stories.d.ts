import { StoryObj } from '@storybook/react';
import React from 'react';
import { TextValueBadge } from './TextValueBadge';
declare const _default: {
    title: string;
    component: ({ text, value, variant, sx, ...props }: import("./TextValueBadge").Props) => React.JSX.Element;
    args: {
        text: string;
        value: string;
    };
};
export default _default;
export declare const Default: StoryObj<typeof TextValueBadge>;
