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
import List from './components/list/container';
import ListItem from './components/list/item';

// Navigation
import Navigation from './components/navigation/container';
import NavigationItem from './components/navigation/item';
import NavigationCategory from './components/navigation/category';
import NavigationProvider from './components/navigation/context/navigation.provider';
import NavigationContext from './components/navigation/context/navigation.context';

// Theme
import ThemeProvider from './theme/ThemeProvider';

// Hooks
import useDropdown from './utils/useDropdown';
import useNavigation from './components/navigation/useNavigation';
import useOnClickOutside from './utils/useClickOutside';

library.add(fas, far);

export {
  Button,
  Card,
  FooterButton,
  IconButton,
  Input,
  InputInfo,
  Label,
  List,
  ListItem,
  ThemeProvider,
  Tooltip,
  // Navigation
  Navigation,
  NavigationItem,
  NavigationCategory,
  NavigationProvider,
  NavigationContext,
  // Hooks
  useDropdown,
  useNavigation,
  useOnClickOutside,
};
