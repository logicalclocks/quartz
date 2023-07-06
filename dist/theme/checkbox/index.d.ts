declare const variants: {
    primary: {
        span: {
            bg: string;
            borderColor: string;
            ':after': {
                bg: string;
            };
        };
        '> input:hover ~ span': {
            bg: string;
        };
        '> input:disabled ~ span': {
            borderColor: string;
            bg: string;
        };
    };
};
export default variants;
