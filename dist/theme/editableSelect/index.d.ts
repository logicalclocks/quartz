declare const variants: {
    container: {
        primary: {
            bg: string;
            borderColor: string;
            cursor: string;
            ':hover': {
                borderColor: string;
            };
            ':focus': {
                borderColor: string;
            };
        };
        white: {
            variant: string;
            bg: string;
        };
        disabled: {
            bg: string;
            borderColor: string;
            cursor: string;
        };
    };
    chip: {
        primary: {
            bg: string;
        };
        white: {
            bg: string;
        };
        disabled: {
            bg: string;
        };
    };
};
export default variants;
