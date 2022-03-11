import { useTheme } from 'emotion-theming';
import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';
import { IThemeColors } from '../..';
import { IconName, getIcon } from './list';
import { ITheme } from '../../theme/types';
import { path, split } from 'ramda';

export interface GetIconProps extends Omit<BoxProps, 'css' | 'color'> {
  icon: IconName;
  color?:
    | Exclude<keyof IThemeColors, 'labels'>
    | `labels.${keyof IThemeColors['labels']}`;
  /** width of the svg, height will scale accordingly */
  size?: number | string;
}
const GetIcon: FC<GetIconProps> = ({
  icon,
  color = 'black',
  size = 18,
  ...props
}) => {
  const theme = useTheme<ITheme>();
  const themeColor = path<string>(split('.', color), theme.colors)!;
  return (
    <Box
      sx={{
        svg: {
          width: typeof size === 'number' ? `${size}px` : size,
          height: 'auto',
        },
        ...props.sx,
      }}
      {...props}
    >
      {getIcon(icon, themeColor)}
    </Box>
  );
};

export default GetIcon;
