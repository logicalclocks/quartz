import React, { FC } from 'react';
import { Box, Flex } from 'rebass';
import styles, { boxStyles, boxButtonStyles } from './sticky-summary.styles';
import Title from '../typography/title';
import Labeling from '../typography/labeling';

export interface StickySummaryProps {
  title?: string;
  firstValue?: string;
  secondValue?: string;
  mainButton: React.ReactNode;
  secondaryButton?: React.ReactNode;
}

const StickySummary: FC<StickySummaryProps> = ({
  title,
  firstValue,
  secondValue,
  mainButton,
  secondaryButton,
  ...props
}: StickySummaryProps) => (
  <Flex width="100%" sx={{ ...styles }} {...props}>
    <Box sx={{ ...boxStyles }}>
      {title && <Title sx={{ textTransform: 'normal' }}>{title}</Title>}
      {firstValue && (
        <Labeling gray bold>
          {firstValue}
        </Labeling>
      )}
      {secondValue && (
        <Labeling gray bold>
          {secondValue}
        </Labeling>
      )}
    </Box>

    <Box sx={{ ...boxButtonStyles }}>
      {secondaryButton && <Box>{secondaryButton}</Box>}
      <Box>{mainButton}</Box>
    </Box>
  </Flex>
);

export default StickySummary;
