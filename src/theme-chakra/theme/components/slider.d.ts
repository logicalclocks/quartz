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
            keys: ("container" | "track" | "filledTrack" | "thumb" | "mark")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "track" | "filledTrack" | "thumb" | "mark")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("container" | "track" | "filledTrack" | "thumb" | "mark")[];
};
