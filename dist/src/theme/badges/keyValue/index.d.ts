declare const variants: {
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
export default variants;
