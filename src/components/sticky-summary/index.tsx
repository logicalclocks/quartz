import React, { FC } from 'react';
import { boxStyles, boxButtonStyles } from './sticky-summary.styles';
import Title from '../typography/title';
import Labeling from '../typography/labeling';
import FormSummaryContainer from '../form-summary-container';
import { Badge } from '../badge';
import { Flex } from '../flex';
import { Box } from '../box';

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
    <Flex sx={{ ...boxStyles }}>
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
    </Flex>
    <Flex sx={{ ...boxButtonStyles }}>
      {secondaryButton && <Box>{secondaryButton}</Box>}
      <Box ml="20px">{mainButton}</Box>
    </Flex>
  </FormSummaryContainer>
);

export default StickySummary;
