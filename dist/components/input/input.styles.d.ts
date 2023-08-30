import { SxStyleProp } from 'rebass';
import { Intents } from '../intents';
declare const getStyles: (intent: Intents, isTextArea: boolean) => SxStyleProp;
export declare const getIconStyle: {
    left: string;
    position: string;
    top: string;
    fontSize: string;
};
export default getStyles;
