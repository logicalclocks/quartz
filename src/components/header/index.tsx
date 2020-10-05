import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';

// Styles
import styles, { leftSectionStyles, rightSectionStyles } from './header.styles';
// Components
import Logo from '../logo';
import MenuButton from './menu-button';

export interface HeaderProps extends Omit<BoxProps, 'css'> {
  children?: React.ReactNode;
  user?: React.ReactNode;
  actions?: React.ReactNode[];
  onMenuClick?: () => void;
}

const Header: FC<HeaderProps> = ({
  children,
  user,
  actions,
  onMenuClick,
}: HeaderProps) => (
  <Box sx={styles} variant="header">
    {/* Left Section */}
    <Box sx={leftSectionStyles}>
      <div>
        <Logo />
      </div>
    </Box>
    <Box
      sx={{
        margin: '0 auto 0 25px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>

    {/* Right Section  */}
    <Box sx={rightSectionStyles}>
      {/*  Actions */}
      <Box>
        {actions?.map((action) => (
          <span>{action}</span>
        ))}
      </Box>

      {/* User */}
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        {user}
      </Box>

      {/* Menu */}
      {onMenuClick && (
        <span onClick={onMenuClick} role="button" tabIndex={0}>
          <MenuButton />
        </span>
      )}
    </Box>
  </Box>
);

export default Header;
