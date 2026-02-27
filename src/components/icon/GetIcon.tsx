import { path, prop, split } from 'ramda';
import { BoxProps, Flex } from 'rebass';
import { useTheme } from '../../theme/theme';
import { Color, IconSizes } from '../../theme/types';
import { getIcon, IconName } from './list';
import { getLucideIcon } from './lucide-mappings';
import { getCustomIcon } from './custom-icons';

export interface GetIconProps extends Omit<BoxProps, 'css' | 'color'> {
  icon: IconName;
  color?: Color;
  /** width of the svg, height will scale accordingly */
  size?: IconSizes;
}
const GetIcon = ({
  icon,
  color = 'black',
  size = 'lg',
  ...props
}: GetIconProps) => {
  const theme = useTheme();
  const themeColor = path<string>(split('.', color), theme.colors)!;
  const iconSize = prop(size, theme.iconSizes);

  // Icon resolution priority:
  // 1. Try Lucide icon first (modern, tree-shakable)
  // 2. Try custom icon implementation
  // 3. Fall back to original getIcon function
  const LucideIcon = getLucideIcon(icon);
  let iconElement;

  if (LucideIcon) {
    // Use Lucide React icon
    iconElement = <LucideIcon color={themeColor} size={iconSize} />;
  } else {
    // Try custom icon implementation
    const customIcon = getCustomIcon(icon, themeColor, iconSize);
    if (customIcon) {
      iconElement = customIcon;
    } else {
      // Fall back to original system for any remaining icons
      iconElement = getIcon(icon, themeColor, iconSize);
    }
  }

  return (
    <Flex
      {...props}
      sx={{
        minWidth: iconSize,
        height: 'auto',
        svg: {
          width: iconSize,
          height: iconSize,
        },
        ...props.sx,
      }}
    >
      {iconElement}
    </Flex>
  );
};

export default GetIcon;
