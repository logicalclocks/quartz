import { Flex, FlexProps } from 'rebass';
import styles, { mainBoxStyles } from './form-summary-container.styles';

export interface FormSummaryContainerProps extends Omit<FlexProps, 'css'> {
  hasScrollOnScreen?: boolean;
  children: any;
}

const FormSummaryContainer = ({
  hasScrollOnScreen = true,
  children,
  ...props
}: FormSummaryContainerProps) => (
  <Flex sx={{ ...styles(hasScrollOnScreen) }} {...props}>
    <Flex sx={{ ...mainBoxStyles }}>{children}</Flex>
  </Flex>
);

export default FormSummaryContainer;
