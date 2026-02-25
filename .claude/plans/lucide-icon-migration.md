# Icon Migration Plan: SVG to Lucide Icons

> **Status**: Planning Phase  
> **Created**: 2026-02-25  
> **Author**: Claude Code  
> **Branch**: migrate-icons-to-lucide  

## Overview

This plan outlines the migration strategy for transitioning from custom SVG icons to Lucide React icons while maintaining complete backward compatibility. The migration will modernize the icon system while reducing bundle size and maintenance overhead.

## Current System Analysis

### Architecture
- **Main Component**: `GetIcon` in `/src/components/icon/GetIcon.tsx`
- **Icon definitions**: `getIcon` function with switch statement in `/src/components/icon/list.tsx` (~2,299 lines)
- **Type system**: `IconName` enum with 110+ icon names
- **Usage pattern**: `<GetIcon icon={IconName.home} color="primary" size="lg" />`
- **Theming**: Integrated with Rebass theme system for colors and sizes

### Current Icon Inventory (110 icons)

```
airflow, arrow_down, arrow_down_filled, arrow_left, arrow_left_double, 
arrow_right, arrow_right_double, arrow_up, arrow_up_down, arrows_maximize, 
arrows_minimize, attachment, back, bin, birth, block, card, cloud, commit, 
contact, copy, correlation, cpu, creation, cross, data_validation, dataset, 
datasets, db, deployments, download, edit, error, expand, eye, favouriteEmpty, 
favouriteFilled, fg, file, filecode, fileData, fileImage, fileZip, folder, 
gitdiff, glass, gpu, grafana, history, home, hopworks, info, info_block, 
ingest, interrogation, job, jobs, jupyter, k8s, kafka, left, lines, list, 
loading, lock, minimise, models, more, more_zoom, new_stats, newChat, 
partition, pin_empty, pin_filled, play, plus, polygonDown, polygonUp, 
primary, publishChart, python, ram, refresh, refreshCircle, rightMenu, 
rokect, rstudio, sc, schema_update, secondary, server, settings, sharedFrom, 
sharedWith, square, stats, stderr, stdout, stop, streamed, table, target, 
td, tensorflow, terminal, time, upload, user_square, validate, warning
```

## Migration Strategy

### Phase 1: Setup and Infrastructure

#### 1.1 Install Dependencies
```bash
pnpm add lucide-react
```

#### 1.2 Create New Architecture Files
```
src/components/icon/
├── index.tsx                    # Main exports (unchanged)
├── GetIcon.tsx                  # Updated component  
├── lucide-mappings.ts           # NEW: Lucide icon mappings
├── custom-icons.tsx             # NEW: Remaining custom SVGs
├── list.tsx                     # Updated enum (kept for compatibility)
├── stories.tsx                  # Updated stories
└── GetIcon.spec.tsx             # Updated tests
```

### Phase 2: Icon Mapping Classification

#### 2.1 Direct Lucide Mappings (~70 icons)

**Navigation & Layout**
- `home` → `Home`
- `back` → `ArrowLeft`
- `arrow_left` → `ArrowLeft`
- `arrow_right` → `ArrowRight`
- `arrow_up` → `ArrowUp`
- `arrow_down` → `ArrowDown`
- `arrow_left_double` → `ChevronsLeft`
- `arrow_right_double` → `ChevronsRight`
- `arrows_maximize` → `Maximize`
- `arrows_minimize` → `Minimize`
- `expand` → `Expand`
- `minimise` → `Minimize`

**Actions & Controls**
- `plus` → `Plus`
- `edit` → `Edit`
- `copy` → `Copy`
- `download` → `Download`
- `upload` → `Upload`
- `refresh` → `RefreshCw`
- `play` → `Play`
- `stop` → `Square`
- `bin` → `Trash2`
- `cross` → `X`
- `more` → `MoreHorizontal`
- `attachment` → `Paperclip`

**Data & Storage**
- `db` → `Database`
- `folder` → `Folder`
- `file` → `File`
- `table` → `Table`
- `list` → `List`
- `server` → `Server`
- `cloud` → `Cloud`

