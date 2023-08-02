import { SxStyleProp } from 'rebass';
import { ITheme } from '../../theme/types';
import { Intents } from '../intents';
export declare const listStyles: (parentHeight: number, appendToBody: boolean) => SxStyleProp;
export declare const bottomActionStyles: {
    p: string;
    borderTopWidth: string;
    borderTopStyle: string;
    borderTopColor: string;
    ':hover': {
        bg: string;
    };
};
export declare const valueStyles: {
    flexGrow: number;
    overflow: string;
    whiteSpace: string;
    textOverflow: string;
};
export declare const deletabledStyles: {
    borderStyle: string;
    borderWidth: string;
    borderColor: string;
    cursor: string;
    transition: string;
    ':hover': {
        borderColor: string;
    };
    svg: {
        width: string;
        height: string;
    };
};
export declare const getLabelStyles: (intent: Intents, deletabled?: boolean) => {
    svg?: {
        minWidth: string;
    } | undefined;
    position: string;
    borderColor: ({ inputIntents }: ITheme) => string;
    outline: string;
    height: string;
    display: string;
    alignItems: string;
    flexGrow: number;
    borderWidth: string;
    borderStyle: string;
    pl: string;
    pr: string;
    transition: string;
};
