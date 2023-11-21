declare const variants: {
    drawerSection: {
        bg: string;
        ':not(:last-of-type)': {
            borderBottomColor: string;
            borderBottomWidth: string;
            borderBottomStyle: string;
        };
    };
    primary: {
        bg: string;
        borderTopColor: string;
        boxShadow: string;
    };
};
export default variants;
