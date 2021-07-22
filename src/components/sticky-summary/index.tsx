import React, { FC } from 'react';
import { Box, Flex } from 'rebass';
import styles, {
  boxStyles,
  boxButtonStyles,
  mainBoxStyles,
} from './sticky-summary.styles';
import Title from '../typography/title';
import Labeling from '../typography/labeling';
import Badge from '../badges/badge';

export interface StickySummaryProps {
  title?: string;
  firstValue?: string;
  secondValue?: string;
  mainButton: React.ReactNode;
  secondaryButton?: React.ReactNode;
  hasScrollOnScreen?: boolean;
  errorsValue?: string;
}

const StickySummary: FC<StickySummaryProps> = ({
  title,
  firstValue,
  secondValue,
  mainButton,
  secondaryButton,
  hasScrollOnScreen = true,
  errorsValue,
  ...props
}: StickySummaryProps) => (
  <Flex sx={{ ...styles(hasScrollOnScreen) }} {...props}>
    <Flex sx={{ ...mainBoxStyles }}>
      <Box sx={{ ...boxStyles }}>
        {title && <Title sx={{ textTransform: 'normal' }}>{title}</Title>}
        {errorsValue && <Badge variant="fail" value={errorsValue} />}
        {firstValue && !errorsValue && (
          <Labeling gray bold>
            {firstValue}
          </Labeling>
        )}
        {secondValue && !errorsValue && (
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
  </Flex>
);

export default StickySummary;
