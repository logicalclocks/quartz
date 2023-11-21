import { SxStyleProp } from 'rebass';
export declare const containerStyles: {
    overflowX: string;
    maxHeight: string;
    borderWidth: string;
    borderColor: string;
    borderTopColor: string;
    borderStyle: string;
    marginRight: string;
    width: string;
};
export declare const tableStyles: {
    borderSpacing: string;
    borderCollapse: string;
    backgroundColor: string;
    borderWidth: string;
    textAlign: string;
};
export declare const theadStyles: SxStyleProp;
export declare const trowStyles: {
    color: string;
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
    '&:hover': {
        backgroundColor: string;
        'td.static-column': {
            backgroundColor: string;
            whiteSpace: string;
        };
    };
    '&:last-child td': {
        borderBottomColor: string;
    };
    td: {
        padding: string;
        borderWidth: string;
        borderStyle: string;
        borderColor: string;
        textOverflow: string;
        whiteSpace: string;
        '&:first-of-type': {
            maxWidth: string;
            minWidth: string;
            zIndex: number;
            textAlign: string;
            borderWidth: string;
            borderColor: string;
            borderBottomColor: string;
            borderStyle: string;
            left: string;
            position: string;
            backgroundColor: string;
            display: string;
        };
        'td:last-child': {
            width: string;
        };
        '&:hover': {
            backgroundColor: string;
        };
        '&.hover-column:not(:hover)': {
            backgroundColor: string;
        };
        '&:last-child': {
            borderRightStyle: string;
            borderRightWidth: string;
            borderRightColor: string;
        };
        '&.static-column': {
            backgroundColor: string;
            position: string;
            left: string;
            borderRightColor: string;
            borderLeftColor: string;
            borderRightWidth: string;
        };
    };
};
