import React, { FC } from 'react';
import { Box } from 'rebass';
import { boxStyles, boxButtonStyles } from './sticky-summary.styles';
import Title from '../typography/title';
import Labeling from '../typography/labeling';
import FormSummaryContainer from '../form-summary-container';
import Badge from '../badges/badge';

export interface StickySummaryProps {
  title?: string;
  firstValue?: string;
  secondValue?: string;
  mainButton: React.ReactNode;
  secondaryButton?: React.ReactNode;
  errorsValue?: string;
  hasScrollOnScreen?: boolean;
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
  <FormSummaryContainer hasScrollOnScreen={hasScrollOnScreen} {...props}>
    <Box sx={{ ...boxStyles }}>
      {title && (
        <Title uppercase sx={{ textTransform: 'normal' }}>
          {title}
        </Title>
      )}
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
  </FormSummaryContainer>
);

export default StickySummary;
