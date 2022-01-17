import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';
import Value from '../../typography/value';
import styles from './empty-folder-info.styles';

export interface EmptyFolderInfoProps extends Omit<BoxProps, 'css'> {}

const EmptyFolderInfo: FC<EmptyFolderInfoProps> = () => (
  <Box sx={styles}>
    <Value as="h2" textAlign="center">
      Empty folder
    </Value>
  </Box>
);

export default EmptyFolderInfo;
