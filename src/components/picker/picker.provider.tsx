import React, { FC, useState } from 'react';
import PickerContext, { PickerContextDefault } from './picker.context';

export interface CategoriesProviderProps {
  children: React.ReactNode;
}

const PickerProvider: FC<CategoriesProviderProps> = ({
  children,
}: CategoriesProviderProps) => {
  const [value, setValue] = useState(PickerContextDefault);

  return (
    <PickerContext.Provider value={[value, setValue]}>
      {children}
    </PickerContext.Provider>
  );
};

export default PickerProvider;
