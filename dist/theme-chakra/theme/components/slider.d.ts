export declare const sliderTheme: {
    baseStyle?: {
        thumb: {
            bg: string;
            opacity: number;
            borderWidth: string;
            borderColor: string;
            _dark: {
                borderColor: string;
            };
        };
        filledTrack: {
            bg: string;
            _dark: {
                bg: string;
            };
        };
        track: {
            bg: string;
            _dark: {
                bg: string;
            };
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("mark" | "track" | "container" | "filledTrack" | "thumb")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("mark" | "track" | "container" | "filledTrack" | "thumb")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("mark" | "track" | "container" | "filledTrack" | "thumb")[];
};
