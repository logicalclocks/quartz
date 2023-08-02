import { SxStyleProp } from 'rebass';
export declare const boxStyles: {
    display: string;
    justifyContent: string;
    alignItems: string;
    '> div': {
        ml: string;
        position: string;
        paddingRight: string;
    };
    '> div:after': {
        display: string;
        content: string;
        width: string;
        height: string;
        position: string;
        right: string;
        top: string;
        color: string;
    };
    '> div:last-child:after': {
        display: string;
    };
};
export declare const boxButtonStyles: {
    display: string;
    justifyContent: string;
    alignItems: string;
    button: {
        ml: string;
    };
};
declare const _default: SxStyleProp;
export default _default;
