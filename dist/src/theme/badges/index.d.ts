declare const variants: {
    keyValue: {
        gray: {
            bg: string;
            borderColor: string;
            '> span': {
                '&:last-of-type': {
                    bg: string;
                };
            };
        };
        white: {
            bg: string;
            borderColor: string;
            '> span': {
                '&:last-of-type': {
                    bg: string;
                };
            };
        };
    };
    primary: {
        default: {
            '> span': {
                color: string;
            };
            bg: string;
        };
        fail: {
            '> span': {
                color: string;
            };
            bg: string;
        };
        label: {
            '> span': {
                color: string;
            };
            bg: string;
        };
        light: {
            '> span': {
                color: string;
            };
            bg: string;
        };
        success: {
            '> span': {
                color: string;
            };
            bg: string;
        };
        warning: {
            '> span': {
                color: string;
            };
            bg: string;
        };
        notice: {
            '> span': {
                color: string;
            };
            bg: string;
        };
    };
    bordered: {
        default: {
            '> span': {
                color: string;
            };
            bg: string;
            border: string;
            borderColor: string;
        };
        fail: {
            '> span': {
                color: string;
            };
            bg: string;
            border: string;
            borderColor: string;
        };
        label: {
            '> span': {
                color: string;
            };
            bg: string;
            border: string;
            borderColor: string;
        };
        light: {
            '> span': {
                color: string;
            };
            bg: string;
            border: string;
            borderColor: string;
        };
        success: {
            '> span': {
                color: string;
            };
            bg: string;
            border: string;
            borderColor: string;
        };
        warning: {
            '> span': {
                color: string;
            };
            bg: string;
            border: string;
            borderColor: string;
        };
        notice: {
            '> span': {
                color: string;
            };
            bg: string;
            border: string;
            borderColor: string;
        };
    };
    dot: {
        black: {
            bg: string;
            color: string;
        };
        green: {
            bg: string;
            color: string;
        };
    };
    blink: {
        red: {
            bg: string;
        };
        green: {
            bg: string;
        };
        gray: {
            bg: string;
        };
    };
};
export default variants;
