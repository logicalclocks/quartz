import { BoxProps } from 'rebass';
import { Props as EmbeddedTabItem } from './Tab';
export interface Props extends Omit<BoxProps, 'css'> {
    tabs: EmbeddedTabItem[];
    initialTab?: number;
    onTabChange?: (tabIndex: number) => void;
}
declare const EmbeddedTabs: ({ onTabChange, initialTab, ...restProps }: Props) => import("react/jsx-runtime").JSX.Element;
export default EmbeddedTabs;
export interface ControlledProps extends Omit<Props, 'initialTab'> {
    activeTab: number;
}
export declare const Controlled: ({ tabs, onTabChange, sx, activeTab, ...boxProps }: ControlledProps) => import("react/jsx-runtime").JSX.Element;
