/// <reference types="react" />
export interface SelectOpt {
    key: any;
    label: string;
    additionalText?: string;
    additionalComponent?: React.ReactNode;
}
export declare enum SelectFormat {
    fit = "fit",
    fill = "fill"
}
