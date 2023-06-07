import { Box } from 'rebass';
import Value from '../../typography/value';
import styles from './empty-folder-info.styles';

const EmptyFolderInfo = () => (
  <Box sx={styles}>
    <Value as="h2" textAlign="center">
      Empty folder
    </Value>
  </Box>
);

export default EmptyFolderInfo;
