import EmbeddedTabs, { Controlled } from './EmbeddedTabs';

export type { Props as EmbeddedTabsItem } from './Tab';

type IEmbeddedTabs = typeof EmbeddedTabs;

interface EmbeddedTabsComponent extends IEmbeddedTabs {
  Controlled: typeof Controlled;
}

(EmbeddedTabs as EmbeddedTabsComponent).Controlled = Controlled;

export type {
  Props as EmbeddedTabsProps,
  ControlledProps as ControlledEmbeddedTabsProps,
} from './EmbeddedTabs';
export default EmbeddedTabs as EmbeddedTabsComponent;
