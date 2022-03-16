import { useTheme } from 'emotion-theming';
import React, { FC } from 'react';
import { Flex, BoxProps } from 'rebass';
import { IThemeColors, IThemeIconSizes } from '../..';
import { IconName, getIcon } from './list';
import { ITheme } from '../../theme/types';
import { path, split, prop } from 'ramda';

export interface GetIconProps extends Omit<BoxProps, 'css' | 'color'> {
  icon: IconName;
  color?:
    | Exclude<keyof IThemeColors, 'labels'>
    | `labels.${keyof IThemeColors['labels']}`;
  /** width of the svg, height will scale accordingly */
  size?: keyof IThemeIconSizes;
}
const GetIcon: FC<GetIconProps> = ({
  icon,
  color = 'black',
  size = 'lg',
  ...props
}) => {
  const theme = useTheme<ITheme>();
  const themeColor = path<string>(split('.', color), theme.colors)!;
  return (
    <Flex
      sx={{
        svg: {
          width: prop(size, theme.iconSizes),
          height: 'auto',
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
