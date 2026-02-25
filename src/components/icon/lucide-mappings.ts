import { LucideIcon } from 'lucide-react';
import { IconName } from './list';

// Import Lucide icons for the mappings
import { 
  Home,
  Terminal,
  Plus,
  Database,
  Settings,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
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
  UserCircle,
  User,
  Cpu,
  HardDrive,
  Zap,
  AlertTriangle,
  AlertCircle,
  Info,
  CheckCircle,
  FileText,
  FileCode,
  Image,
  Archive,
  Clock,
  History,
  BarChart3,
  CreditCard,
  Search,
  Target,
  X,
  MoreHorizontal,
  Paperclip,
  Expand,
  PinIcon as Pin,
  Star,
  Bookmark
} from 'lucide-react';

/**
 * Mapping of IconName enum values to Lucide React icon components
 * Icons in this map will be rendered using Lucide, others fall back to custom SVGs
 */
export const LUCIDE_ICON_MAP: Record<string, LucideIcon> = {
  // Navigation & Layout
  [IconName.home]: Home,
  [IconName.back]: ArrowLeft,
  [IconName.arrow_left]: ArrowLeft,
  [IconName.arrow_right]: ArrowRight,
  [IconName.arrow_up]: ArrowUp,
  [IconName.arrow_down]: ArrowDown,
  [IconName.arrow_left_double]: ChevronsLeft,
  [IconName.arrow_right_double]: ChevronsRight,
  [IconName.arrows_maximize]: Maximize,
  [IconName.arrows_minimize]: Minimize,
  [IconName.expand]: Expand,
  [IconName.minimise]: Minimize,
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
  [IconName.more]: MoreHorizontal,
  [IconName.attachment]: Paperclip,

  // Data & Storage
  [IconName.db]: Database,
  [IconName.folder]: Folder,
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
  [IconName.contact]: UserCircle,
  [IconName.user_square]: User,

  // System & Hardware
  [IconName.terminal]: Terminal,
  [IconName.cpu]: Cpu,
  [IconName.ram]: HardDrive,
  [IconName.gpu]: Zap, // closest equivalent

  // Status & Alerts
  [IconName.warning]: AlertTriangle,
  [IconName.error]: AlertCircle,
  [IconName.info]: Info,
  [IconName.validate]: CheckCircle,
  [IconName.info_block]: Info,

  // Files & Documents
  [IconName.fileData]: FileText,
  [IconName.filecode]: FileCode,
  [IconName.fileImage]: Image,
  [IconName.fileZip]: Archive,

  // Time & History
  [IconName.time]: Clock,
  [IconName.history]: History,

  // Charts & Analytics
  [IconName.stats]: BarChart3,

  // General UI
  [IconName.card]: CreditCard,
  [IconName.block]: Square,
  [IconName.glass]: Search,
  [IconName.target]: Target,
  [IconName.square]: Square,
  
  // Additional mappings
  [IconName.pin_empty]: Pin,
  [IconName.favouriteEmpty]: Star,
  [IconName.creation]: Plus // closest equivalent
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
  return Object.keys(LUCIDE_ICON_MAP) as IconName[];
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
  }
};