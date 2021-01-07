import { library } from '@fortawesome/fontawesome-svg-core';

// Font Awesome icons
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import Button from './components/button';
import Card from './components/card';
import Code from './components/code';
import Checkbox from './components/checkbox';
import Callout, { CalloutTypes } from './components/callout';
import CheckboxGroup from './components/checkbox/checkbox-group';
import Radio from './components/radio';
import RadioGroup from './components/radio/radio-group';
import Dropdown from './components/dropdown';
import FooterButton from './components/footer-button';
import Header from './components/header';
import AlternativeHeader from './components/alternative-header';
import Icon from './components/icon';
import IconButton from './components/icon-button';
import MenuButton from './components/header/menu-button';
import Input from './components/input';
import BlurInput from './components/table/editable/blur-input';
import InputInfo from './components/input-info';
import Label from './components/label';
import List from './components/list/container';
import ListItem from './components/list/item';
import Pagination from './components/pagination';
import Tooltip from './components/tooltip';
import TooltipPositions from './components/tooltip/positions';
import Select from './components/select';
import SplitGraph from './components/graphs/split-graph';
import ToggleButton from './components/toggle-button';
import NotificationsContainer from './components/notifications/index';
import NotificationsManager from './components/notifications/notifications-manager';
import Divider from './components/divider';

// Popups
import Drawer from './components/popup/drawer';
import DrawerSection from './components/popup/drawer/drawer-section';
import Popup from './components/popup';
import TinyPopup from './components/popup/tiny';
import usePopup from './utils/usePopup';

// Bars
import Bar from './components/bar';
import ProgressBar from './components/bar/progress';
import FreshnessBar from './components/bar/freshness';

// Badges
import User from './components/user';
import TextValueBadge from './components/badges/text-value-badge';
import Badge from './components/badges/badge';
import Dot from './components/badges/dot';
import ProjectBadge from './components/badges/project-badge';

// Navigation
import Navigation from './components/navigation/container';
import NavigationItem from './components/navigation/item';
import NavigationCategory from './components/navigation/category';
import NavigationProvider from './components/navigation/context/navigation.provider';
import NavigationContext from './components/navigation/context/navigation.context';
import Logo from './components/logo';

// Sticky Summary
import StickySummary from './components/sticky-summary';

// Row
import Row from './components/row/container';
import RowGroup from './components/row/group';
import RowItem from './components/row/item';

// Picker
import Picker from './components/picker/container';
import SingleRangeSlider from './components/picker/single-range-slider';
import MultiRangeSlider from './components/picker/multi-range-slider';

// Table
import Table from './components/table';
import ReadOnlyTable from './components/table/read-only';
import EditableTable from './components/table/editable';

// Typography
import Value from './components/typography/value';
import Text from './components/typography/text';
import Title from './components/typography/title';
import Subtitle from './components/typography/subtitle';
import Labeling from './components/typography/labeling';
import Microlabeling from './components/typography/microlabeling';
import HoverableText from './components/typography/hoverable';

// Icons
import FolderIcon from './components/icons/folder.icon';
// Theme
import ThemeProvider from './theme/ThemeProvider';
import theme from './theme/theme';

// Hooks
import useDropdown from './utils/useDropdown';
import useNavigation from './components/navigation/useNavigation';
import useOnClickOutside from './utils/useClickOutside';

library.add(fas, far);

export {
  Button,
  Card,
  Code,
  Checkbox,
  Callout,
  CalloutTypes,
  CheckboxGroup,
  Dropdown,
  FooterButton,
  Header,
  AlternativeHeader,
  Icon,
  IconButton,
  MenuButton,
  Input,
  BlurInput,
  InputInfo,
  Label,
  Logo,
  List,
  ListItem,
  Pagination,
  Select,
  ThemeProvider,
  ToggleButton,
  Tooltip,
  TooltipPositions,
  Radio,
  RadioGroup,
  Divider,
  // Popups
  usePopup,
  Popup,
  Drawer,
  TinyPopup,
  DrawerSection,
  // Bars
  Bar,
  ProgressBar,
  FreshnessBar,
  // Badges
  User,
  TextValueBadge,
  Badge,
  ProjectBadge,
  Dot,
  // Navigation
  Navigation,
  NavigationItem,
  NavigationCategory,
  NavigationProvider,
  NavigationContext,
  // Notifications
  NotificationsContainer,
  NotificationsManager,
  // Hooks
  useDropdown,
  useNavigation,
  // Row
  Row,
  RowGroup,
  RowItem,
  // Picker
  Picker,
  SingleRangeSlider,
  MultiRangeSlider,
  //  Table
  Table,
  EditableTable,
  ReadOnlyTable,
  //  Typography
  Value,
  Text,
  HoverableText,
  Title,
  Subtitle,
  Microlabeling,
  Labeling,
  StickySummary,
  SplitGraph,
  //  Icons
  FolderIcon,
  useOnClickOutside,
  theme,
};
