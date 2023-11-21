declare const _default: {
    span: {
        display: string;
        alignItems: string;
        justifyContent: string;
        width: string;
        height: string;
        borderWidth: string;
        borderStyle: string;
        borderRadius: string;
        cursor: string;
        transition: string;
        boxSizing: string;
        ':after': {
            width: string;
            height: string;
            borderRadius: string;
            display: string;
            content: string;
        };
    };
    '> input': {
        position: string;
        zIndex: number;
        opacity: number;
    };
    '> input:checked ~ span:after': {
        display: string;
    };
    '> input:disabled ~ span': {
        borderWidth: string;
        borderStyle: string;
        cursor: string;
    };
};
export default _default;
