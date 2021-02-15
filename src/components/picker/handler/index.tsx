import React, { useContext, useEffect } from 'react';
// @ts-ignore
import { Handle } from 'rc-slider';
import TooltipWrapper from '../tooltip';
import PickerContext from '../picker.context';

// @ts-ignore
const PickerHandler = React.forwardRef((props: any, ref: any) => {
  const { value, dragging, index, ...restProps } = props;

  const [context, setContext] = useContext(PickerContext);

  useEffect(() => {
    if (dragging) {
      setContext((v: any) => ({
        ...v,
        isDraggable: dragging,
        activeHandlerId: index,
      }));
    }
  }, [dragging, index]);

  return (
    <TooltipWrapper
      value={value}
      visible={context.isHover}
      dragging={dragging}
      index={index}
      key={index}
    >
      <Handle value={value} {...restProps}>
        <div className="icon" />
      </Handle>
    </TooltipWrapper>
  );
});

export default PickerHandler;
