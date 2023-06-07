import { FC } from 'react';
import { Box, BoxProps } from 'rebass';
import Microlabeling from '../typography/microlabeling';

import styles from './divider.styles';

export interface DividerProps extends Omit<BoxProps, 'css'> {
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;
  width?: string;
  legend?: string;
}

const Divider: FC<DividerProps> = ({
  mt = '20px',
  mb = '20px',
  mr = '0',
  ml,
  width,
  legend,
  ...props
}) => (
  <Box
    mt={mt}
    mb={mb}
    mr={mr}
    ml={ml || (legend ? '0' : '-20px')}
    width={width || (legend ? '100%' : 'calc(100% + 40px)')}
    {...props}
  >
    {legend ? <Microlabeling gray>{legend}</Microlabeling> : null}
    <Box mt={legend ? '5px' : '0'} sx={styles} height="1px" />
  </Box>
);

export default Divider;
