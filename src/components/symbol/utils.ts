import { SymbolMode } from './types';
import svg, { invalidFeatureGroup } from '../../sources/basketSvgs';

export const getSymbolIcon = (
  mode: SymbolMode,
  inBasket: boolean,
  isHover: boolean,
  possible: boolean,
) => {
  if (mode === SymbolMode.bulk && !possible) return invalidFeatureGroup;

  const icons: [SymbolMode, boolean, boolean, any][] = [
    [SymbolMode.single, true, false, svg.single_basket],
    [SymbolMode.single, true, true, svg.single_basket_hover],
    [SymbolMode.single, false, false, svg.single_not_basket],
    [SymbolMode.single, false, true, svg.single_not_basket_hover],
    [SymbolMode.bulk, true, false, svg.bulk_basket],
    [SymbolMode.bulk, true, true, svg.bulk_basket_hover],
    [SymbolMode.bulk, false, false, svg.bulk_not_basket],
    [SymbolMode.bulk, false, true, svg.bulk_not_basket_hover],
  ];

  const [, , , icon] =
    icons.find(
      ([modeType, basket, hover]) =>
        inBasket === basket && modeType === mode && isHover === hover,
    ) || [];

  return icon;
};
