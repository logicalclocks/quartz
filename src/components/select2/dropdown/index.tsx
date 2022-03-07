import React, { FC } from 'react';
import StickyPortal from '../../sticky-portal/StickyPortal';

const DropdownWrapper: FC<{
  children: any;
  refEl: any;
  appendToBody: boolean;
  handleClickOutside: () => void;
}> = ({ children, refEl, appendToBody, handleClickOutside }) => {
  return appendToBody ? (
    <StickyPortal handleClose={handleClickOutside} refEl={refEl}>
      {children}
    </StickyPortal>
  ) : (
    children
  );
};

export default DropdownWrapper;
