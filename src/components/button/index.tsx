import React, { FC } from 'react';
import { Box, Button as RebassButton, ButtonProps } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

// Styles
import styles from './button.styles';
import { spinner } from '../file-loader/file-loader.styles';

export interface QuartzButtonProps extends Omit<ButtonProps, 'css'> {
  children: React.ReactNode;
  intent?: 'primary' | 'secondary' | 'ghost' | 'inline' | 'alert';
  icon?: IconDefinition;
  href?: string;
  isLoading?: boolean;
}

const Button: FC<QuartzButtonProps> = ({
  intent = 'primary',
  icon,
  children,
  isLoading,
  href,
  ...props
}: QuartzButtonProps) => {
  const component = (
    <RebassButton
      sx={styles}
      pt={isLoading ? '4px' : '8px'}
      pb={isLoading ? '4px' : '8px'}
      maxHeight="33px"
      variant={intent}
      {...props}
    >
      {icon && (
        <span>
          <FontAwesomeIcon icon={icon} size="sm" />
        </span>
      )}
      {!isLoading ? (
        children
      ) : (
        <Box sx={{ ...spinner, maxHeight: '20px' }}>
          <div />
          <div />
          <div />
          <div />
        </Box>
      )}
    </RebassButton>
  );

  if (!!href) {
    return (
      <a
        style={{
          textDecoration: 'none',
        }}
        onClick={(e) => {
          e.preventDefault();
        }}
        href={href}
      >
        {component}
      </a>
    );
  }

  return component;
};

export default Button;
