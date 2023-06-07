import React from 'react';
import { UserProps } from './index';
declare const _default: {
    title: string;
    component: ({ firstName, lastName, title, secondaryText, isTooltipActive, }: UserProps) => React.JSX.Element;
    args: {
        firstName: string;
        lastName: string;
    };
};
export default _default;
export declare const Default: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, UserProps>;
export declare const WithSecondaryText: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, UserProps>;
export declare const WithTitle: () => React.JSX.Element;
