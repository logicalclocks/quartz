import { LucideIcon as LucideIconType, LucideProps } from 'lucide-react';
import { path, prop, split } from 'ramda';
import { BoxProps, Flex } from 'rebass';
import { useTheme } from '../../theme/theme';
import { Color, IconSizes } from '../../theme/types';

export interface LucideIconProps extends Omit<BoxProps, 'css' | 'color'> {
  /** Lucide icon component */
  icon: LucideIconType;
  /** Quartz theme color */
  color?: Color;
  /** Quartz icon size */
  size?: IconSizes;
  /** Additional Lucide-specific props (strokeWidth, etc.) */
  lucideProps?: Omit<LucideProps, 'color' | 'size'>;
}

/**
 * LucideIcon component provides direct access to any Lucide React icon
 * with integrated Quartz theming system. Only accepts Lucide icon components
 * for maximum tree-shaking benefits.
 *
 * @example
 * import { Home, Settings, Database } from 'lucide-react';
 *
 * // Basic usage
 * <LucideIcon icon={Home} color="primary" size="lg" />
 *
 * // With theme colors
 * <LucideIcon icon={Database} color="labels.blue" size="xl" />
 *
 * // With additional Lucide props
 * <LucideIcon
 *   icon={Settings}
 *   color="black"
 *   size="md"
 *   lucideProps={{ strokeWidth: 1.5 }}
 * />
 */
export const LucideIcon = ({
  icon: IconComponent,
  color = 'black',
  size = 'lg',
  lucideProps = {},
  ...props
}: LucideIconProps) => {
  const theme = useTheme();
  const themeColor = path<string>(split('.', color), theme.colors)!;
  const iconSize = prop(size, theme.iconSizes);

  return (
    <Flex
      {...props}
      sx={{
        minWidth: iconSize,
        height: 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        svg: {
          width: iconSize,
          height: iconSize,
        },
        ...props.sx,
      }}
    >
      <IconComponent color={themeColor} size={iconSize} {...lucideProps} />
    </Flex>
  );
};
