declare const variants: {
    'icon-primary': {
        bg: string;
        boxShadow: string;
        borderColor: string;
        ':hover': {
            borderColor: string;
            boxShadow: string;
        };
        ':active': {
            borderColor: string;
        };
        ':disabled': {
            borderColor: string;
        };
        '& path': {
            fill: string;
        };
    };
    'icon-ghost': {
        bg: string;
        borderColor: string;
        ':hover': {
            bg: string;
            borderColor: string;
        };
        ':active': {
            bg: string;
            borderColor: string;
        };
        ':disabled': {
            borderColor: string;
        };
        '& path': {
            fill: string;
        };
    };
    'icon-ghost-white': {
        bg: string;
        borderColor: string;
        ':hover': {
            bg: string;
            borderColor: string;
        };
        ':active': {
            bg: string;
            borderColor: string;
        };
        ':disabled': {
            bg: string;
            borderColor: string;
        };
        '& path': {
            fill: string;
        };
    };
};
export default variants;
