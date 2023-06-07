import { FC } from 'react';
import { BoxProps } from 'rebass';
import { Color, IconSizes } from '../../theme/types';
import { IconName } from './list';
export interface GetIconProps extends Omit<BoxProps, 'css' | 'color'> {
    icon: IconName;
    color?: Color;
    /** width of the svg, height will scale accordingly */
    size?: IconSizes;
}
declare const GetIcon: FC<GetIconProps>;
export default GetIcon;
