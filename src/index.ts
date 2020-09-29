import { library } from '@fortawesome/fontawesome-svg-core';

// Font Awesome icons
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import Button from './components/button';
import IconButton from './components/icon-button';
import FooterButton from './components/footer-button';
import Card from './components/card';
import Tooltip from './components/tooltip';

// Theme
import ThemeProvider from './theme/ThemeProvider';

library.add(fas, far);

export { Button, FooterButton, IconButton, Card, Tooltip, ThemeProvider };
