export declare const menuTheme: {
    baseStyle?: {
        list: {
            py: string;
            borderRadius: string;
            bg: string;
            _dark: {
                bg: string;
            };
        };
        item: {
            fontSize: string;
            fontWeight: string;
            color: string;
            bg: string;
            _dark: {
                color: string;
                bg: string;
            };
            _hover: {
                bg: string;
                _dark: {
                    bg: string;
                };
            };
            _focus: {
                bg: string;
                _dark: {
                    bg: string;
                };
            };
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("list" | "button" | "item" | "command" | "groupTitle" | "divider")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("list" | "button" | "item" | "command" | "groupTitle" | "divider")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("list" | "button" | "item" | "command" | "groupTitle" | "divider")[];
};
