export declare const tagTheme: {
    baseStyle?: {
        container: {
            bg: string;
            borderRadius: string;
            px: string;
            fontSize: string;
            fontWeight: number;
        };
        closeButton: {
            mx: string;
            '> svg': {
                width: string;
                height: string;
            };
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "label" | "closeButton")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "label" | "closeButton")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("container" | "label" | "closeButton")[];
};
