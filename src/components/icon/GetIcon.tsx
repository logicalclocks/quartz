import { path, prop, split } from 'ramda';
import React, { FC } from 'react';
import { BoxProps, Flex } from 'rebass';
import { useTheme } from '../../theme/theme';
import { Color, IconSizes } from '../../theme/types';
import { getIcon, IconName } from './list';

export interface GetIconProps extends Omit<BoxProps, 'css' | 'color'> {
  icon: IconName;
  color?: Color;
  /** width of the svg, height will scale accordingly */
  size?: IconSizes;
}
const GetIcon: FC<GetIconProps> = ({
  icon,
  color = 'black',
  size = 'lg',
  ...props
}) => {
  const theme = useTheme();
  const themeColor = path<string>(split('.', color), theme.colors)!;
  return (
    <Flex
      sx={{
        svg: {
          width: prop(size, theme.iconSizes),
          height: prop(size, theme.iconSizes),
        },
        ...props.sx,
      }}
      {...props}
    >
      {getIcon(icon, themeColor)}
    </Flex>
  );
};

export default GetIcon;
