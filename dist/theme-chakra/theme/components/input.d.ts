export declare const inputTheme: {
    baseStyle?: {
        field: {
            color: string;
            outline: string;
            transition: string;
            fontFamily: string;
            fontWeight: string;
            fontSize: string;
            lineHeight: string;
            borderWidth: string;
            borderColor: string;
            _invalid: {
                borderColor: string;
            };
            _hover: {
                borderColor: string;
            };
            _focusWithin: {
                borderColor: string;
            };
            _disabled: {
                bg: string;
                borderColor: string;
            };
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("element" | "addon" | "field")[];
        }>;
    } | undefined;
    variants?: {
        primary: {
            field: {
                background: string;
                _hover: {
                    background: string;
                };
                _focus: {
                    bg: string;
                };
            };
        };
        white: {
            field: {
                background: string;
                _hover: {
                    background: string;
                };
                _focus: {
                    bg: string;
                };
                _focusWithin: {
                    borderColor: string;
                };
            };
        };
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: "white" | "primary" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("element" | "addon" | "field")[];
};
