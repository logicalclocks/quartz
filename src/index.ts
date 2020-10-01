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

// Theme
import ThemeProvider from './theme/ThemeProvider';

library.add(fas, far);

export {
  Button,
  Card,
  FooterButton,
  IconButton,
  Input,
  InputInfo,
  Label,
  ThemeProvider,
  Tooltip,
};
