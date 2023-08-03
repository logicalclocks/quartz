import { Box, BoxProps } from 'rebass';

import Value from '../typography/value';
import Labeling from '../typography/labeling';

import * as S from './styles';
import Spinner from '../spinner';

export interface Props extends Omit<BoxProps, 'css'> {
  /** Text for the badge. E.g. `deployment` */
  text: string;
  /** Value for the badge. E.g. `pending` or 18 */
  value: string | number;
  /** Color variants: e.g. `green` */
  variant?: 'white' | 'gray';
  loading?: boolean;
}

export const TextValueBadge = ({
  text,
  value,
  variant = 'white',
  loading,
  sx,
  ...props
}: Props) => (
  <Box
    tx="variants.badges.keyValue"
    sx={{ ...S.wrapper, ...sx }}
    variant={variant}
    {...props}
  >
    <Labeling as="span">{text}</Labeling>
    <Value as="span">
      {loading ? <Spinner height="10px" color="gray" size={12} /> : value}
    </Value>
  </Box>
);
