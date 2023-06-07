import React from 'react';
import { ButtonProps } from 'rebass';
import { IconName } from '../icon';
type Indicator = 'vertical' | 'horizontal';
export interface Props extends Omit<ButtonProps, 'css'> {
    newTab?: boolean;
    isActive?: boolean;
    icon?: IconName;
    indicator?: Indicator;
    mode?: 'default' | 'highlight';
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
