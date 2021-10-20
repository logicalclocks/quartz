export interface SelectOpt {
  key: any;
  label: string;
  additionalText?: string;
  additionalComponent?: React.ReactNode;
}

export enum SelectFormat {
  fit = 'fit',
  fill = 'fill',
}
