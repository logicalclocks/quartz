export declare const menuTheme: {
    baseStyle?: {
        list: {
            py: string;
            borderRadius: string;
            bg: string;
        };
        item: {
            fontSize: string;
            fontWeight: string;
            color: string;
            bg: string;
            _hover: {
                bg: string;
                color: string;
                _dark: {
                    bg: string;
                };
            };
            _focus: {
                bg: string;
                color: string;
                _dark: {
                    bg: string;
                };
            };
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("list" | "button" | "icon" | "item" | "command" | "divider" | "groupTitle")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("list" | "button" | "icon" | "item" | "command" | "divider" | "groupTitle")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("list" | "button" | "icon" | "item" | "command" | "divider" | "groupTitle")[];
};
