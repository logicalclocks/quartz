/// <reference types="react" />
type ContextProps = {
    bordered: boolean;
    padded: boolean;
    hoverable: boolean;
    rowHeight: string;
    standalone: boolean;
    middleColumn?: number;
};
declare const HolyTableContext: import("react").Context<ContextProps>;
export default HolyTableContext;
