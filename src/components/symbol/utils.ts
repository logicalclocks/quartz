import { SymbolMode } from './index';
import svg from '../../sources/basketSvgs';

export const getSymbolIcon = (mode: SymbolMode, inBasket: boolean) => {
  const icons: [SymbolMode, boolean, any][] = [
    [SymbolMode.single, true, svg.single_basket],
    [SymbolMode.single, false, svg.single_not_basket],
    [SymbolMode.bulk, true, svg.bulk_basket],
    [SymbolMode.bulk, false, svg.bulk_not_basket],
  ];

  const [, , icon] =
    icons.find(
      ([modeType, basket]) => inBasket === basket && modeType === mode,
    ) || [];

  return icon;
};
