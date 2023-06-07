declare const variants: {
    disabled: {
        variant: string;
        bg: string;
        borderColor: string;
        ':focus': {
            borderColor: string;
        };
    };
    primary: {
        color: string;
        bg: string;
        ':hover': {
            borderColor: string;
        };
        ':focus': {
            borderColor: string;
        };
        ':disabled': {
            bg: string;
            borderColor: string;
        };
        '::-webkit-input-placeholder': {
            color: string;
        };
        '::-moz-placeholder': {
            color: string;
        };
        ':-ms-input-placeholder': {
            color: string;
        };
        ':-moz-placeholder': {
            color: string;
        };
        '~ svg path': {
            fill: string;
        };
    };
    white: {
        variant: string;
        bg: string;
        ':focus': {
            borderColor: string;
        };
    };
};
export default variants;
