import { createContext } from 'react';

type ContextProps = {
  bordered: boolean;
  padded: boolean;
  hoverable: boolean;
  rowHeight: string;
  standalone: boolean;
  middleColumn?: number;
};

const HolyTableContext = createContext<ContextProps>({} as ContextProps);

export default HolyTableContext;
