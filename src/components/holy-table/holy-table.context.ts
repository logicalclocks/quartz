import { createContext } from 'react';

type ContextProps = {
  bordered: boolean;
  padded: boolean;
  hoverable: boolean;
  middleColumn?: number;
};

const HolyTableContext = createContext<ContextProps>({
  bordered: true,
  padded: true,
  hoverable: true,
});

export default HolyTableContext;