**Interface Elements**
- `settings` → `Settings`
- `eye` → `Eye`
- `lock` → `Lock`
- `loading` → `Loader`
- `contact` → `UserCircle`
- `user_square` → `User`

**System & Hardware**
- `terminal` → `Terminal`
- `cpu` → `Cpu`
- `ram` → `HardDrive`
- `gpu` → `Zap` (closest equivalent)

**Status & Alerts**
- `warning` → `AlertTriangle`
- `error` → `AlertCircle`
- `info` → `Info`
- `validate` → `CheckCircle`
- `info_block` → `InfoIcon`

**Files & Documents**
- `fileData` → `FileText`
- `filecode` → `FileCode`
- `fileImage` → `Image`
- `fileZip` → `Archive`

**Additional Direct Maps**
- `time` → `Clock`
- `history` → `History`
- `stats` → `BarChart3`
- `card` → `CreditCard`
- `block` → `Square`
- `glass` → `Search`
- `target` → `Target`
- `square` → `Square`

#### 2.2 Custom SVG Icons (~40 icons)

**Platform-Specific Icons** (Must remain custom)
- `hopworks` - Hopsworks brand icon
- `jupyter` - Jupyter notebook icon
- `airflow` - Apache Airflow icon
- `tensorflow` - TensorFlow icon
- `rstudio` - RStudio icon
- `grafana` - Grafana icon
- `kafka` - Apache Kafka icon
- `k8s` - Kubernetes icon
- `python` - Python language icon

**Domain-Specific Icons** (Business logic specific)
- `fg` - Feature group
- `td` - Training dataset  
- `sc` - Stream connector
- `birth` - Data birth/lineage
- `schema_update` - Schema update operation
- `partition` - Data partition
- `streamed` - Streaming data
- `data_validation` - Data validation process
- `ingest` - Data ingestion
- `deployments` - Model deployments
- `models` - ML models
- `datasets` - Dataset collection

**Custom Variants** (Specific styling needs)
- `arrow_down_filled` - Filled arrow variant
- `arrow_up_down` - Bidirectional arrow
- `pin_filled` / `pin_empty` - Pin states
- `favouriteFilled` / `favouriteEmpty` - Favorite states
- `polygonUp` / `polygonDown` - Polygon indicators
- `refreshCircle` - Circular refresh variant

**Specialized Icons**
- `gitdiff` - Git diff visualization
- `publishChart` - Chart publishing
- `rokect` - Rocket (custom spelling)
- `rightMenu` - Right-side menu
- `newChat` - New chat conversation
- `stdout` / `stderr` - Console output types
- `correlation` - Data correlation
- `interrogation` - Data interrogation
- `creation` - Data creation
- `commit` - Git commit
- `more_zoom` - Zoom controls
- `new_stats` - Statistics
- `primary` / `secondary` - Index types
- `sharedFrom` / `sharedWith` - Sharing indicators
- `lines` - Line visualization
- `left` - Left alignment
- `glass` - Magnification

### Phase 3: Implementation Strategy

#### 3.1 Core Implementation Files

