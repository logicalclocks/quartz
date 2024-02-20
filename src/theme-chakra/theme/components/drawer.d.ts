export declare const drawerTheme: {
    baseStyle?: {
        overlay: {
            bg: string;
            _dark: {
                bg: string;
            };
        };
        dialog: {
            top: string;
            right: string;
            bottom: string;
            borderTopStyle: string;
            borderTopWidth: string;
            borderColor: string;
            borderRadius: number;
            bg: string;
            _dark: {
                bg: string;
                borderColor: string;
            };
        };
        body: {
            p: number;
        };
        header: {
            fontWeight: string;
            p: number;
        };
        footer: {
            p: number;
        };
        closeButton: {
            borderRadius: string;
            ':focus-visible': {
                boxShadow: string;
                _dark: {
                    boxShadow: string;
                };
            };
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("overlay" | "header" | "dialogContainer" | "dialog" | "closeButton" | "body" | "footer")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("overlay" | "header" | "dialogContainer" | "dialog" | "closeButton" | "body" | "footer")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("overlay" | "header" | "dialogContainer" | "dialog" | "closeButton" | "body" | "footer")[];
};