/// <reference types="react" />
import { ButtonProps } from 'rebass';
import { IconName } from '../icon';
type Indicator = 'vertical' | 'horizontal';
export interface Props extends Omit<ButtonProps, 'css'> {
    newTab?: boolean;
    isActive?: boolean;
    icon?: IconName;
    indicator?: Indicator;
    mode?: 'default' | 'highlight';
}
declare const _default: import("react").MemoExoticComponent<({ icon, href, children, isActive, indicator, sx, newTab, mode, ...props }: Props) => import("react/jsx-runtime").JSX.Element>;
export default _default;
