declare const variants: {
    primary: {
        div: {
            bg: string;
            borderColor: string;
        };
        '> input:hover ~ div': {
            bg: string;
            borderColor: string;
        };
        '> input:focus,> input:checked ~ div': {
            borderColor: string;
        };
        '> input:disabled ~ div': {
            bg: string;
            borderColor: string;
        };
    };
    white: {
        div: {
            bg: string;
            borderColor: string;
        };
        '> input:hover ~ div': {
            bg: string;
            borderColor: string;
        };
        '> input:focus,> input:checked ~ div': {
            borderColor: string;
        };
        '> input:disabled ~ div': {
            bg: string;
            borderColor: string;
        };
    };
};
export default variants;
