/// <reference types="react" />
export interface TheadProps {
    column: string;
    headerRender: (isOpen: boolean) => React.ReactElement<any>;
    className?: string;
    actions: Array<{
        label: string;
        handler: (column: string) => void;
    }>;
}
declare const _default: import("react").MemoExoticComponent<({ column, className, headerRender, actions }: TheadProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
