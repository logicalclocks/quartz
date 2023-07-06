import { SxStyleProp } from 'rebass';
export declare const contentStyles: (isOpen: boolean, height: number) => {
    bg: string;
    overflow: string;
    maxHeight: string | number;
    transition: string;
};
export declare const containerStyles: {
    borderWidth: string;
    borderStyle: string;
    borderColor: string;
};
declare const _default: (isOpen: boolean) => SxStyleProp;
export default _default;
