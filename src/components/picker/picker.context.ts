import React from 'react';

export interface IPickerContext {
  isDraggable: boolean;
  isHover: boolean;
  activeHandlerId: number;
}

export const PickerContextDefault = [
  {
    isDraggable: false,
    isHover: false,
    activeHandlerId: 0,
  },
  () => {},
];

const PickerContext =
  React.createContext<Array<IPickerContext | any>>(PickerContextDefault);

export default PickerContext;