**lucide-mappings.ts**
```typescript
import { LucideIcon } from 'lucide-react';
import { IconName } from './list';
import { 
  Home, Terminal, Plus, Database, Settings, ArrowLeft, ArrowRight,
  ArrowUp, ArrowDown, ChevronsLeft, ChevronsRight, Maximize, Minimize,
  Edit, Copy, Download, Upload, RefreshCw, Play, Square, Trash2,
  Folder, File, Table, List, Server, Cloud, Eye, Lock, Loader,
  UserCircle, User, Cpu, HardDrive, Zap, AlertTriangle, AlertCircle,
  Info, CheckCircle, FileText, FileCode, Image, Archive, Clock,
  History, BarChart3, CreditCard, Search, Target, X, MoreHorizontal,
  Paperclip, Expand
  // ... import all needed icons
} from 'lucide-react';

export const LUCIDE_ICON_MAP: Record<string, LucideIcon> = {
  [IconName.home]: Home,
  [IconName.terminal]: Terminal,
  [IconName.plus]: Plus,
  [IconName.db]: Database,
  [IconName.settings]: Settings,
  [IconName.back]: ArrowLeft,
  [IconName.arrow_left]: ArrowLeft,
  [IconName.arrow_right]: ArrowRight,
  [IconName.arrow_up]: ArrowUp,
  [IconName.arrow_down]: ArrowDown,
  [IconName.arrow_left_double]: ChevronsLeft,
  [IconName.arrow_right_double]: ChevronsRight,
  [IconName.arrows_maximize]: Maximize,
  [IconName.arrows_minimize]: Minimize,
  [IconName.edit]: Edit,
  [IconName.copy]: Copy,
  [IconName.download]: Download,
  [IconName.upload]: Upload,
  [IconName.refresh]: RefreshCw,
  [IconName.play]: Play,
  [IconName.stop]: Square,
  [IconName.bin]: Trash2,
  [IconName.folder]: Folder,
  [IconName.file]: File,
  [IconName.table]: Table,
  [IconName.list]: List,
  [IconName.server]: Server,
  [IconName.cloud]: Cloud,
  [IconName.eye]: Eye,
  [IconName.lock]: Lock,
  [IconName.loading]: Loader,
  [IconName.contact]: UserCircle,
  [IconName.user_square]: User,
  [IconName.cpu]: Cpu,
  [IconName.ram]: HardDrive,
  [IconName.gpu]: Zap,
  [IconName.warning]: AlertTriangle,
  [IconName.error]: AlertCircle,
  [IconName.info]: Info,
  [IconName.validate]: CheckCircle,
  [IconName.fileData]: FileText,
  [IconName.filecode]: FileCode,
  [IconName.fileImage]: Image,
  [IconName.fileZip]: Archive,
  [IconName.time]: Clock,
  [IconName.history]: History,
  [IconName.stats]: BarChart3,
  [IconName.card]: CreditCard,
  [IconName.block]: Square,
  [IconName.glass]: Search,
  [IconName.target]: Target,
  [IconName.cross]: X,
  [IconName.more]: MoreHorizontal,
  [IconName.attachment]: Paperclip,
  [IconName.expand]: Expand,
  [IconName.minimise]: Minimize,
  [IconName.square]: Square,
  // ... additional mappings
};

export function isLucideIcon(iconName: IconName): boolean {
  return iconName in LUCIDE_ICON_MAP;
}

export function getLucideIcon(iconName: IconName): LucideIcon | null {
  return LUCIDE_ICON_MAP[iconName] || null;
}
```

**custom-icons.tsx**
```typescript
import React, { ReactElement } from 'react';
import { IconName } from './list';

export function getCustomIcon(
  iconName: IconName,
  color: string,
  size: string,
): ReactElement<any, any> | null {
  switch (iconName) {
    case IconName.hopworks:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          {/* Existing Hopsworks SVG paths */}
        </svg>
      );
    case IconName.jupyter:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          {/* Existing Jupyter SVG paths */}
        </svg>
      );
    // ... all remaining custom icons
    default:
      return null;
  }
}
```

**GetIcon.tsx (Updated)**
```typescript
import React from 'react';
import { path, prop, split } from 'ramda';
import { BoxProps, Flex } from 'rebass';
import { useTheme } from '../../theme/theme';
import { Color, IconSizes } from '../../theme/types';
import { IconName } from './list';
import { getLucideIcon, isLucideIcon } from './lucide-mappings';
import { getCustomIcon } from './custom-icons';

export interface GetIconProps extends Omit<BoxProps, 'css' | 'color'> {
  icon: IconName;
  color?: Color;
  size?: IconSizes;
}

const GetIcon = ({ icon, color = 'black', size = 'lg', ...props }: GetIconProps) => {
  const theme = useTheme();
  const themeColor = path<string>(split('.', color), theme.colors)!;
  const iconSize = prop(size, theme.iconSizes);

  // Try Lucide first, fall back to custom
  const LucideIcon = getLucideIcon(icon);
  
  const iconElement = LucideIcon ? (
    <LucideIcon color={themeColor} size={iconSize} />
  ) : (
    getCustomIcon(icon, themeColor, iconSize)
  );

  return (
    <Flex
      {...props}
      sx={{
        minWidth: iconSize,
        height: 'auto',
        svg: { width: iconSize, height: iconSize },
        ...props.sx,
      }}
    >
      {iconElement}
    </Flex>
  );
};

export default GetIcon;
```

