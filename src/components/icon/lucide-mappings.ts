// Import Lucide icons for the mappings
import {
  LucideIcon,
  Home,
  Terminal,
  Plus,
  Database,
  Settings,
  ArrowBigLeft,
  ArrowLeft,
  ChevronsLeft,
  ChevronsRight,
  Maximize,
  Minimize,
  Edit,
  Copy,
  Download,
  Upload,
  RefreshCw,
  Play,
  Square,
  Trash2,
  Folder,
  File,
  Table,
  List,
  Server,
  Cloud,
  Eye,
  Lock,
  Loader,
  User,
  Cpu,
  AlertTriangle,
  Info,
  FileCode,
  Image,
  Clock,
  History,
  BarChart3,
  Search,
  Target,
  X,
  Paperclip,
  PinIcon as Pin,
  Sprout,
  PinOff,
  StretchHorizontal,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  CircleX,
  MoreVertical,
  MemoryStick,
  Ban,
  FileBraces,
  FolderArchive,
  FolderClosed,
  MessageCircle,
  UnfoldVertical,
  FoldVertical,
  Gpu,
  Check,
  CheckCheck,
} from 'lucide-react';

import { IconName } from './list';

/**
 * Mapping of IconName enum values to Lucide React icon components
 * Icons in this map will be rendered using Lucide, others fall back to custom SVGs
 */
export const LUCIDE_ICON_MAP: Record<string, LucideIcon> = {
  // Navigation & Layout
  [IconName.home]: Home,
  [IconName.back]: ArrowBigLeft,
  [IconName.arrow_left]: ChevronLeft,
  [IconName.arrow_right]: ChevronRight,
  [IconName.arrow_up]: ChevronUp,
  [IconName.arrow_down]: ChevronDown,
  [IconName.arrow_left_double]: ChevronsLeft,
  [IconName.arrow_right_double]: ChevronsRight,
  [IconName.arrows_maximize]: Maximize,
  [IconName.arrows_minimize]: Minimize,
  [IconName.expand]: UnfoldVertical,
  [IconName.minimise]: FoldVertical,
  [IconName.left]: ArrowLeft,

  // Actions & Controls
  [IconName.plus]: Plus,
  [IconName.edit]: Edit,
  [IconName.copy]: Copy,
  [IconName.download]: Download,
  [IconName.upload]: Upload,
  [IconName.refresh]: RefreshCw,
  [IconName.play]: Play,
  [IconName.stop]: Square,
  [IconName.bin]: Trash2,
  [IconName.cross]: X,
  [IconName.more]: MoreVertical,
  [IconName.attachment]: Paperclip,
  [IconName.contact]: MessageCircle,

  // Data & Storage
  [IconName.db]: Database,
  [IconName.folder]: Folder,
  [IconName.dataset]: FolderClosed,
  [IconName.file]: File,
  [IconName.table]: Table,
  [IconName.list]: List,
  [IconName.server]: Server,
  [IconName.cloud]: Cloud,

  // Interface Elements
  [IconName.settings]: Settings,
  [IconName.eye]: Eye,
  [IconName.lock]: Lock,
  [IconName.loading]: Loader,
  [IconName.user_square]: User,

  // System & Hardware
  [IconName.terminal]: Terminal,
  [IconName.cpu]: Cpu,
  [IconName.ram]: MemoryStick,
  [IconName.gpu]: Gpu,

  // Status & Alerts
  [IconName.warning]: AlertTriangle,
  [IconName.error]: CircleX,
  [IconName.info]: Info,
  [IconName.validate]: Check,
  [IconName.data_validation]: CheckCheck,
  [IconName.info_block]: Info,

  // Files & Documents
  [IconName.fileData]: FileBraces,
  [IconName.filecode]: FileCode,
  [IconName.fileImage]: Image,
  [IconName.fileZip]: FolderArchive,

  // Time & History
  [IconName.time]: Clock,
  [IconName.history]: History,

  // Charts & Analytics
  [IconName.stats]: BarChart3,

  // General UI
  [IconName.card]: StretchHorizontal,
  [IconName.block]: Ban,
  [IconName.glass]: Search,
  [IconName.target]: Target,

  // Additional mappings
  [IconName.pin_empty]: Pin,
  [IconName.pin_filled]: PinOff,
  [IconName.creation]: Sprout, // closest equivalent
};

/**
 * Check if an icon has a Lucide mapping
 */
export function isLucideIcon(iconName: IconName): boolean {
  return iconName in LUCIDE_ICON_MAP;
}

/**
 * Get the Lucide icon component for a given IconName
 */
export function getLucideIcon(iconName: IconName): LucideIcon | null {
  return LUCIDE_ICON_MAP[iconName] || null;
}

/**
 * Get all icon names that have Lucide mappings (for testing/debugging)
 */
export function getLucideMappedIcons(): IconName[] {
  return Object.keys(LUCIDE_ICON_MAP) as unknown as IconName[];
}

/**
 * Statistics about the mapping
 */
export const MAPPING_STATS = {
  totalLucideMapped: Object.keys(LUCIDE_ICON_MAP).length,
  // This will be updated once we know the total count from the enum
  get mappingPercentage() {
    // Approximate based on our analysis of 110 total icons
    return Math.round((this.totalLucideMapped / 110) * 100);
  },
};
