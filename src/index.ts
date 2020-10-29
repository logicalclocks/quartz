import { library } from '@fortawesome/fontawesome-svg-core';

// Font Awesome icons
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import Avatar from './components/avatar';
import Button from './components/button';
import Card from './components/card';
import Code from './components/code';
import Checkbox from './components/checkbox';
import Callout from './components/callout';
import Dropdown from './components/dropdown';
import FooterButton from './components/footer-button';
import Header from './components/header';
import IconButton from './components/icon-button';
import Input from './components/input';
import InputInfo from './components/input-info';
import Label from './components/label';
import List from './components/list/container';
import ListItem from './components/list/item';
import Tooltip from './components/tooltip';
import Select from './components/select';
import ToggleButton from './components/toggle-button';

// Popups
import Drawer from './components/popup/drawer';
import DrawerSection from './components/popup/drawer/drawer-section';
import Popup from './components/popup';
import TinyPopup from './components/popup/tiny';

// Bars
import Bar from './components/bar';
import ProgressBar from './components/bar/progress';
import FreshnessBar from './components/bar/freshness';

// Badges
import User from './components/user';
import TextValueBadge from './components/badges/text-value-badge';
import Badge from './components/badges/badge';
import Dot from './components/badges/dot';

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

// Typography
import Value from './components/typography/value';
import Text from './components/typography/text';
import Title from './components/typography/title';
import Subtitle from './components/typography/subtitle';
import Labeling from './components/typography/labeling';
import Microlabeling from './components/typography/microlabeling';

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
  Avatar,
  Button,
  Card,
  Code,
  Checkbox,
  Callout,
  Dropdown,
  FooterButton,
  Header,
  IconButton,
  Input,
  InputInfo,
  Label,
  Logo,
  List,
  ListItem,
  Select,
  ThemeProvider,
  ToggleButton,
  Tooltip,
  // Popups
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
  Dot,
  // Navigation
  Navigation,
  NavigationItem,
  NavigationCategory,
  NavigationProvider,
  NavigationContext,
  // Hooks
  useDropdown,
  useNavigation,
  // Row
  Row,
  RowGroup,
  RowItem,
  Picker,
  SingleRangeSlider,
  MultiRangeSlider,
  //  Typography
  Value,
  Text,
  Title,
  Subtitle,
  Microlabeling,
  Labeling,
  StickySummary,
  //  Icons
  FolderIcon,
  useOnClickOutside,
  theme,
};
