/// <reference types="react" />
import { RadioProps } from './index';
export type RadioGroupOption<T = string> = RadioProps & {
    key: T;
    text: string;
};
export interface RadioGroupProps<T = string> extends Omit<RadioProps, 'label' | 'onChange' | 'options' | 'value'> {
    value: T;
    options: string[] | RadioGroupOption<T>[];
    onChange: (value: T) => void;
    /**
     * @deprecated [#1] since version 2.6.0 [#2].
     * [3#] will be deleted in version 3.0.
     * [#4] In case you need similar behavior add tooltip prop through options
     */
    tooltipMessages?: {
        [key: string]: string;
    };
    flexDirection?: 'row' | 'column' | null;
}
declare const RadioGroup: <T = string>(props: RadioGroupProps<T>) => JSX.Element;
export default RadioGroup;
