import React, { FC } from 'react';
import { Button } from 'rebass';

export interface ButtonProps {
  variant: string;
}

const StyledButton: FC<ButtonProps> = (props: ButtonProps) => (
  <Button
    {...props}
    sx={{
      display: 'flex',
      flexDirection: 'row',
      padding: '8px 15px',

      position: 'absolute',
      height: '31px',
      left: '25.36%',
      right: '69.27%',
      top: '83px',

      background: '#21B182',

      border: '1px solid #21B182',
      borderRadius: '0',
      boxSizing: 'border-box',

      outlineColor: 'red',

      boxShadow: '0px 5px 15px rgba(33, 177, 130, 0.2)',

      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '12px',
      lineHeight: '15px',

      cursor: 'pointer',

      transition: 'background .3s ease',

      ':hover': {
        background: '#65D3AF',
      },
    }}
  />
);

export default StyledButton;
