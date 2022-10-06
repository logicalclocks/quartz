import React, { FC, useState } from 'react';
import PickerContext, { PickerContextDefault } from './picker.context';

export interface CategoriesProviderProps {
  children: React.ReactNode;
}

const PickerProvider: FC<CategoriesProviderProps> = ({
  children,
}: CategoriesProviderProps) => {
  const state = useState(PickerContextDefault);

  return (
    <PickerContext.Provider value={state}>{children}</PickerContext.Provider>
  );
};

export default PickerProvider;
