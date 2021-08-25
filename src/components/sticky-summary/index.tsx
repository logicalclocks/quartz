import React, { FC } from 'react';
import { Box } from 'rebass';
import { boxStyles, boxButtonStyles } from './sticky-summary.styles';
import Title from '../typography/title';
import Labeling from '../typography/labeling';
import Value from '../typography/value';
import FormSummaryContainer, {
  FormSummaryContainerProps,
} from '../form-summary-container';

export interface StickySummaryProps
  extends Omit<FormSummaryContainerProps, 'children'> {
  title?: string;
  firstValue?: string;
  secondValue?: string;
  mainButton: React.ReactNode;
  secondaryButton?: React.ReactNode;
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
  <FormSummaryContainer hasScrollOnScreen={hasScrollOnScreen} {...props}>
    <Box sx={{ ...boxStyles }}>
      {title && <Title sx={{ textTransform: 'normal' }}>{title}</Title>}
      {errorsValue && <Value color="labels.red">{errorsValue}</Value>}
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
