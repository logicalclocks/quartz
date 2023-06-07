import React from 'react';
import { ButtonProps } from 'rebass';
import { IconName } from '../icon';
type Intent = 'primary' | 'secondary' | 'ghost' | 'inline' | 'alert';
export interface Props extends Omit<ButtonProps, 'css'> {
    children: React.ReactNode;
    /** Intent of a button, e.g. `ghost` to make it borderless */
    intent?: Intent;
    /** Icon to render left to text, an entry from `IconName`, e.g. `IconName.glass` for search */
    icon?: IconName;
    /** If you want it to be a link. Note: for `external` `_blank` targets the `rel=noreferrer noopener` is applied */
    href?: string;
    /** Whether it's an external link, i.e. outside the project */
    external?: boolean;
    /** When `true`, a spinner is hown */
    isLoading?: boolean;
    /** When `true`, and `isLoading`, doesn't show button text, only spinner */
    loadingOnly?: boolean;
    disabled?: boolean;
}
export declare const Button: ({ icon, children, href, target, sx, external, disabled, intent, loadingOnly, isLoading, type, ...props }: Props) => React.JSX.Element;
export default Button;
