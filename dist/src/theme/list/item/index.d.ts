declare const variants: {
    primary: {
        color: string;
        bg: string;
        fontWeight: string;
        fontFamily: string;
        fontSize: string;
        cursor: string;
        borderBottomColor: string;
        ':hover': {
            bg: string;
        };
    };
    active: {
        variant: string;
        bg: string;
    };
};
export default variants;
