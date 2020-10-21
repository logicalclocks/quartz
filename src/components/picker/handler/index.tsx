import React from 'react';
// @ts-ignore
import { Handle, HandleProps } from 'rc-slider';
import TooltipWrapper from '../tooltip';

const PickerHandler = (props: HandleProps) => {
  const { value, dragging, index, ...restProps } = props;

  return (
    <TooltipWrapper value={value} dragging={dragging} index={index} key={index}>
      <Handle value={value} {...restProps} />
    </TooltipWrapper>
  );
};

export default PickerHandler;
