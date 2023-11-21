declare const variants: {
    primary: {
        bg: string;
        label: {
            color: string;
            bg: string;
            cursor: string;
            ':hover': {
                borderColor: string;
            };
            ':focus-within': {
                borderColor: string;
            };
        };
        '& > div > button:disabled > svg > path': {
            fill: string;
        };
    };
    white: {
        variant: string;
        label: {
            color: string;
            bg: string;
            cursor: string;
            ':hover': {
                borderColor: string;
            };
            ':focus-within': {
                borderColor: string;
            };
        };
    };
    disabled: {
        variant: string;
        label: {
            color: string;
            bg: string;
            cursor: string;
            borderColor: string;
        };
        '& > div > button:disabled > svg > path': {
            fill: string;
        };
    };
};
export default variants;
