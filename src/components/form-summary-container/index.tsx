import React, { FC } from 'react';
import { Flex } from 'rebass';
import styles, { mainBoxStyles } from './form-summary-container.styles';

export interface FormSummaryContainerProps {
  hasScrollOnScreen?: boolean;
  children: any;
}

const FormSummaryContainer: FC<FormSummaryContainerProps> = ({
  hasScrollOnScreen = true,
  children,
  ...props
}: FormSummaryContainerProps) => (
  <Flex sx={{ ...styles(hasScrollOnScreen) }} {...props}>
    <Flex sx={{ ...mainBoxStyles }}>{children}</Flex>
  </Flex>
);

export default FormSummaryContainer;
