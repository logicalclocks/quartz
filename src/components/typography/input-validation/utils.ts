import icons from './icons/index';

export const getIcon = (intent: 'success' | 'fail' | 'warning' | 'neutral') => {
  const iconsMap = new Map<string, React.ReactNode>([
    ['success', icons.success],
    ['warning', icons.warning],
    ['neutral', icons.neutral],
  ]);

  return iconsMap.get(intent);
};
