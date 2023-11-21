declare const variants: {
    container: {
        bg: string;
        boxShadow: string;
    };
    item: {
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
};
export default variants;
