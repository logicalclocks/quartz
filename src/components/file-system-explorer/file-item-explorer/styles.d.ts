export declare const fileExplorerStyle: (isActive: boolean, selected: boolean, mode: string, isValidExtension?: boolean) => {
    color?: string | undefined;
    position: string;
    backgroundColor: string;
    width: string;
    textOverflow: string;
    whiteSpace: string;
    overflow: string;
    ':focus': {
        outlineWidth: number;
        backgroundColor?: string | undefined;
    };
    'div >label': {
        overflow: string;
        '>input': {
            minWidth: string;
            minHeight: string;
        };
        span: {
            minWidth: string;
        };
        div: {
            width: string;
            textOverflow: string;
            whiteSpace: string;
            overflow: string;
            fontFamily: string;
            fontWeight: string;
            fontSize: string;
        };
    };
    '> label': {
        m: number;
    };
    p: number;
    cursor: string;
    borderRadius: number;
    borderColor: string;
    borderStyle: string;
    borderWidth: string;
    boxSizing: string;
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
};
