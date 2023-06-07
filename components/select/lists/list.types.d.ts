import React from 'react';
export interface SelectListProps {
    options: string[];
    value: string[];
    onChange: (value: string[]) => void;
    additionalTexts?: string[];
    additionalComponents?: React.ReactNode[];
    onClose: () => void;
}
