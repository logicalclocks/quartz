declare const variants: {
    default: {
        color: string;
        bg: string;
        cursor: string;
        path: {
            fill: string;
        };
        ':hover': {
            bg: string;
            color: string;
            path: {
                fill: string;
            };
        };
        ':active': {
            bg: string;
            color: string;
            path: {
                fill: string;
            };
        };
        '~ div': {
            borderTopColor: string;
        };
    };
    active: {
        bg: string;
        color: string;
        path: {
            fill: string;
        };
        cursor: string;
        '~ div': {
            borderTopColor: string;
        };
    };
    disabled: {
        variant: string;
        cursor: string;
        ':hover': {};
        ':active': {};
    };
};
export default variants;
