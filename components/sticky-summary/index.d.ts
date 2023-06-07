import React, { FC } from 'react';
export interface StickySummaryProps {
    title?: string;
    firstValue?: string;
    secondValue?: string;
    mainButton: React.ReactNode;
    secondaryButton?: React.ReactNode;
    errorsValue?: string;
    hasScrollOnScreen?: boolean;
}
declare const StickySummary: FC<StickySummaryProps>;
export default StickySummary;
