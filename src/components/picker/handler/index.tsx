import React, { useContext, useEffect } from 'react';
import TooltipWrapper from '../tooltip';
import PickerContext from '../picker.context';

const PickerHandler = React.forwardRef((props: any) => {
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
  }, [dragging, index, setContext]);

  return (
    <TooltipWrapper
      value={value}
      visible={context.isHover}
      dragging={dragging}
      index={index}
      key={index}
    >
      <div value={value} {...restProps}>
        <div className="icon" />
      </div>
    </TooltipWrapper>
  );
});

export default PickerHandler;
