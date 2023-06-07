import { SystemStyleObject } from '@styled-system/css';
import { Intents } from '../intents';
declare const getStyles: (intent: Intents, isTextArea: boolean) => SystemStyleObject;
export declare const getIconStyle: {
    left: string;
    position: string;
    top: string;
    fontSize: string;
};
export default getStyles;
