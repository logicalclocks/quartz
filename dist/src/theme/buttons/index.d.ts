declare const variants: {
    ghost: {
        color: string;
        bg: string;
        borderWidth: string;
        borderStyle: string;
        borderColor: string;
        ':hover': {
            bg: string;
        };
        ':focus': {
            outline: string;
            boxShadow: string;
        };
        ':active': {
            outline: string;
            bg: string;
            borderWidth: string;
            borderStyle: string;
            borderColor: string;
        };
        ':disabled': {
            bg: string;
            color: string;
        };
    };
    alert: {
        variant: string;
        color: string;
        borderColor: string;
        boxShadow: string;
        ':hover': {
            bg: string;
        };
        ':active': {
            borderColor: string;
        };
        ':focus': {
            outline: string;
            boxShadow: string;
        };
        ':disabled': {
            bg: string;
            color: string;
            borderColor: string;
            boxShadow: string;
        };
    };
    inline: {
        color: string;
        bg: string;
        textDecoration: string;
        ':hover': {
            cursor: string;
        };
        ':focus': {
            outline: string;
            boxShadow: string;
        };
        ':disabled': {
            color: string;
            textDecoration: string;
        };
    };
    primary: {
        color: string;
        bg: string;
        borderWidth: string;
        borderStyle: string;
        borderColor: string;
        boxShadow: string;
        ':hover': {
            bg: string;
            borderColor: string;
        };
        ':focus': {
            outline: string;
            boxShadow: string;
        };
        ':active': {
            outline: string;
            borderColor: string;
        };
        ':disabled': {
            bg: string;
            color: string;
            borderWidth: string;
            borderStyle: string;
            borderColor: string;
            boxShadow: string;
        };
    };
    secondary: {
        color: string;
        bg: string;
        borderWidth: string;
        borderStyle: string;
        borderColor: string;
        boxShadow: string;
        ':hover': {
            bg: string;
            borderColor: string;
        };
        ':focus': {
            outline: string;
            boxShadow: string;
        };
        ':active': {
            outline: string;
            borderColor: string;
        };
        ':disabled': {
            bg: string;
            color: string;
            borderColor: string;
            boxShadow: string;
        };
    };
};
export default variants;
