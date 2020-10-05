import React from 'react';

export interface NavigationContextValue {
  trackBy: string;
  activePath: string[];
  openPath: string[];
  tree: any;
  onActivate: (name: string) => void;
  onOpen: (name: string) => void;
  onBack: (name: string) => void;
}

const NavigationContext = React.createContext<NavigationContextValue>({
  trackBy: 'title',
  activePath: [],
  openPath: [],
  tree: [],
  onActivate: () => {},
  onOpen: () => {},
  onBack: () => {},
});

export default NavigationContext;
