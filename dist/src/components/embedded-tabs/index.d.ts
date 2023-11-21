import EmbeddedTabs, { Controlled } from './EmbeddedTabs';
export type { Props as EmbeddedTabsItem } from './Tab';
type IEmbeddedTabs = typeof EmbeddedTabs;
interface EmbeddedTabsComponent extends IEmbeddedTabs {
    Controlled: typeof Controlled;
}
export type { Props as EmbeddedTabsProps, ControlledProps as ControlledEmbeddedTabsProps, } from './EmbeddedTabs';
declare const _default: EmbeddedTabsComponent;
export default _default;
