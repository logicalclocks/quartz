import React, { FC } from 'react';
import useOnClickOutside from '../../utils/useClickOutside';
import StickyPortal, { CONTENT_ID } from '../sticky-portal/StickyPortal';

interface DropdownWrapperProps {
  children: any;
  containerRef: any;
  appendToBody: any;
  onClickOutside: any;
}
const DropdownWrapper: FC<DropdownWrapperProps> = ({
  children,
  containerRef,
  appendToBody,
  onClickOutside,
}) => {
  useOnClickOutside<HTMLDivElement>(
    onClickOutside,
    [containerRef],
    [CONTENT_ID],
  );

  return appendToBody ? (
    <StickyPortal refEl={containerRef?.current} handleClose={onClickOutside}>
      {children}
    </StickyPortal>
  ) : (
    children
  );
};

export default DropdownWrapper;
