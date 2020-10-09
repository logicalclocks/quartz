import { library } from '@fortawesome/fontawesome-svg-core';

// Font Awesome icons
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import Avatar from './components/avatar';
import Button from './components/button';
import Card from './components/card';
import Checkbox from './components/checkbox';
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

// Typography
import Value from './components/typography/value';
import Title from './components/typography/title';
import Subtitle from './components/typography/subtitle';
import Labeling from './components/typography/labeling';
import Microlabeling from './components/typography/microlabeling';

// Icons
import FolderIcon from './components/icons/folder.icon';
// Theme
import ThemeProvider from './theme/ThemeProvider';

// Hooks
import useDropdown from './utils/useDropdown';
import useNavigation from './components/navigation/useNavigation';
import useOnClickOutside from './utils/useClickOutside';

library.add(fas, far);

export {
  Avatar,
  Button,
  Card,
  Checkbox,
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
  //  Typography
  Value,
  Title,
  Subtitle,
  Microlabeling,
  Labeling,
  //  Icons
  FolderIcon,
  useOnClickOutside,
};