### Phase 4: Testing & Validation

#### 4.1 Visual Regression Testing
```typescript
// GetIcon.spec.tsx additions
test('Lucide icons render correctly', async ({ mount }) => {
  const lucideIcons: IconName[] = [
    IconName.home, IconName.plus, IconName.settings, 
    IconName.terminal, IconName.db
  ];
  
  for (const icon of lucideIcons) {
    const component = await mount(<GetIcon icon={icon} />);
    await expect(component).toHaveScreenshot(`${icon}-lucide.png`);
  }
});

test('Custom icons still work', async ({ mount }) => {
  const customIcons: IconName[] = [
    IconName.hopworks, IconName.jupyter, IconName.airflow
  ];
  
  for (const icon of customIcons) {
    const component = await mount(<GetIcon icon={icon} />);
    await expect(component).toBeVisible();
    await expect(component.locator('svg')).toBeVisible();
  }
});
```

#### 4.2 Bundle Size Analysis
- Compare bundle size before/after migration
- Verify tree-shaking is working correctly
- Document size reduction metrics

#### 4.3 Visual Comparison
- Screenshot-based comparison of all migrated icons
- Ensure visual consistency with existing designs
- Document any intentional design changes

### Phase 5: Migration Timeline

**Week 1: Infrastructure Setup**
- [ ] Install lucide-react dependency
- [ ] Create lucide-mappings.ts with all mappings
- [ ] Create custom-icons.tsx with remaining SVGs
- [ ] Update GetIcon.tsx component

**Week 2: Implementation & Integration**
- [ ] Migrate ~70 icons to Lucide mappings
- [ ] Extract ~40 custom icons to separate file
- [ ] Update list.tsx enum (maintain compatibility)
- [ ] Update Storybook stories

**Week 3: Testing & Validation**
- [ ] Comprehensive Playwright test updates
- [ ] Visual regression testing
- [ ] Bundle size analysis
- [ ] Performance benchmarking

**Week 4: Documentation & Release**
- [ ] Update component documentation
- [ ] Create migration changelog
- [ ] Final testing and validation
- [ ] Merge to dev branch

## Benefits & Impact

### Positive Impacts
1. **Reduced Bundle Size**: Tree-shakable Lucide icons vs large monolithic SVG file
2. **Consistency**: Professional, standardized icon design language
3. **Maintenance**: 70% less custom SVG maintenance
4. **Developer Experience**: Better TypeScript support and documentation
5. **Future-Proof**: Active community-maintained library with regular updates

### Risk Mitigation
1. **Visual Differences**: Comprehensive screenshot testing for all icons
2. **Breaking Changes**: Maintain 100% API compatibility
3. **Performance**: Monitor bundle size and runtime performance
4. **Fallback System**: Custom SVGs remain available for unmapped icons

### Success Metrics
- **Bundle size reduction**: Target 20-30% reduction in icon bundle size
- **Zero breaking changes**: All existing `<GetIcon>` usage continues to work
- **Improved consistency**: Visual audit shows better icon alignment
- **Reduced maintenance**: 70 fewer custom SVGs to maintain

## Future Considerations

1. **Additional Migrations**: Consider migrating more icons as Lucide library expands
2. **Icon Audit**: Periodic review of custom icons for potential Lucide replacements
3. **Design System Alignment**: Ensure icon choices align with broader design system evolution
4. **Performance Monitoring**: Track bundle size and runtime performance over time

---

**Next Steps**: Begin Phase 1 implementation with dependency installation and infrastructure setup.