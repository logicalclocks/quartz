import { FC } from 'react';
import { FlexProps } from 'rebass';
export interface FormSummaryContainerProps extends Omit<FlexProps, 'css'> {
    hasScrollOnScreen?: boolean;
    children: any;
}
declare const FormSummaryContainer: FC<FormSummaryContainerProps>;
export default FormSummaryContainer;
