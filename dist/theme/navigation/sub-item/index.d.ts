declare const variants: {
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
export default variants;
