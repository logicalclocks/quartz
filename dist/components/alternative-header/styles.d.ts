import { SxStyleProp } from 'rebass';
export declare const tab: (active: boolean) => {
    cursor: string;
    textAlign: string;
    px: string;
    mx: string;
    transition: string;
    ':after': {
        width: string;
        ml: string;
        content: string;
        display: string;
        borderBottom: string;
        borderBottomColor: string;
        transition: string;
    };
    ':hover:after': false | {
        borderBottom: string;
        borderBottomColor: string;
    };
};
export declare const wrapper: (topContent: boolean) => SxStyleProp;
export declare const base: {
    position: string;
    height: string;
    backgroundColor: string;
    width: string;
    bottom: string;
    zIndex: number;
};
