import { FC } from 'react';
import { TabState } from './types';
export declare enum ValidateOpts {
    valid = "valid",
    error = "error",
    untouched = "untouched"
}
export interface TabItem {
    id: string;
    title: string;
    optional?: boolean;
    submit?: boolean;
    state?: TabState;
    validationFn: () => ValidateOpts;
}
export interface FormTabsProps {
    tabs: TabItem[];
    SubmitButton: FC<any>;
    initialTab?: string;
    onTabChange: (tabId: string) => void;
    hasScrollOnScreen?: boolean;
}
declare const FormTabs: FC<FormTabsProps>;
export default FormTabs;
