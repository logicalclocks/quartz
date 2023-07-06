export declare const modalTheme: {
    baseStyle?: {
        overlay: {
            bg: string;
            _dark: {
                bg: string;
            };
        };
        header: {
            fontWeight: string;
            pb: string;
        };
        dialog: {
            minHeight: string;
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
        footer: {
            bgColor: string;
            _dark: {
                bgColor: string;
            };
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
        '7xl': {
            dialog: {
                width: string;
                height: string;
                maxWidth: string;
                maxHeight: string;
            };
        };
    } | undefined;
    variants?: {
        drawer: {
            dialogContainer: {
                width: string;
            };
            dialog: {
                position: string;
                minWidth: string;
                top: string;
                right: string;
            };
            body: {
                p: number;
            };
        };
    } | undefined;
    defaultProps?: {
        size?: "7xl" | undefined;
        variant?: "drawer" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("footer" | "body" | "dialog" | "header" | "overlay" | "dialogContainer" | "closeButton")[];
};
