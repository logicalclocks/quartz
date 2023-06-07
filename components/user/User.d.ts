import React from 'react';
export interface Props {
    /** User's first name */
    firstName: string;
    /**  User's last name */
    lastName?: string;
    /** Whether tooltip should be shown */
    isTooltipActive?: boolean;
    /** Appears in the tooltip */
    title?: string;
    /** Allows including text into user badge */
    secondaryText?: string;
}
export declare const User: ({ firstName, lastName, title, secondaryText, isTooltipActive, }: Props) => React.JSX.Element;
