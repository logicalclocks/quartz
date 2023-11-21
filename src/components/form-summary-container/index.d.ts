import { FlexProps } from 'rebass';
export interface FormSummaryContainerProps extends Omit<FlexProps, 'css'> {
    hasScrollOnScreen?: boolean;
    children: any;
}
declare const FormSummaryContainer: ({ hasScrollOnScreen, children, ...props }: FormSummaryContainerProps) => import("react/jsx-runtime").JSX.Element;
export default FormSummaryContainer;
