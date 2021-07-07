import React, { FC } from 'react';
import { Text, TextProps, Link, LinkProps } from 'rebass';

export interface HoverableTextProps extends Omit<TextProps, 'css'> {}
export interface HoverableLinkProps extends Omit<LinkProps, 'css'> {}

const styles = {
  cursor: 'pointer',
  ':hover': {
    color: 'primary',
  },
  transition: 'all .4s',
};

export const HoverableText: FC<HoverableTextProps> = (
  props: HoverableTextProps,
) => {
  let { sx } = { ...props };
  sx = { ...sx, ...styles };
  return <Text {...props} variant="title" sx={sx} />;
};

export const HoverableLink: FC<HoverableLinkProps> = (
  props: HoverableLinkProps,
) => {
  let { sx } = { ...props };
  sx = { ...sx, ...styles };
  return <Link {...props} variant="title" sx={sx} />;
};
