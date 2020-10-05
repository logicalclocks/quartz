import { library } from '@fortawesome/fontawesome-svg-core';

// Font Awesome icons
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import Button from './components/button';
import Card from './components/card';
import IconButton from './components/icon-button';
import Input from './components/input';
import InputInfo from './components/input-info';
import FooterButton from './components/footer-button';
import Label from './components/label';
import Tooltip from './components/tooltip';
import Avatar from './components/avatar';
import Header from './components/header';

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
import FolderIcon from './components/icons/folder-icon';
// Theme
import ThemeProvider from './theme/ThemeProvider';

// Hooks
import useNavigation from './components/navigation/useNavigation';

library.add(fas, far);

export {
  Avatar,
  Button,
  Card,
  FooterButton,
  Header,
  IconButton,
  Input,
  InputInfo,
  Label,
  Logo,
  ThemeProvider,
  Tooltip,
  // Navigation
  Navigation,
  NavigationItem,
  NavigationCategory,
  NavigationProvider,
  NavigationContext,
  useNavigation,
  //  Typography
  Value,
  Title,
  Subtitle,
  Microlabeling,
  Labeling,
  //  Icons
  FolderIcon,
};
