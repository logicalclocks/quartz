import { SxStyleProp } from 'rebass';
import { Intents } from '../intents';
export declare const chipIconStyles: {
    marginLeft: string;
    marginTop: string;
    cursor: string;
};
export declare const chipStyles: {
    borderRadius: string;
    whiteSpace: string;
    cursor: string;
};
export declare const getContainerStyles: (intent: Intents) => SxStyleProp;
export declare const inputStyles: () => SxStyleProp;
export declare const listStyles: (parentHeight: number, appendToBody: boolean) => SxStyleProp;
export declare const messageStyles: {
    p: string;
    borderTopWidth: string;
    borderTopStyle: string;
    borderTopColor: string;
    cursor: string;
};
