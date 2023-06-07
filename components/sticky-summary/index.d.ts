/// <reference types="react" />
export interface StickySummaryProps {
    title?: string;
    firstValue?: string;
    secondValue?: string;
    mainButton: React.ReactNode;
    secondaryButton?: React.ReactNode;
    errorsValue?: string;
    hasScrollOnScreen?: boolean;
}
declare const StickySummary: ({ title, firstValue, secondValue, mainButton, secondaryButton, hasScrollOnScreen, errorsValue, ...props }: StickySummaryProps) => import("react/jsx-runtime").JSX.Element;
export default StickySummary;
