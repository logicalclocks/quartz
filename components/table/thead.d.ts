import React from 'react';
export interface TheadProps {
    column: string;
    headerRender: (isOpen: boolean) => React.ReactElement<any>;
    className?: string;
    actions: Array<{
        label: string;
        handler: (column: string) => void;
    }>;
}
declare const _default: React.NamedExoticComponent<TheadProps>;
export default _default;
