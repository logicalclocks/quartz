declare const variants: {
    container: {
        bg: string;
        borderRightColor: string;
        '> div': {
            color: string;
            path: {
                fill: string;
            };
        };
    };
    item: {
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
    subItem: {
        default: {
            variant: string;
            borderLeftWidth: string;
            borderLeftStyle: string;
            borderLeftColor: string;
        };
        active: {
            variant: string;
            color: string;
            cursor: string;
            borderLeftColor: string;
            ':hover': {};
        };
        disabled: {
            variant: string;
            cursor: string;
            ':hover': {};
            ':active': {};
        };
    };
    category: {
        bg: string;
        borderLeftColor: string;
        '> div:first-of-type': {
            color: string;
            svg: {
                mr: string;
                path: {
                    fill: string;
                };
            };
        };
        '~ div': {
            borderTopColor: string;
        };
    };
};
export default variants;
