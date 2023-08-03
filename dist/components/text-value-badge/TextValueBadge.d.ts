import { BoxProps } from 'rebass';
export interface Props extends Omit<BoxProps, 'css'> {
    /** Text for the badge. E.g. `deployment` */
    text: string;
    /** Value for the badge. E.g. `pending` or 18 */
    value: string | number;
    /** Color variants: e.g. `green` */
    variant?: 'white' | 'gray';
    loading?: boolean;
}
export declare const TextValueBadge: ({ text, value, variant, loading, sx, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
